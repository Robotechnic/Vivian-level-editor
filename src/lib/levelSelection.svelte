<script lang="ts">
	import { levelStore } from "./stores/levelStore"
    import TitleNav from "./components/titleNav.svelte"
	
	const addLevel = (event) => {
		levelStore.addLevel();
	}
</script>

<TitleNav title="Level Selector" shadow="left">
	<div class="levelList">
		<button on:click={addLevel}>
			Add a new level
		</button>
		{#if $levelStore.length != 0}
			<ul class="levelList__list">
				{#each $levelStore as level, i}
					<li>
						<div class="levelList__list__grid">
							{#each level as row, j}
								{#each row as cell, k}
									<div class="cell" style="background-color: hsl({(j+k) * 10} 100% 50%);">&nbsp;</div>
								{/each}
							{/each}
						</div>
					</li>
				{/each}
			</ul>
		{:else}
			<p>There is currently no levels.</p>
		{/if}
	</div>
</TitleNav>

<style lang="scss">
	.levelList {
		padding: 0 1rem;
		overflow-y: scroll;
		flex:1;
		min-width: max-content;

		button {
			justify-self: center;
			margin: 1rem 0;
			width: 100%;
		}

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
			}

			&__grid {
				display: grid;
				grid-template-columns: repeat(10, 1fr);
				grid-template-rows: repeat(10, 1fr);

				.cell {
					border: 1px solid black;
					width: 1em;
					height: 1em;
					
				}
			}
		}
	}
</style>