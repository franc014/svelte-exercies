<script>
	import { recipes } from '$lib/stores/recipes';
	import Recipe from '../recipes/Recipe.svelte';
</script>

<div class="recipes">
	{#each $recipes as recipe}
		<Recipe {recipe} />
	{/each}
</div>

<style>
	.recipes {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-gap: 20px;
	}
</style>
