<script lang="ts">
	import Configuration from "./lib/configuration.svelte"
	import Editor from "./lib/editor.svelte"
	import LevelSelection from "./lib/levelSelection.svelte"
</script>

<header>
	<h1>Vivian level Editor</h1>
</header>
<main>
	<Configuration />
	<Editor />
	<LevelSelection />
</main>

<style lang="scss">
	main {
		width: 100%;
		height: 100%;
		display: flex;
		overflow: hidden;
	}
</style>
