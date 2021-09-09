<script>
	import { afterUpdate } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let showModal = false;

	afterUpdate(() => {
		if (!showModal) showModal = false;
	});

	function closeModal(e) {
		const isOutside = !e.target.closest('.modal-inner');
		/* console.log(isOutside);
		showModal = false; */
		if (isOutside) {
			dispatch('closeModal');
		}
	}
</script>

<div class="modal-outer" class:hide-modal={!showModal} on:click={closeModal}>
	<div class="modal-inner">
		<slot />
	</div>
</div>

<style>
	.modal-outer {
		display: grid;
		background: hsla(50, 100%, 50%, 0.7);
		position: fixed;
		height: 100vh;
		width: 100vw;
		top: 0;
		left: 0;
		justify-content: center;
		align-items: center;
		/* Hide this modal until we need it */
	}

	.hide-modal {
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.2s;
	}

	.modal-outer.open {
		opacity: 1;
		pointer-events: all;
	}

	.modal-inner {
		max-width: 600px;
		min-width: 400px;
		padding: 2rem;
		border-radius: 5px;
		min-height: 200px;
		background: white;
		/* transform: translateY(-200%);
		transition: transform 2s; */
	}

	/* .modal-outer.open .modal-inner {
		transform: translateY(0);
	} */
</style>
