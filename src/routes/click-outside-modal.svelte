<script>
	import Modal from '../components/click-outside-modal/Modal.svelte';
	import Card from '../components/click-outside-modal/Card.svelte';
	import Person from '../components/click-outside-modal/Person.svelte';

	const people = [
		{
			photo: 'https://picsum.photos/200?random=1',
			name: 'Juan F Andrade',
			description: 'This is me!'
		},
		{
			photo: 'https://picsum.photos/200?random=2',
			name: 'Stephanie Andrade',
			description: 'Shes a beautiful little girl!'
		},
		{
			photo: 'https://picsum.photos/200?random=3',
			name: 'Becan',
			description: 'Becan is a smart dog!'
		}
	];
	let showModal = false;
	let person = null;

	function handleShowModal(event) {
		person = event.detail.person;
		if (person) showModal = true;
	}
	function closeModal(e) {
		if ((e.type === 'keydown' && e.key === 'Escape') || e.type === 'closeModal') {
			showModal = false;
		}
	}
</script>

<div class="cards">
	{#each people as person}
		<Card {person} on:showModal={handleShowModal} />
	{/each}
</div>

<Modal bind:showModal on:closeModal={closeModal}>
	<Person {person} />
</Modal>
<svelte:window on:keydown={closeModal} />

<style>
	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-gap: 20px;
		padding: 2rem;
	}
</style>
