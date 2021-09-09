<script>
	export let person;
	$: person = person;
</script>

{#if person}
	<img src={person.photo.replace('200', 200)} alt={person.name} width="600" height="600" />
	<p>{person.description}</p>
{/if}

<style>
	img {
		width: 100%;
	}
</style>
