<script>
	let query = '';

	async function handleSubmit() {
		console.log(query);
		const res = await fetch(`/api/${query}.recipes`);
		const results = await res.json();
		console.log(results);
	}

	$: console.log(query);
</script>

<form class="search" autocomplete="off" on:submit|preventDefault={handleSubmit}>
	<input type="text" name="query" bind:value={query} />
	<button name="submit" type="submit">Submit</button>
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
