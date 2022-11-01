import { writable } from "svelte/store"

export type Tile = {
	name: string
	data: HTMLImageElement
}

export type localStoragetile = {
	name: string
	data: string
}

export const tiles = writable<Array<Tile>>(Array<Tile>())

if (localStorage) {
	const images = localStorage.getItem("images")
	if (images) {
		const imagesArray = JSON.parse(images) as Array<localStoragetile>
		tiles.update((tiles: Array<Tile>) => {
			return [
				...tiles,
				...imagesArray.map((tile: localStoragetile) => {
					const image = new Image()
					image.src = tile.data
					return {
						name: tile.name,
						data: image,
					} as Tile
				}),
			]
		})
	}

	tiles.subscribe(value => {
		localStorage.setItem(
			"images",
			JSON.stringify(
				value.map((tile: Tile) => {
					return {
						name: tile.name,
						data: tile.data.src,
					} as localStoragetile
				})
			)
		)
	})
} else {
	console.warn("localstorage not available")
}

export const selectedTile = writable<number>(-1)
