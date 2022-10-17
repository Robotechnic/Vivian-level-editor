<script lang="ts">
	import InputGroup from "./inputGroup.svelte";

	let tiles : Array<Number> = [
		1, 2, 3, 4, 5, 6, 7
	]
	let value : Number = 0

	const addTile = () => {
		tiles = [...tiles, tiles.length + 1]
	}
</script>

<nav>
	<h2>Configuration</h2>
	<hr/>
	<form>
		<div class="fileManager">
			<label>
				Project Manager
			</label>
			<button>
				Import level set
			</button>
			<button>
				Export level set
			</button>
		</div>

		<InputGroup label="Grid width:" name="width" type="number" inputParams={{min:0, max:100, step:1, value:10}}/>
		<InputGroup label="Grid height:" name="height" type="number" inputParams={{min:0, max:100, step:1, value:10}}/>
		
		<div class="tileSelector">
			<label>Tile selector :</label>
			<ul class="tileSelector__itemList">
				{#each tiles as tile, id}
					<li class="tileSelector__itemList__tile">
						<input type="radio" name={"tile" + id} id={"tile" + id} value={tile} bind:group={value}>
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
</nav>


<style lang="scss">
	nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: min-content;
		max-height: var(--app-height);

		// left box shadow to differenciante from the grid
		box-shadow: 10px 0px 10px -10px rgba(0,0,0,0.75);
		z-index: 1;
		
		h2 {
			margin: 0;
			padding: 0 1rem;
			text-align: center;
		}

		hr {
			width: 100%;
			margin:0;
		}

		form {
			padding: 1em 1rem;
			display: flex;
			flex-direction: column;
			gap: 1rem;

			.fileManager {
				display: flex;
				flex-direction: column;
				button:nth-child(2) {
					margin-bottom: 1rem;
				}
			}

			.tileSelector {
				&__itemList {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr));
					gap: .5em;
					padding:0;
					margin:0;

					&__tile {
						list-style: none;
						margin:0;
						padding:0;

						input, button {
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
							width: 20%;
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
	}
</style>