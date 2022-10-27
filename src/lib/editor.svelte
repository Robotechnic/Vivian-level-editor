<script lang="ts">
	import Grid from "./components/grid.svelte"
	import { levelStore, level, mirror } from "./stores/levelStore"
	import { selectedTile } from "./stores/tileStore"

	const addNewLevel = () => {
		levelStore.addLevel()
		level.set($levelStore.length - 1)
	}

	type Vector = {
		x: number
		y: number
	}

	const setTile = (e: CustomEvent<Vector>, empty: boolean = false) => {
		levelStore.setLevelCell(
			$level,
			e.detail.x,
			e.detail.y,
			empty ? -1 : $selectedTile
		)
		if (!$mirror) return

		levelStore.setLevelCell(
			$level,
			e.detail.x,
			$levelStore[$level].length - e.detail.y - 1,
			empty ? -1 : $selectedTile
		)
	}
</script>

<section class="editor">
	{#if $level != -1 && $levelStore.length > 0}
		<Grid
			gridId={$level}
			on:click={setTile}
			on:erase={event => {
				setTile(event, true)
			}}
		/>
	{:else if $levelStore.length == 0}
		<div class="center">
			<p>There is currently no levels.</p>
			<button on:click={addNewLevel}> Add a new level </button>
		</div>
	{:else}
		<p class="center">There is currently no level selected.</p>
	{/if}
</section>

<style lang="scss">
	.editor {
		max-height: var(--app-height);
		overflow: scroll;
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		padding: 20px;

		.center {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100%;
			width: 100%;
			font-size: 3em;
			margin: 0;
			padding: 0;
		}
	}
</style>
