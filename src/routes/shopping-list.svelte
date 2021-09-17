<script>
	import { afterUpdate, onMount } from 'svelte';

	import ListItem from '../components/shopping-list/ListItem.svelte';

	let items = [];

	function addItem(e) {
		const name = e.target.item.value;
		if (!name) return;
		const item = {
			name,
			id: Date.now(),
			complete: false
		};
		items = [...items, item];
	}

	function removeItem(e) {
		items = items.filter((item) => item.id !== e.detail.item.id);
	}
	function markAsComplete(e) {
		const itemToChange = items.find((item) => item.id === e.detail.item.id);
		const itemToChangeIndex = items.findIndex((item) => item.id === e.detail.item.id);
		itemToChange.complete = !itemToChange.complete;
		items[itemToChangeIndex] = itemToChange;
	}

	onMount(function () {
		if (localStorage.getItem('items')) {
			const lsItems = JSON.parse(localStorage.getItem('items'));
			if (lsItems.length) {
				items = [...lsItems];
			}
		}
	});

	afterUpdate(function () {
		localStorage.setItem('items', JSON.stringify(items));
	});
</script>

<div class="shopping-list">
	<form class="shopping" autocomplete="off" on:submit|preventDefault={addItem}>
		<input type="text" name="item" id="item" required />
		<button type="submit">+ Add Item</button>
	</form>

	<ul class="list">
		{#each items as item}
			<ListItem {item} on:itemRemoved={removeItem} on:itemCompleted={markAsComplete} />
		{/each}
	</ul>
</div>

<style>
	/* Shopping Form */
	.shopping {
		display: grid;
		grid-template-columns: 1fr auto;
	}

	.shopping-list {
		background: white;
		padding: 3rem;
		border-radius: 1rem;
		width: 500px;
		margin: 4rem 0;
	}

	.shopping-list ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
