<script lang="ts">
	import { createEventDispatcher } from "svelte";
	export let value : string | Number = ""
	export let label : string = "Input"
	export let name : string = "input"
	export let type : string = "text"
	export let inputParams : Object = {}

	const dispatch = createEventDispatcher()

	const handleInput = (event : Event) => {
		value = (event.target as HTMLInputElement).value
		if (type === "number" || type === "range") {
			value = Number(value)
		}
		dispatch("input", value)
	}

</script>

<div>
	<label for="{name}">{label}</label>
	<input {type} {name} id="{name}" {...inputParams} on:input={handleInput} {value}>
</div>