import { get, writable } from "svelte/store"

export type LevelMatrix = Array<Array<number>>

// setup stores
export const level = writable(-1)

function createRangeStore(value: number, min: number, max: number) {
	const { subscribe, set, update } = writable<number>(value)

	return {
		subscribe,
		set(value: number) {
			if (value < min) {
				value = min
			} else if (value > max) {
				value = max
			}
			set(value)
		},
		update(updater: (value: number) => number) {
			update(n => {
				n = updater(n)
				if (n < min) {
					n = min
				} else if (n > max) {
					n = max
				}
				return n
			})
		},
	}
}

export const levelWidth = createRangeStore(10, 1, 50)
export const levelHeight = createRangeStore(10, 1, 50)

function createLevelStore() {
	const { subscribe, set, update } = writable<Array<LevelMatrix>>(
		new Array<LevelMatrix>()
	)

	return {
		subscribe,
		set,
		/**
		 * add a new empty level to the store
		 */
		addLevel() {
			update((levels: Array<LevelMatrix>) => {
				return [
					...levels,
					Array.from({ length: get(levelHeight) }, _ =>
						Array<number>(get(levelWidth)).fill(-1)
					),
				]
			})
		},
		/**
		 * add a new given level to the store
		 * @param level the level to add in the store
		 */
		pushLevel(level: LevelMatrix) {
			update((levels: Array<LevelMatrix>) => {
				return [...levels, level]
			})
		},
		/**
		 * remove the level at the given index
		 * @param index level index to remove
		 */
		removeLevel(index: number) {
			update((levels: Array<LevelMatrix>) => {
				return levels.filter((_, i) => i !== index)
			})
		},
		/**
		 * set the level tile at the given position
		 * @param index level index to update
		 * @param x x position to update
		 * @param y y position to update
		 * @param value value to set at the given position
		 */
		setLevelCell(index: number, x: number, y: number, value: number) {
			update((levels: Array<LevelMatrix>) => {
				levels[index][y][x] = value
				return levels
			})
		},
		/**
		 * set width and height of each levels
		 * @param width new level width
		 * @param height new level height
		 */
		resize(width: number, height: number) {
			update((levels: Array<LevelMatrix>) => {
				return levels.map((level: LevelMatrix) => {
					const editedList = level.map((row: Array<number>) => {
						if (row.length >= width) return row.slice(0, width)
						else
							return [
								...row,
								...Array<number>(width - row.length).fill(-1),
							]
					})
					if (editedList.length >= height)
						return editedList.slice(0, height)
					else
						return [
							...editedList,
							...Array.from(
								{ length: height - editedList.length },
								_ => Array<number>(width).fill(-1)
							),
						]
				})
			})
		},
		/**
		 * delete all levels in the project
		 */
		reset() {
			update((_: Array<LevelMatrix>) => new Array<LevelMatrix>())
		},
	}
}

export const levelStore = createLevelStore()

type localStorage = {
	levels: Array<LevelMatrix>
	width: number
	height: number
}

// load localstorage data
const stored = localStorage.getItem("levels")
if (stored) {
	const levels = JSON.parse(stored) as localStorage
	levelStore.set(levels.levels)
	levelWidth.set(levels.width)
	levelHeight.set(levels.height)
}

// save data in localstorage
levelStore.subscribe((levels: LevelMatrix[]) => {
	localStorage.setItem(
		"levels",
		JSON.stringify({
			width: get(levelWidth),
			height: get(levelHeight),
			levels,
		})
	)
})
