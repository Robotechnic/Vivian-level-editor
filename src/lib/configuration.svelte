<script lang="ts">
	import InputGroup from "./components/inputGroup.svelte"
	import TitleNav from "./components/titleNav.svelte"
	import { levelWidth, levelHeight, levelStore } from "./stores/levelStore"

	let tiles: Array<Number> = [1, 2, 3, 4, 5, 6, 7]
	let value: Number = 0

	const addTile = (event) => {
		tiles = [...tiles, tiles.length + 1]
	}

	
	const resizeLevel = (event) => {
		levelStore.resize(
			$levelWidth,
			$levelHeight
		)
	}
</script>

<TitleNav title="Configuration" shadow="right">
	<form>
		<div class="fileManager">
			<h3>Project Manager</h3>
			<button> Import level set </button>
			<button> Export level set </button>
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
			<h3>Tile selector :</h3>
			<ul class="tileSelector__itemList">
				{#each tiles as tile, id}
					<li class="tileSelector__itemList__tile">
						<input
							type="radio"
							name={"tile" + id}
							id={"tile" + id}
							value={tile}
							bind:group={value}
						/>
						<label for={"tile" + id}>{tile}</label>
					</li>
				{/each}
				<li class="tileSelector__itemList__tile">
					<button id="newTileButton" on:click|preventDefault={addTile}>+</button>
					<label for="newTileButton">+</label>
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
		gap: 1rem;
		overflow-y: scroll;

		.fileManager {
			display: flex;
			flex-direction: column;
			button:nth-child(2) {
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

					input,
					button {
						display: none;
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
