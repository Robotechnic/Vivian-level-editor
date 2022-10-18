<script lang="ts">
	export let title : string = "Undefined";
	export let shadow : "left" | "right" = "left";
</script>

<nav 
	class:leftShadow={shadow=="left"}
	class:rightShadow={shadow=="right"}
>
	<h2>{title}</h2>
	<hr/>
	<slot/>
</nav>

<style lang="scss">
	nav {
		h2 {
			margin: 0;
			text-align: center;
			padding: 0 1rem;
			min-width: max-content;
		}
		hr {
			width:100%;
			margin-top:0;
		}
		
		&.leftShadow {
			box-shadow: -10px 0px 10px -10px var(--text-color);
		}
		&.rightShadow {
			box-shadow: 10px 0px 10px -10px var(--text-color);
		}
		
		z-index: 1;
		max-height: var(--app-height);
		width: min-content;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
</style>