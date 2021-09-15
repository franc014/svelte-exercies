<script>
	let options = 'sarcastic';
	let text = 'so I was thinking about going to the store.';
	import funkyLetters from '../lib/funkyLetters';

	const filters = {
		sarcastic(letter, i) {
			if (i % 2) {
				return letter.toUpperCase();
			}
			return letter;
		},
		funky(letter) {
			let funkyLetter = funkyLetters[letter];
			if (funkyLetter) return funkyLetter;
			funkyLetter = funkyLetters[letter.toLowerCase()];
			if (funkyLetter) return funkyLetter;
			return letter;
		},
		unable(letter) {
			const random = Math.floor(Math.random() * 3);
			if (letter === ' ' && random === 2) {
				return '...';
			}
			return letter;
		}
	};

	$: transformedText = Array.from(text).map(filters[options]).join('');
</script>

<div class="typer">
	<label for="sarcastic">
		<input type="radio" bind:group={options} value="sarcastic" id="sarcastic" name="filter" />
		Sarcastic
	</label>
	<label for="funky">
		<input type="radio" bind:group={options} value="funky" id="funky" name="filter" />
		Funky
	</label>
	<label for="unable">
		<input type="radio" bind:group={options} value="unable" id="unable" name="filter" />
		Unable to Structure a Sentence
	</label>
	<textarea name="text" bind:value={text} />
	<p class="result" bind:textContent={transformedText} contenteditable="false" />
</div>

<style>
	.typer {
		margin: 0 auto;
		background: white;
		width: 500px;
		padding: 2rem;
		padding: 2rem;
		border-radius: 3px;
		display: grid;
	}

	textarea {
		width: 100%;
	}
</style>
