<script context="module">
	import Search from '../components/recipes/Search.svelte';
	import RecipeList from '../components/recipes/RecipeList.svelte';
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
<RecipeList />
