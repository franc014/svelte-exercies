<script>
	import currencies from '$lib/currencies';
	import { onMount } from 'svelte';
	const apiKey = '5a66574a96a42910f64e';
	const endpoint = `https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&compact=y`;

	let fcurrencies = Object.entries(currencies);
	let from = 'USD';
	let to = 'USD';
	let amount = 0;
	let convertedAmount;

	onMount(function () {
		convert();
	});

	async function fetchRates(from = 'USD', to = 'EUR') {
		const res = await fetch(`${endpoint}&q=${from}_${to}`);
		const rates = await res.json();
		return rates;
	}

	async function convert() {
		const result = await fetchRates(from, to);
		const rate = result[`${from}_${to}`];
		convertedAmount = rate.val * amount;
	}
</script>

<div class="app">
	<form>
		<input type="number" name="from_amount" bind:value={amount} on:input={convert} />
		<select name="from_currency" bind:value={from} on:change={convert}>
			{#each fcurrencies as [code, description]}
				<option value={code}>{description}</option>
			{/each}
		</select>
		<p>in</p>
		<select name="to_currency" bind:value={to} on:change={convert}>
			{#each fcurrencies as [code, description]}
				<option value={code}>{description}</option>
			{/each}
		</select>
		<p>is</p>
		<p class="to_amount">{convertedAmount}</p>
	</form>
</div>

<style>
	.app {
		max-width: 800px;
		background: white;
	}

	.app form {
		border: 0;
		display: grid;
		grid-template-columns: auto 1fr;
		grid-auto-rows: 1fr;
		font-size: 3rem;
		text-align: center;
		font-weight: 600;
		padding: 2rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		grid-gap: 2rem;
		align-items: stretch;
	}

	.app :is(button, input, select, textarea) {
		margin: 0;
		text-align: center;
		font-weight: 600;
		border: 0;
	}

	.app :is(button, input, select, textarea):focus {
		outline-color: violet;
	}

	.app input {
		width: 250px;
	}

	.app select {
		background: none;
		border: 0;
		padding: 2rem;
	}

	.app form > * {
		background: var(--yellow);
		margin: 0;
		border-radius: 0;
		-webkit-appearance: none;
		display: grid;
		align-content: center;
	}
</style>
