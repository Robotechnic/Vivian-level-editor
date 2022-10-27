<script lang="ts">
	type ghostButton = {
		icon: string,
		title: string,
		action: (childId : number) => null,
	}
	export let buttons: Array<ghostButton>
	export let childId: number
</script>


<div class="overlay">
	<div class="buttons">
		{#each buttons as button}
			<button on:click|stopPropagation={button.action(childId)} title={button.title}>
				<img src={button.icon} alt={button.title + "button"} />
			</button>
		{/each}
	</div>
	<slot></slot>
</div>

<style lang="scss">
	.overlay {
		position: relative;
		padding: 0;
		margin: 0;

		.buttons {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: flex-start;
			padding: 2px;
			margin: 0;
			z-index: 1;
			opacity: 0;
			transition: opacity .5s ease-in-out;

			button {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 2em;
				height: 2em;
				margin: .5em;
				padding: 0;
				border: none;
				border-radius: 50%;
				background-color: #000000bf;
				transition: background-color .5s ease-in-out;

				&:hover {
					background-color: #000000cc;
				}

				img {
					width: 1em;
					height: 1em;
				}
			}
		}

		&:hover {
			.buttons {
				opacity: 1;
			}
		}
	}
</style>