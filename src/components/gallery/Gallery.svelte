<script>
	import Modal from './Modal.svelte';

	export let items;
	let selectedItem = null;
	$: currentIndex = items.findIndex((item) => item.image === selectedItem?.image);

	function showItem(item) {
		selectedItem = item;
	}
	function hideItem(e) {
		selectedItem = null;
	}
	function showNext() {
		let nextItemIndex = currentIndex + 1 === items.length ? 0 : currentIndex + 1;
		selectedItem = items[nextItemIndex];
	}
	function showPrev() {
		let prevItemIndex = currentIndex - 1 === -1 ? items.length - 1 : currentIndex - 1;
		selectedItem = items[prevItemIndex];
	}

	function handleKeyUp(e, item) {
		if (e.key === 'Enter') {
			selectedItem = item;
		}
	}
</script>

<div class="gallery gallery1">
	{#each items as item}
		<img
			src={`/images/gallery/${item.image}`}
			alt={item.title}
			tabindex="0"
			title={item.title}
			data-description={item.description}
			on:click={showItem(item)}
			on:keyup={(e) => handleKeyUp(e, item)}
		/>
	{/each}
</div>
{#if selectedItem}
	<Modal
		bind:item={selectedItem}
		on:closeModal={hideItem}
		on:showNext={showNext}
		on:showPrev={showPrev}
	/>
{/if}

<style>
	.gallery {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		grid-gap: 20px;
		align-items: stretch;
		background: white;
		padding: 2rem;
	}

	.gallery img {
		width: 100%;
		object-fit: cover;
		border: 1px solid black;
	}
</style>
