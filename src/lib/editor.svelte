<script lang="ts">
	import Grid from "./components/grid.svelte";
import {levelStore, level } from "./stores/levelStore"
    import { tiles } from "./stores/tileStore"

	const addNewLevel = () => {
		levelStore.addLevel();
		level.set($levelStore.length - 1);
	}
</script>

<section class="editor">
	{#if $level != -1 && $levelStore.length > 0}
		<div class="editor__gridContener">
			<Grid gridId={$level} />
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
	.editor {
		max-height: var(--app-height);
		overflow: scroll;
		flex:1;

		&__gridContener, .center {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100%;
			width: 100%;
			font-size: 3em;
			margin:0;
			padding:0;
		}
	}
</style>