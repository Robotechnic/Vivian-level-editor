import { get, writable } from "svelte/store"

export type LevelMatrix = Array<Array<number>>

// setup stores
export const level = writable(-1)
export const mirror = writable(false)

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
export const levelHeight = createRangeStore(10, 1, 20)

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
					Array.from({ length: get(levelHeight) * 2 + 1 }, _ =>
						Array<number>(get(levelWidth)).fill(-1)
					),
				]
			})
		},
		/**
		 * add a new given level to the store
		 * @param level the level to add in the store
		 */
		pushLevel(level: LevelMatrix, index?: number) {
			if (index === undefined) {
				update((levels: Array<LevelMatrix>) => {
					return [...levels, level]
				})
			} else {
				update((levels: Array<LevelMatrix>) => {
					levels = [
						...levels.slice(0, index),
						level,
						...levels.slice(index),
					]
					return levels
				})
			}
		},
		/**
		 * remove the level at the given index
		 * @param index level index to remove
		 */
		removeLevel(index: number) {
			update((levels: Array<LevelMatrix>) => {
				levels = levels.filter((_, i) => i !== index)
				return levels
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
			if (y == get(levelHeight)) return
			update((levels: Array<LevelMatrix>) => {
				levels[index][y][x] = value
				return levels
			})
		},
		/**
		 * set width and height of each levels it add or remove same amout of lines at start and end of each level
		 * @param width new level width
		 * @param height new level height
		 */
		resize(width: number, height: number) {
			height = height * 2 + 1
			update((levels: Array<LevelMatrix>) => {
				return levels.map(level => {
					// add or remove lines at start and end
					const diff: number = level.length - height
					if (diff > 0) {
						level = level.slice(diff / 2, level.length - diff / 2)
					} else if (diff < 0) {
						for (let i = 0; i < -diff / 2; i++)
							level.unshift(Array<number>(width).fill(-1))
						for (let i = 0; i < -diff / 2; i++)
							level.push(Array<number>(width).fill(-1))
					}
					// add or remove columns
					level = level.map(line => {
						if (line.length > width) {
							line = line.slice(0, width)
						} else if (line.length < width) {
							line = [
								...line,
								...Array<number>(width - line.length).fill(-1),
							]
						}
						return line
					})
					return level
				})
			})
		},
		/**
		 * delete all levels in the project
		 */
		reset() {
			update((_: Array<LevelMatrix>) => new Array<LevelMatrix>())
		},
		/**
		 * switch two tiles with each other
		 * @param id1 first  tile index
		 * @param id2 second tile index
		 */
		switchTiles(id1: number, id2: number) {
			update((levels: Array<LevelMatrix>) => {
				return levels.map(level => {
					return level.map(line => {
						return line.map(tile => {
							if (tile == id1) return id2
							else if (tile == id2) return id1
							else return tile
						})
					})
				})
			})
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
