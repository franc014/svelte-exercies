<script>
	export let status;
</script>

<div
	class="slide"
	class:current={status === 'current'}
	class:prev={status === 'prev'}
	class:next={status === 'next'}
>
	<slot />
</div>

<style>
	.slide {
		position: absolute;
		background: var(--pink);
		height: 100%;
		width: 100%;
		display: grid;
		align-content: center;
		justify-content: center;
		color: white;
		font-size: 100px;
		font-family: sans-serif;
		border: 5px solid white;
		transition: all 0.25s;
		transform: translateX(-200%);
	}

	.slide.next + .slide {
		transform: translateX(200%);
	}

	.slide.prev {
		z-index: 10;
		transform: translateX(-100%);
	}
	.slide.current {
		z-index: 10;
		transform: translateX(0);
	}
	.slide.next {
		z-index: 10;
		transform: translateX(100%);
	}
</style>
