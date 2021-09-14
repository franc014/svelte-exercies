<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let isSelected = false;
	export let id = 'js';
	export let name;

	function activateTab(e) {
		dispatch('activateTab', {
			tabId: e.currentTarget.id
		});
	}
</script>

<button role="tab" aria-selected={isSelected} {id} on:click={activateTab}> {name} </button>

<style>
	button {
		background: var(--grey);
		border: 0;
		color: black;
		border-radius: 5px 5px 0 0;
		--bs-color: rgba(0, 0, 0, 0.1);
		box-shadow: inset 0 -2px 5px var(--bs-color);
		cursor: pointer;
	}

	button[aria-selected='true'] {
		background: var(--yellow);
		box-shadow: none;
		color: rgba(0, 0, 0, 0.7);
	}

	button:focus {
		outline: 0;
		--bs-color: rgba(0, 0, 0, 0.6);
	}
</style>
