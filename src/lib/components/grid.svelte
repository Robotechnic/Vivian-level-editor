<script lang="ts">
	import { tiles } from "../stores/tileStore"
	import { levelStore, level } from "../stores/levelStore"
	import { onMount, createEventDispatcher, onDestroy } from "svelte"

	export let gridId: number
	let canvas: HTMLCanvasElement
	let ctx: CanvasRenderingContext2D | null = null
	let width: number
	let height: number

	$: {
		if (gridId > -1 && gridId < $levelStore.length) {
			width = $levelStore[gridId][0].length
			height = $levelStore[gridId].length
			// draw level only if the correct grid is selected
			if (gridId === $level || levelStore.needUpdate(gridId)) drawGrid()
		}
	}

	export const drawTiles = () => {
		if (ctx == null) return
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		let middle: number = Math.floor($levelStore[gridId].length / 2)
		$levelStore[gridId].forEach((line: Array<number>, y: number) => {
			line.forEach((tile: number, x: number) => {
				if (y == middle) {
					ctx!.fillStyle = "black"
					ctx!.fillRect(x * 32, y * 32, 32, 32)
				} else if (tile === -1) {
					ctx!.fillStyle = "white"
					ctx!.fillRect(x * 32, y * 32, 32, 32)
				} else {
					ctx!.drawImage($tiles[tile].data, x * 32, y * 32, 32, 32)
				}
			})
		})
	}

	const drawGrid = () => {
		if (ctx == null) return
		drawTiles()
		ctx.beginPath()
		ctx.strokeStyle = "black"
		ctx.fillStyle = "black"
		ctx.lineWidth = 1
		for (let x = 0; x < width; x++) {
			ctx.moveTo(x * 32, 0)
			ctx.lineTo(x * 32, height * 32)
		}
		for (let y = 0; y < height; y++) {
			ctx.moveTo(0, y * 32)
			ctx.lineTo(width * 32, y * 32)
		}
		ctx.stroke()
	}

	const toGridCoordinates = (x: number, y: number) => {
		return {
			x: Math.floor((x / canvas.width) * width),
			y: Math.floor((y / canvas.height) * height),
		}
	}

	const dispatch = createEventDispatcher()

	const canvasClick = (event: MouseEvent) => {
		if (event.buttons == 2 && !event.shiftKey) {
			dispatch("erase", toGridCoordinates(event.offsetX, event.offsetY))
			return false
		} else if (event.buttons == 1) {
			dispatch("click", toGridCoordinates(event.offsetX, event.offsetY))
			return true
		}
	}

	const canvasContext = (event: MouseEvent) => {
		// disable only if shift isn't pressed
		if (!event.shiftKey) {
			event.preventDefault()
			canvasClick(event)
			return
		}
	}

	const canvasDrag = (event: MouseEvent) => {
		if (event.buttons == 2)
			dispatch("erase", toGridCoordinates(event.offsetX, event.offsetY))
		else if (event.buttons == 1)
			dispatch("click", toGridCoordinates(event.offsetX, event.offsetY))
	}

	onMount(() => {
		ctx = canvas.getContext("2d")
		if (ctx == null) {
			alert("Could not get canvas context")
			return
		}
		ctx.imageSmoothingEnabled = true
		console.log("Context loaded")
		if (gridId > -1) {
			drawGrid()
		}
	})

	onDestroy(() => {
		ctx = null
	})
</script>

<div class="grid">
	<canvas
		width={width * 32}
		height={height * 32}
		bind:this={canvas}
		on:mousedown|preventDefault={canvasClick}
		on:mousemove={canvasDrag}
		on:contextmenu={canvasContext}
	/>
</div>
<svelte:window on:resize={drawGrid} />

<style lang="scss">
	.grid {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--text-color);
	}
</style>
