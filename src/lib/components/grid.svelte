<script lang="ts">
	import { tiles } from "../stores/tileStore"
	import { levelStore } from "../stores/levelStore"
	import empty from "../../assets/empty.svg"
    import { createEventDispatcher } from "svelte"

	export let gridId: number
	export let interactive : boolean = false

	const dispatch = createEventDispatcher()
	const click = (x : number, y : number) => {
		console.log(x,y)
		dispatch("click", { x, y })
	}

</script>

<div class="grid" id={String(gridId)}>
	{#each $levelStore[gridId] as row, i}
		<div class="grid__row">
			{#each row as cell, j}
				{#if interactive}
					<img
						class="grid__row__cell"
						src={cell == -1 ? empty : $tiles[cell].data}
						alt={cell == -1 ? "Empty cell" : $tiles[cell].name}
						on:click={() => {click(i, j)}}
						on:keydown
					/>
				{:else}
					<img
						class="grid__row__cell non-interactive"
						src={cell == -1 ? empty : $tiles[cell].data}
						alt={cell == -1 ? "Empty cell" : $tiles[cell].name}
						on:drag={e => false}
					/>
				{/if}
			{/each}
		</div>
	{/each}
</div>

<style lang="scss">
	.grid {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--text-color);

		&__row {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			z-index: 0;

			&__cell {
				border: 1px solid var(--text-color);
				box-sizing: border-box;
				width: 1em;
				height: 1em;

				&.non-interactive {
					cursor: default;
				}
			}
		}
	}
</style>
