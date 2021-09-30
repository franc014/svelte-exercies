<script>
	import { fade, fly } from 'svelte/transition';
	import buttonTexts from '$lib/buttonTexts';
	let theJoke = 'Dad Jokes';
	let jokeText = 'Get A Joke';
	let showLoader = false;

	function randomItemFromArray(arr, not) {
		const item = arr[Math.floor(Math.random() * arr.length)];
		if (item === not) {
			console.log('Ahh we used that one last time, look again');
			return randomItemFromArray(arr, not);
		}
		return item;
	}
	async function fetchJoke() {
		showLoader = true;
		const response = await fetch('https://icanhazdadjoke.com', {
			headers: {
				Accept: 'application/json'
			}
		});
		const data = await response.json();
		showLoader = false;
		return data;
	}

	async function handleClick() {
		const { joke } = await fetchJoke();
		theJoke = joke;
		jokeText = randomItemFromArray(buttonTexts, jokeText);
	}
</script>

<div class="joke">
	<p>{theJoke}</p>
</div>
<button class="getJoke" on:click={handleClick}>
	<span class="jokeText">{jokeText}</span>
	<div class="lds-ripple loader" class:hidden={!showLoader}>
		<div />
		<div />
	</div>
</button>

<style>
	* {
		--size: 20px;
	}
	.joke {
		font-size: 5rem;
		font-weight: 900;
	}

	.lds-ripple {
		display: inline-block;
		position: relative;

		width: var(--size);
		height: var(--size);
	}

	.lds-ripple div {
		position: absolute;
		border: 4px solid white;
		opacity: 1;
		border-radius: 50%;
		animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
	}

	.lds-ripple div:nth-child(2) {
		animation-delay: -0.5s;
	}

	@keyframes lds-ripple {
		0% {
			top: calc(var(--size) / 2);
			left: calc(var(--size) / 2);
			width: 0;
			height: 0;
			opacity: 1;
		}

		100% {
			top: 0px;
			left: 0px;
			width: calc(var(--size) * 0.9);
			height: calc(var(--size) * 0.9);
			opacity: 0;
		}
	}

	.hidden {
		display: none;
	}
</style>
