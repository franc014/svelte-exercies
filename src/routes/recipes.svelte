<script context="module">
	import Search from '../components/recipes/Search.svelte';
	/* export async function load({ page, fetch, session, stuff }) {
		console.log({ page, fetch, session, stuff });
		console.log('here');
		return {
			props: {
				recipes: ['canguil']
			}
		};
	} */
</script>

<!-- <script>
	export let recipes = [];
</script> -->

<Search />
<div class="recipes" />

<style>
	.recipes {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-gap: 20px;
	}

	.recipe {
		border: 1px solid rgba(0, 0, 0, 0.1);
		padding: 20px;
	}
	.recipe img {
		max-width: 100%;
		object-fit: contain;
	}
</style>
