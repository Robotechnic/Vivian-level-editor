<script lang="ts">
	import {levelStore, level } from "./stores/levelStore"

	const addNewLevel = () => {
		levelStore.addLevel();
		level.set($levelStore.length - 1);
	}
</script>

<section id="editor">
	{#if $level != -1 && $levelStore.length > 0}
		<div class="grid">
			{#each $levelStore[$level] as row, rowId}
				<div class="row">
					{#each row as tile, tileId}
						<div class="tile" style="background-color: hsl({(rowId + tileId) * 15}, 100%, 50%)">
							{tile}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	{:else if $levelStore.length == 0}
		<div class="center">
			<p>There is currently no levels.</p>
			<button on:click={addNewLevel}>
				Add a new level
			</button>
		</div>
	{:else}
		<p class="center">There is currently no level selected.</p>
	{/if}
</section>

<style lang="scss">
	#editor {
		display: block;
		width: 100%;
		overflow: scroll;
		max-height: var(--app-height);

		.center {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100%;
		}
	}

	.grid {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		.row {
			display: flex;
			flex-direction: row;
		}

		.tile {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 50px;
			width: 50px;
			border: 1px solid black;
		}
	}
</style>