<script lang="ts">
	import Configuration from "./lib/configuration.svelte"
    import Editor from "./lib/editor.svelte"
	import LevelSelection from "./lib/levelSelection.svelte"
</script>

<main>
	<Configuration />
	<Editor />
	<LevelSelection />
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: row;
		width: 100vw;
		height: 100%;
	}
</style>