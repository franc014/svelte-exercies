<script>
	import texts from '$lib/async-texts';

	function wait(ms = 0) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
		return Math.floor(randomNumber * (max - min) + min);
	}

	async function draw(node, parameters = { min: 20, max: 150 }) {
		console.log(typeof min);
		const text = node.textContent;
		let soFar = '';
		for (const letter of text) {
			soFar = soFar + letter;
			node.textContent = soFar;
			const amountOfTimeToWait = getRandomBetween(parameters.min, parameters.max);
			await wait(amountOfTimeToWait);
		}
	}
</script>

<h2 use:draw={{ min: 100, max: 300 }}>This text will be typed</h2>
<h2 use:draw={{ min: 20, max: 80 }}>This text will be typed faster</h2>
<h2 use:draw>This text will be typed the default speed</h2>
<p use:draw={{ min: 1, max: 6 }}>
	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere aut error assumenda quod quasi
	totam est officiis! Facilis eum quaerat vero, natus, odio quia, necessitatibus nam cumque est
	molestiae perspiciatis ratione fugiat ea nihil voluptatem suscipit. Iusto assumenda omnis beatae
	dolorum. Placeat molestiae non, reprehenderit repellat, omnis itaque odio aspernatur laborum
	nostrum similique provident dicta eligendi vitae suscipit. Sapiente voluptatem accusamus enim, eos
	soluta modi cum nesciunt omnis deleniti perspiciatis commodi necessitatibus accusantium ab nemo
	possimus, deserunt recusandae molestias adipisci nam harum delectus ex. Sit molestias molestiae
	aliquam natus hic ipsam ea ipsum reiciendis, odio eos rerum voluptatibus veritatis repellendus
	eligendi ex officiis, aperiam, fugiat perferendis? Aspernatur consequatur reiciendis laborum velit
	recusandae iure, in excepturi incidunt accusamus, maxime rem iusto sequi voluptate ducimus, veniam
	magnam? Sunt similique quasi earum omnis sapiente quisquam, in molestiae, nostrum, excepturi iste
	tenetur magnam? Unde ipsum maiores eligendi deleniti at eum soluta quisquam quasi blanditiis
	asperiores. Totam natus commodi sint nesciunt voluptates inventore explicabo architecto neque illo
	quas, ducimus dignissimos, reiciendis perspiciatis facere dolorem perferendis quasi. Dolorum ad
	facere sint, aspernatur vero saepe accusantium laudantium reiciendis asperiores fuga ut doloremque
	hic iusto natus inventore vitae, at esse, odit veniam debitis qui commodi delectus dolore libero!
	Itaque totam, assumenda quisquam labore illum accusantium exercitationem obcaecati quas animi
	iusto, saepe voluptate deleniti modi eaque delectus ullam, tempore sequi nemo odio incidunt ea
	odit magnam nisi! Atque, rem!
</p>

<style>
	h2 {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 50px;
		letter-spacing: -0.5px;
	}
</style>
