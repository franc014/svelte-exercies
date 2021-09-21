<script>
	import Gallery from '../components/gallery/Gallery.svelte';
	import { gallery1, gallery2 } from '$lib/stores/galleryItems';
</script>

<div class="galleries">
	<Gallery items={$gallery1} />
	<Gallery items={$gallery2} />
</div>

<style>
	.galleries {
		padding: 2rem;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 2rem;
	}
</style>
