<script>
	import { createEventDispatcher, onDestroy } from 'svelte';
	const dispatch = createEventDispatcher();
	export let item = null;
	function handleClickOutside(e) {
		if (e.target === e.currentTarget) {
			dispatch('closeModal');
		}
	}
	function showNext() {
		dispatch('showNext');
	}
	function showPrev() {
		dispatch('showPrev');
	}
	function handleKeyUp(e) {
		if (e.key === 'Escape') return dispatch('closeModal');
		if (e.key === 'ArrowRight') return dispatch('showNext');
		if (e.key === 'ArrowLeft') return dispatch('showPrev');
	}
	onDestroy(function () {
		console.log('destroyed', { item });
	});
</script>

<svelte:window on:keyup={handleKeyUp} />
{#if item}
	<div class="modal" class:open={item} on:click={handleClickOutside}>
		<div class="modalInner">
			<button aria-label="Previous Photo" class="prev" on:click={showPrev}>←</button>
			<figure>
				<img src={`/images/gallery/${item.image}`} alt={item.title} />
				<figcaption>
					<h2>{item.title}</h2>
					<p>
						{item.description}
					</p>
				</figcaption>
			</figure>
			<button class="next" aria-label="Next Photo" on:click={showNext}>→</button>
		</div>
	</div>
{/if}

<style>
	.modal {
		position: fixed;
		background: rgba(0, 0, 0, 0.5);
		z-index: 2;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: grid;
		align-items: center;
		justify-items: center;
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.5s;
	}

	.modalInner {
		border-radius: 4px;
		background: white;
		box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
		transform: translateY(-100vh);
		transition: all 0.5s;
		max-width: 1000px;
		height: calc(100vh - 100px);
		display: grid;
		grid-template-columns: 50px 1fr 50px;
		color: black;
		margin: 3rem;
	}

	.modal figure {
		height: 100%;
		display: grid;
		margin: 0;
		grid-template-rows: 1fr auto;
	}

	.modal img {
		width: 100%;
		object-fit: contain;
	}

	.modal.open {
		opacity: 1;
		pointer-events: all;
	}

	.modal figcaption {
		padding: 10px;
	}

	.modal h2 {
		color: black;
	}

	.modal.open .modalInner {
		transform: translateY(0);
	}
</style>
