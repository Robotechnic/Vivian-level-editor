module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		tsConfigRootDir: __dirname,
		project: ["./tsconfig.json"],
		extraFileExtensions: [".svelte"]
	},
	env: {
		browser: true,
		es6: true,
	},
	plugins: [
		"@typescript-eslint",
		"svelte3"
	],
	overrides: [
		{
			files: ["*.svelte"],
			processor: "svelte3/svelte3"
		}
	],
	settings: {
		"svelte3/typescript": require("typescript"),
		"svelte3/named-blocks": true,
	},
	ignorePatterns: [
		"node_modules",
		"dist"
	],
	rules: {
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				"argsIgnorePattern": "^_",
				"varsIgnorePattern": "^_",
				"caughtErrorsIgnorePattern": "^_"
			}
		],
	}
}