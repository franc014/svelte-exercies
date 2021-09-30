<script>
	import { recipes } from '$lib/stores/recipes';
	let query = '';
	let btnDisabled = false;

	async function handleSubmit(e) {
		btnDisabled = true;
		const res = await fetch(`/api/${query}.recipes`);
		const results = await res.json();
		//recipes.set(results.recipes.hits);//is it faster than update
		recipes.update(() => results.recipes.hits);
		btnDisabled = false;
	}
</script>

<form class="search" autocomplete="off" on:submit|preventDefault={handleSubmit}>
	<input type="text" name="query" bind:value={query} />
	<button name="submit" type="submit" disabled={btnDisabled}>Submit</button>
</form>

<style>
	.search {
		display: grid;
		grid-template-columns: 1fr;
	}
	button[disabled] {
		opacity: 0.2;
	}
</style>
