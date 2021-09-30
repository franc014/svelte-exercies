<script>
	export let recipe;
</script>

<div class="recipe">
	<h2>{recipe.recipe.label}</h2>
	{#each recipe.recipe.ingredients as ingredient}
		<p>{ingredient.text}</p>
	{/each}
	{#if recipe.recipe.image}
		<img src={recipe.recipe.image} alt={recipe.recipe.label} />
	{/if}
	<a href={recipe.recipe.url}>View Recipe →</a>
</div>

<style>
	.recipe {
		border: 1px solid rgba(0, 0, 0, 0.1);
		padding: 20px;
	}
	.recipe img {
		max-width: 100%;
		object-fit: contain;
	}
</style>
