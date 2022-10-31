import jszip from "jszip"

export type LevelMatrix = Array<Array<number>>


/**
 * convert level matrix to two json arrays:
 * - one for the level columns to avoid repeat
 * - one to store rows indexes for each levels
 * @param levels the list of each level matrix
 * 
 * @returns the zipped two json files containing json arrays as blobs
 */
export const packLevel = async (levels: Array<LevelMatrix>) => {
	const result = new jszip()
	const levelColumns: Array<Array<number>> = []
	const levelColumnsIndexes: Array<Array<Array<number>>> = []

	levels.forEach((level) => {
		const indexes: Array<Array<number>> = []
		const firstHalf = level.slice(0, Math.floor(level.length / 2))
		const secondHalf = level.slice(Math.floor(level.length / 2))
		for (let i: number = 0; i < level[0].length * 2; i++) {
			const column = i < level[0].length ? firstHalf.map(row => row[i]) : secondHalf.map(row => row[i - level[0].length])
			let index = levelColumns.findIndex(col => {
				return col.every((value, index) => value === column[index])
			})
			if (index === -1) {
				levelColumns.push(column)
				index = levelColumns.length - 1
			}
			if (i < level[0].length) {
				indexes.push([index, 0])
			} else {
				indexes[i - level[0].length][1] = index
			}
		}
		levelColumnsIndexes.push(indexes)
	})

	const levelColumnsJson = JSON.stringify({
		"c2array": true,
		"size": [levelColumns.length, levelColumns[0].length, 1],
		"data": levelColumns
	})

	const levelColumnsIndexesJson = JSON.stringify({
		"c2array": true,
		"size": [levelColumnsIndexes.length, levelColumnsIndexes[0].length, 2],
		"data": levelColumnsIndexes
	})

	result.file("levelColumns.json", levelColumnsJson)
	result.file("levelColumnsIndexes.json", levelColumnsIndexesJson)

	return await result.generateAsync({ type: "blob" })
}

/**
 * convert zip file to level matrix
 * @param zip zip file to parse
 * 
 * @returns the list of each level matrix
 */
export const unpackLevel = async (zip: jszip) => {
	if (!zip.files["levelColumns.json"] || !zip.files["levelColumnsIndexes.json"]) {
		throw new Error("Invalid zip file")
	}

	const levelColumns = await zip.files["levelColumns.json"].async("string")
	const levelColumnsIndexes = await zip.files["levelColumnsIndexes.json"].async("string")

	const levelColumnsJson = JSON.parse(levelColumns)
	const levelColumnsIndexesJson = JSON.parse(levelColumnsIndexes)

	const levels: Array<LevelMatrix> = []
	levelColumnsIndexesJson.data.forEach((indexes: Array<[number, number]>) => {
		const level: LevelMatrix = []
		indexes.forEach((index: [number, number]) => {
			level.push(
				levelColumnsJson.data[index[0]].concat(levelColumnsJson.data[index[1]])
			)
		})
		levels.push(level)
	})
	return levels
}