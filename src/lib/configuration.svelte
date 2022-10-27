<script lang="ts">
	import InputGroup from "./components/inputGroup.svelte"
	import TitleNav from "./components/titleNav.svelte"
	import {
		levelWidth,
		levelHeight,
		levelStore,
		mirror,
	} from "./stores/levelStore"
	import { tiles, selectedTile } from "./stores/tileStore"
	import trash from "../assets/trash.svg"
	import { imageResize } from "./utils/imageSize"

	let files: FileList
	let hidden: number = -1

	const addTile = () => {
		let file = files[0]
		let reader = new FileReader()
		reader.onload = () => {
			const image = new Image()
			image.onload = () => {
				tiles.update(tiles => {
					return [
						...tiles,
						{
							name: file.name,
							data: imageResize(image, 32, 32),
						},
					]
				})
			}

			image.src = reader.result as string
			image.title = file.name
			image.alt = file.name + " tile"
		}
		reader.readAsDataURL(file)
	}

	const keyCheck = (event: KeyboardEvent) => {
		if (event.key === "Enter") {
			resizeLevel()
			event.preventDefault()
		}
	}

	const resizeLevel = () => {
		levelStore.resize($levelWidth, $levelHeight)
	}

	const deleteProject = () => {
		const proced: boolean = confirm(
			"Are you sure you want to delete this project?"
		)
		if (proced) {
			levelStore.reset()
			tiles.set([])
		}
	}

	const tileDragStart = (event: DragEvent) => {
		const target = event.target as HTMLLIElement
		const id: number = parseInt(target.getAttribute("data-id") as string)
		event.dataTransfer!.setDragImage($tiles[id].data, 16, 16)
		event.dataTransfer!.dropEffect = "copy"

		setTimeout(() => {
			hidden = id
		}, 0)
	}

	const tileDragOver = (event: DragEvent) => {
		if (hidden == -1) return
		let target = event.target as HTMLElement
		while (!target.classList.contains("tileSelector__itemList__tile"))
			target = target.parentElement as HTMLElement
		const id: number = parseInt(target!.getAttribute("data-id") as string)
		if (id == hidden) return
		tiles.update(tiles => {
			const temp = tiles[hidden]
			tiles[hidden] = tiles[id]
			tiles[id] = temp
			return tiles
		})
		hidden = id
	}

	const tileDragEnd = () => {
		hidden = -1
	}
</script>

<TitleNav title="Configuration" shadow="right">
	<form>
		<div class="fileManager">
			<h3>Project Manager</h3>
			<button> Import level set </button>
			<button> Export level set </button>
			<button class="warn" on:click|preventDefault={deleteProject}>
				Delete current project</button
			>
		</div>

		<div class="gridSize">
			<h3>Grid Size</h3>
			<InputGroup
				label="Width:"
				name="width"
				type="number"
				inputParams={{ min: 0, max: 100, step: 1 }}
				bind:value={$levelWidth}
				on:keypress={keyCheck}
			/>
			<InputGroup
				label="Height:"
				name="height"
				type="number"
				inputParams={{ min: 0, max: 100, step: 1 }}
				bind:value={$levelHeight}
				on:keypress={keyCheck}
			/>
			<button on:click|preventDefault={resizeLevel}> Resize </button>
		</div>

		<div class="mirror">
			<h3>Mirror</h3>
			<InputGroup
				label="Horizontal mirror:"
				name="mirror"
				type="checkbox"
				bind:value={$mirror}
				inputParams={{ checked: false }}
			/>
		</div>

		<div class="tileSelector">
			<h3>Tile selector : {$selectedTile}</h3>
			<ul class="tileSelector__itemList">
				<li class="tileSelector__itemList__tile">
					<input
						type="radio"
						name="tileEraser"
						id="tileEraser"
						bind:group={$selectedTile}
						value={-1}
					/>
					<label
						for="tileEraser"
						class:current={$selectedTile == -1}
						class="noBg"
					>
						<img src={trash} alt="Eraser" title="Eraser" />
					</label>
				</li>
				{#each $tiles as tile, id}
					<li
						class="tileSelector__itemList__tile"
						class:hidden={hidden == id}
						draggable="true"
						data-id={id}
						on:dragstart={tileDragStart}
						on:dragover|preventDefault={tileDragOver}
						on:dragend={tileDragEnd}
					>
						<input
							type="radio"
							name={"tile" + String(id)}
							id={"tile" + String(id)}
							bind:group={$selectedTile}
							value={id}
						/>
						<label
							for={"tile" + String(id)}
							class:current={$selectedTile == id}
						>
							<img
								src={tile.data.src}
								alt={tile.name}
								title={tile.name}
								draggable="false"
							/>
						</label>
					</li>
				{/each}
				<li class="tileSelector__itemList__tile">
					<input
						type="file"
						id="newTileButton"
						accept="*.png, *.jpg, *.jpeg"
						bind:files
						on:change|preventDefault={addTile}
					/>
					<label for="newTileButton" class="noBg">+</label>
				</li>
			</ul>
		</div>
	</form>
</TitleNav>

<style lang="scss">
	form {
		padding: 1em 1rem;
		display: flex;
		flex-direction: column;
		overflow-y: scroll;

		h3 {
			margin-bottom: 0.2em;
		}

		.fileManager {
			display: flex;
			flex-direction: column;
			button:not(:last-child) {
				margin-bottom: 1rem;
			}
		}

		.gridSize {
			display: flex;
			flex-direction: column;
			button {
				margin-top: 1rem;
			}
		}

		.tileSelector {
			&__itemList {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr));
				gap: 0.5em;
				padding: 0;
				margin: 0;

				&__tile {
					list-style: none;
					margin: 0;
					padding: 0;

					&.hidden {
						opacity: 0;
					}

					input {
						position: absolute;
						top: -100%;

						&:focus {
							+ label {
								// outline with firefox style
								outline: 2px solid #1a73e8;
							}
						}
					}

					label {
						min-width: 2em;
						min-height: 2em;
						border: solid var(--text-color) 1px;
						display: flex;
						align-items: center;
						justify-content: center;
						aspect-ratio: 1/1;
						width: 100%;
						cursor: pointer;
						box-sizing: border-box;
						padding: 0;

						&:not(.noBg) {
							--grid-color: #cdcdcd;
							background-image: linear-gradient(
									45deg,
									var(--grid-color) 25%,
									transparent 25%,
									transparent 75%,
									var(--grid-color) 75%
								),
								linear-gradient(
									45deg,
									var(--grid-color) 25%,
									transparent 25%,
									transparent 75%,
									var(--grid-color) 75%
								);
							background-size: 16px 16px;
							background-position: 0 0, 8px 8px;

							img {
								max-width: 100%;
								max-height: 100%;
								width: 100%;
								height: 100%;
							}
						}

						&.noBg img {
							max-width: 80%;
							max-height: 80%;
						}

						&.current {
							//border: solid var(--text-color) 2px;
							box-shadow: 0 0 4px 0.5px var(--text-color);
						}
					}
				}

				&::after {
					content: " ";
					width: auto;
				}
			}
		}
	}
</style>
