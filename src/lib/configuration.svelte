<script lang="ts">
	import InputGroup from "./components/inputGroup.svelte"
	import TitleNav from "./components/titleNav.svelte"
	import { levelWidth, levelHeight, levelStore } from "./stores/levelStore"
	import { tiles } from "./stores/tileStore"

	let value: Number = 0
	let files: FileList = null

	const addTile = () => {
		let file = files[0]
		let reader = new FileReader()
		reader.onload = () => {
			tiles.update((tiles) => {
				return [
					...tiles, 
					{ 
						name: file.name, 
						data: reader.result as string
					}
				]
			})
		}
		reader.readAsDataURL(file)
	}

	
	const resizeLevel = () => {
		levelStore.resize(
			$levelWidth,
			$levelHeight
		)
	}

	const deleteProject = () => {
		const proced : boolean = confirm("Are you sure you want to delete this project?")
		if (proced) {
			levelStore.reset()
			tiles.set([])
			location.reload()
		}
	}
</script>

<TitleNav title="Configuration" shadow="right">
	<form>
		<div class="fileManager">
			<h3>Project Manager</h3>
			<button> Import level set </button>
			<button> Export level set </button>
			<button class="warn" on:click|preventDefault={deleteProject}> Delete current project</button>
		</div>
		
		<div class="gridSize">
			<h3>Grid Size</h3>
			<InputGroup
				label="Width:"
				name="width"
				type="number"
				inputParams={{ min: 0, max: 100, step: 1}}
				bind:value={$levelWidth}
			/>
			<InputGroup
				label="Height:"
				name="height"
				type="number"
				inputParams={{ min: 0, max: 100, step: 1}}
				bind:value={$levelHeight}
			/>
			<button on:click|preventDefault={resizeLevel}>
				Resize
			</button>
		</div>

		<div class="tileSelector">
			<h3>Tile selector : {value}</h3>
			<ul class="tileSelector__itemList">
				{#each $tiles as tile, id}
					<li class="tileSelector__itemList__tile">
						<input
							type="radio"
							name={"tile" + id}
							id={"tile" + id}
							accept="image/*"
							bind:group={value}
							value={id}
						/>
						<label 
							for={"tile" + id}
							class:current={value == id}
							>
							<img src={tile.data} alt={tile.name} />
						</label>
					</li>
				{/each}
				<li class="tileSelector__itemList__tile">
					<input 
						type="file" 
						id="newTileButton" 
						bind:files={files} 
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
			margin-bottom: .2em;
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

						&:not(.noBg) {
							--grid-color: #cdcdcd;
							background-image: linear-gradient(45deg, var(--grid-color) 25%, transparent 25%, transparent 75%, var(--grid-color) 75%), linear-gradient(45deg, var(--grid-color) 25%, transparent 25%, transparent 75%, var(--grid-color) 75%);
							background-size: 16px 16px;
							background-position: 0 0, 8px 8px;
						}

						img {
							max-width: 100%;
							max-height: 100%;
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
