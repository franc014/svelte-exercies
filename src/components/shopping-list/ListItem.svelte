<script>
	import { createEventDispatcher } from 'svelte';
	export let item;
	const dispatch = createEventDispatcher();
	function removeItem(item) {
		dispatch('itemRemoved', {
			item
		});
	}
	function markAsComplete(item) {
		dispatch('itemCompleted', {
			item
		});
	}
</script>

<li class="shopping-item">
	<input type="checkbox" bind:checked={item.complete} on:click={markAsComplete(item)} />
	<span class="itemName">{item.name}</span>
	<button aria-label={`Remove ${item.name}`} on:click={removeItem(item)}>&times;</button>
</li>

<style>
	.shopping-item {
		padding: 1rem 0;
		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-gap: 1rem;
		align-items: center;
		border-bottom: 1px solid var(--gray);
	}

	.shopping-item input[type='checkbox'] {
		margin-right: 1rem;
	}

	.shopping-item input[type='checkbox']:checked + .itemName {
		opacity: 0.5;
	}

	.shopping-item button {
		padding: 0;
		font-size: 1rem;
		cursor: pointer;
		transition: transform 0.2s;
	}

	.shopping-item button:hover {
		transform: scale(1.4);
	}
</style>
