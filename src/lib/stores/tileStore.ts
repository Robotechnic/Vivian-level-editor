import { writable } from "svelte/store"

type Tile = {
	name: string,
	data: string
}
export const tiles = writable<Array<Tile>>(Array<Tile>())

const images = localStorage.getItem("images")
if (images) {
	tiles.set(JSON.parse(images))
}

tiles.subscribe(value => {
	localStorage.setItem("images", JSON.stringify(value))
})