<script>
	import handleResult from '$lib/colorGameHandlers';
	import { colorsByLength } from '$lib/colors';
	import { onMount } from 'svelte';
	import Color from '../components/colour-game/Color.svelte';
	let colors = colorsByLength;

	function start() {
		// see if their browser supports this
		if (!('SpeechRecognition' in window)) {
			console.log('Your browser does not support speech recognition');
		}

		// it does work
		console.log('starting...');
		const recognition = new SpeechRecognition();
		recognition.continuous = true;
		recognition.interimResults = true;
		recognition.onresult = handleResult;
		recognition.start();
	}

	onMount(function () {
		window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		start();
	});
</script>

<div class="colour-game">
	<h1>Say a Color</h1>
	<div class="colors">
		{#each colors as color}
			<Color {color} />
		{/each}
	</div>
</div>

<style>
	.colour-game {
		transition: background-color 0.4s;
		font-family: sans-serif;
		text-align: center;
	}

	h1 {
		font-size: 10rem;
		margin: 5rem 0 0 0;
		transition: all 0.4s;
		position: relative;
		color: rgba(0, 0, 0, 0.4);
	}

	.colors {
		display: flex;
		flex-wrap: wrap;
		margin: 5rem;
	}
</style>
