<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let person;
	function handleSeeMore() {
		dispatch('showModal', {
			person
		});
	}
</script>

<div class="card" data-description={person.description}>
	<img src={person.photo} alt={person.name} />
	<h2>{person.name}</h2>
	<button on:click={handleSeeMore}>Learn more →</button>
</div>

<style>
	.card {
		background: white;
		padding: 1rem;
		border-radius: 2px;
	}

	.card img {
		width: 100%;
	}

	.card h2 {
		color: black;
	}
</style>
