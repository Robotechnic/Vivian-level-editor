import sveltePreprocess from "svelte-preprocess"

export default {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),
	alias: {
		assets: "Vivian-level-editor/assets",
	},
	appDir: "Vivian-level-editor",
	paths: {
		assets: "Vivian-level-editor/assets",
		base: "Vivian-level-editor",
	},
	version: 1,
}
