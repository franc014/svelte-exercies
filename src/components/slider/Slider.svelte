<script>
	import Slide from './Slide.svelte';

	export let slides;
	let currentIndex;
	let prevIndex;
	let nextIndex;

	currentIndex = slides.findIndex((item) => item.status === 'current');
	if (currentIndex === -1) {
		currentIndex = 0;
		prevIndex = slides.length - 1;
		nextIndex = 1;
	} else {
		prevIndex = currentIndex - 1;
		nextIndex = currentIndex + 1;
	}

	function changeSliderStatus(slider, prevIndex, currentIndex, nextIndex) {
		return slider.map((item, i) => {
			if (i === prevIndex) {
				item.status = 'prev';
			} else if (i === nextIndex) {
				item.status = 'next';
			} else if (i === currentIndex) {
				item.status = 'current';
			} else {
				item.status = null;
			}

			return item;
		});
	}

	function move(direction) {
		const lastIndex = slides.length - 1;

		if (direction === 'back') {
			[prevIndex, currentIndex, nextIndex] = [
				prevIndex - 1 < 0 ? lastIndex : prevIndex - 1,
				prevIndex,
				currentIndex
			];
		} else {
			[prevIndex, currentIndex, nextIndex] = [
				currentIndex,
				nextIndex,
				nextIndex + 1 > lastIndex ? 0 : nextIndex + 1
			];
		}
	}

	$: slides = changeSliderStatus(slides, prevIndex, currentIndex, nextIndex);
</script>

<div class="slider">
	<div class="slides">
		{#each slides as slide}
			<Slide status={slide.status}>{slide.content}</Slide>
		{/each}
	</div>
	<div class="controls">
		<button class="goToPrev" on:click={() => move('back')}>← Prev</button>
		<button class="goToNext" on:click={move}>Next →</button>
	</div>
</div>

<style lang="sass">
	.slides {
		width: 800px;
		height: 500px;
		border: 2px solid black;
		position: relative;
		margin: 0 auto;
		overflow: hidden;
	}

	.controls {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
		gap: 2rem;
		justify-content: center;
		padding: 2rem;
	}
</style>
