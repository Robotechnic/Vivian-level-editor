import jszip from "jszip"
import type { Tile, localStoragetile } from "../stores/tileStore"

export type LevelMatrix = Array<Array<number>>
type ColumnIndex = [number, number]
type LevelColumns = Array<ColumnIndex>
type LevelColumnsArray = Array<LevelColumns>
type JSONsave<T> = {
	c2array: boolean
	size: [number, number, number]
	data: T
}

/**
 * convert level matrix to two json arrays:
 * - one for the level columns to avoid repeat
 * - one to store rows indexes for each levels
 * @param levels the list of each level matrix
 *
 * @returns the zipped two json files containing json arrays as blobs
 */
export const packLevel = async (
	levels: Array<LevelMatrix>,
	tiles: Array<Tile>
) => {
	if (levels.length === 0) {
		throw new Error("No level to pack")
	}

	const result = new jszip()
	const levelColumns: Array<Array<number>> = []
	const levelColumnsIndexes: LevelColumnsArray = []

	levels.forEach(level => {
		const indexes: Array<[number, number]> = []
		const firstHalf = level.slice(0, Math.floor(level.length / 2))
		const secondHalf = level.slice(Math.floor(level.length / 2))
		for (let i = 0; i < level[0].length * 2; i++) {
			const column =
				i < level[0].length
					? firstHalf.map(row => row[i])
					: secondHalf.map(row => row[i - level[0].length])
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
		c2array: true,
		size: [levelColumns.length, levelColumns[0].length, 1],
		data: levelColumns,
	} as JSONsave<Array<Array<number>>>)

	const levelColumnsIndexesJson = JSON.stringify({
		c2array: true,
		size: [levelColumnsIndexes.length, levelColumnsIndexes[0].length, 2],
		data: levelColumnsIndexes,
	} as JSONsave<LevelColumnsArray>)

	result.file("levelColumns.json", levelColumnsJson)
	result.file("levelColumnsIndexes.json", levelColumnsIndexesJson)
	result.file(
		"tiles.json",
		JSON.stringify(
			tiles.map(tile => {
				return {
					name: tile.name,
					data: tile.data.src,
				} as localStoragetile
			})
		)
	)

	return result.generateAsync({ type: "blob" })
}

/**
 * convert zip file to level matrix
 * @param zip zip file to parse
 *
 * @returns the list of each level matrix
 */
export const unpackLevel = async (zip: jszip) => {
	if (
		!zip.files["levelColumns.json"] ||
		!zip.files["levelColumnsIndexes.json"] ||
		!zip.files["tiles.json"]
	) {
		throw new Error("Invalid zip file")
	}

	const levelColumns = await zip.files["levelColumns.json"].async("string")
	const levelColumnsIndexes = await zip.files[
		"levelColumnsIndexes.json"
	].async("string")
	const tiles = await zip.files["tiles.json"].async("string")

	const levelColumnsJson = JSON.parse(levelColumns) as JSONsave<
		Array<Array<number>>
	>
	const levelColumnsIndexesJson = JSON.parse(
		levelColumnsIndexes
	) as JSONsave<LevelColumnsArray>
	const tilesJson = JSON.parse(tiles) as Array<localStoragetile>

	const levels: Array<LevelMatrix> = []
	const middle: number = levelColumnsJson.data[0].length

	levelColumnsIndexesJson.data.forEach((indexes: LevelColumns) => {
		const level: LevelMatrix = []
		indexes.forEach((columnIndex: ColumnIndex) => {
			levelColumnsJson.data[columnIndex[0]].forEach(
				(value: number, index: number) => {
					if (level.length <= index) {
						level.push([])
					}
					level[index].push(value)
				}
			)
			levelColumnsJson.data[columnIndex[1]].forEach(
				(value: number, index: number) => {
					const realIndex = index + middle
					if (level.length <= realIndex) {
						level.push([])
					}
					level[realIndex].push(value)
				}
			)
		})
		levels.push(level)
	})

	return {
		levels,
		tiles: tilesJson.map(tile => {
			const image = new Image()
			image.src = tile.data
			return {
				name: tile.name,
				data: image,
			} as Tile
		}),
	}
}
