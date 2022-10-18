<script lang="ts">
	import { levelStore, level } from "./stores/levelStore"
    import TitleNav from "./components/titleNav.svelte"
    import Grid from "./components/grid.svelte"
	
	const addLevel = (event) => {
		levelStore.addLevel();
	}
</script>

<TitleNav title="Level Selector" shadow="left">
	<button on:click={addLevel}>
		Add a new level
	</button>
	<div class="levelList">
		{#if $levelStore.length != 0}
			<ul class="levelList__list">
				{#each $levelStore as levelGrid, i}
					<li>
						<input type="radio" name="level" id="level-{i}" value={i} bind:group={$level}/>
						<label class="levelList__list__grid" for="level-{i}">
							<Grid gridId={i} />
						</label>
					</li>
				{/each}
			</ul>
		{:else}
			<p>There is currently no levels.</p>
		{/if}
	</div>
</TitleNav>

<style lang="scss">
	button {
		justify-self: center;
		margin: 1rem 1rem;
		width: calc(100% - 2rem);
		box-sizing: border-box;
	}

	.levelList {
		padding: 0 1rem;
		overflow-y: scroll;
		max-width: 100%;
		box-sizing: border-box;

		&__list {
			margin:0;
			padding:0;
			display: flex;
			flex-direction: column;
			flex:1;
			gap: 1rem;

			li {
				list-style: none;
				margin: 0;
				padding:0;
				cursor: pointer;
				overflow: hidden;


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
					cursor: pointer;
				}
			}
		}
	}
</style>