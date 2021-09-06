<script>
	let moveAmount = 10;
	let ctx = null;
	let x = 0;
	let y = 0;
	let hue = 0;

	function initCanvas(canvas) {
		ctx = canvas.getContext('2d');
		const { width, height } = canvas;
		x = Math.floor(Math.random() * width);
		y = Math.floor(Math.random() * height);
		ctx.lineJoin = 'round';
		ctx.lineCap = 'round';
		ctx.lineWidth = moveAmount;
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x, y);
		ctx.stroke();
		ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	}

	function draw({ key }) {
		hue = hue + moveAmount;
		ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
		ctx.beginPath();
		ctx.moveTo(x, y);
		switch (key) {
			case 'ArrowUp':
				y -= moveAmount;
				break;
			case 'ArrowDown':
				y += moveAmount;
				break;
			case 'ArrowLeft':
				x -= moveAmount;
				break;
			case 'ArrowRight':
				x += moveAmount;
				break;
			default:
				break;
		}
		ctx.lineTo(x, y);
		ctx.stroke();
	}

	function handleKey(e) {
		if (e.key.includes('Arrow')) {
			e.preventDefault();
			draw({
				key: e.key
			});
		}
	}
</script>

<svelte:window on:keydown={handleKey} />
<div class="main">
	<div class="canvasWrap">
		<canvas width="1600" height="1000" id="etch-a-sketch" use:initCanvas /> />
		<div class="buttons">
			<button class="shake">Shake!</button>
		</div>
	</div>
</div>

<style>
	.main {
		display: grid;
		align-items: center;
		justify-items: center;
		background: white;
		background: url(https://s3.amazonaws.com/media.locally.net/original/HABA_ALT_2017-08-02-13-22-45.jpg);
		background-size: cover;
	}

	.canvasWrap {
		margin: 20px;
	}

	.buttons {
		align-self: left;
	}

	canvas {
		border: 30px solid #e80000;
		border-radius: 10px;
		/* Set the width and height to half the actual size so it doesn't look pixelated */
		width: 800px;
		height: 500px;
		background: white;
		margin-bottom: 20px;
	}

	canvas.shake {
		animation: shake 0.5s linear 1;
	}

	@keyframes shake {
		10%,
		90% {
			transform: translate3d(-1px, 0, 0);
		}

		20%,
		80% {
			transform: translate3d(2px, 0, 0);
		}

		30%,
		50%,
		70% {
			transform: translate3d(-4px, 0, 0);
		}

		40%,
		60% {
			transform: translate3d(4px, 0, 0);
		}
	}
</style>
