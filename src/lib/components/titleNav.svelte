<script lang="ts">
	export let title: string = "Undefined"
	export let shadow: "left" | "right" = "left"
</script>

<nav
	class:leftShadow={shadow == "left"}
	class:rightShadow={shadow == "right"}
	class={$$props.class}
>
	<h2>{title}</h2>
	<hr />
	<slot />
</nav>

<style lang="scss">
	nav {
		h2 {
			margin: 0;
			text-align: center;
			padding: 0 1rem;
			min-width: max-content;
			width: calc(100% - 2rem);
		}
		hr {
			width: 100%;
			margin-top: 0;
		}

		&.leftShadow {
			box-shadow: -10px 0px 10px -10px var(--text-color);
		}
		&.rightShadow {
			box-shadow: 10px 0px 10px -10px var(--text-color);
		}

		height: 100%;
		width: min-content;
		max-width: 20%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		z-index: 10;
	}
</style>
