<script>
	import { onMount } from 'svelte';

	let video;
	let canvas;
	let faceCanvas;

	let ctx;
	let faceCtx;
	let faceDetector;

	let options = {
		SIZE: 10,
		SCALE: 1.35
	};

	onMount(function () {
		ctx = canvas.getContext('2d');
		faceCtx = faceCanvas.getContext('2d');
		faceDetector = new FaceDetector();

		async function populateVideo() {
			const stream = await navigator.mediaDevices.getUserMedia({
				video: {
					width: 800,
					height: 720
				}
			});

			video.srcObject = stream;
			await video.play();
			// size the canvases to be the same size as the video
			canvas.width = video.videoWidth;
			canvas.height = video.videoHeight;
			faceCanvas.width = video.videoWidth;
			faceCanvas.height = video.videoHeight;
		}
		function censor({ boundingBox: face }) {
			faceCtx.imageSmoothingEnabled = false;
			faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
			// draw small face
			faceCtx.drawImage(
				// 5 source args
				video, // where does the source come from?
				face.x, // where do we start the source pull from
				face.y,
				face.width,
				face.height,
				// 4 draw args
				face.x, // where should we start drawing the x and y
				face.y,
				options.SIZE,
				options.SIZE
			);
			const width = face.width * options.SCALE;
			const height = face.height * options.SCALE;
			faceCtx.drawImage(
				faceCanvas, // source
				face.x,
				face.y,
				options.SIZE,
				options.SIZE,
				// drawing args
				face.x - (width - face.width) / 2,
				face.y - (height - face.height) / 2,
				width,
				height
			);
		}

		function drawFace(face) {
			const { width, height, top, left } = face.boundingBox;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.strokeStyle = '#ffc600';
			ctx.lineWidth = 2;
			ctx.strokeRect(left, top, width, height);
		}
		async function detect() {
			const faces = await faceDetector.detect(video);
			// ask the browser when the next animation frame is, and tell it to run detect for us
			faces.forEach(drawFace);
			faces.forEach(censor);
			requestAnimationFrame(detect);
		}

		populateVideo().then(detect);
	});
</script>

<div class="controls">
	<label for="SCALE">
		SCALE:
		<input bind:value={options.SCALE} type="range" name="SCALE" min="0.3" max="3" step="0.1" />
	</label>
	<label for="SIZE">
		SIZE:
		<input bind:value={options.SIZE} type="range" name="SIZE" min="1" max="100" step="1" />
	</label>
</div>
<div class="wrap">
	<video class="webcam" src="/" bind:this={video}>
		<track kind="captions" />
	</video>
	<canvas class="video" bind:this={canvas} />
	<canvas class="face" bind:this={faceCanvas} />
</div>

<style>
	.wrap {
		position: relative;
		min-height: 100vh;
		display: grid;
		justify-content: center;
		align-items: center;
	}

	.wrap > * {
		grid-column: 1;
		grid-row: 1;
	}

	.face {
		position: absolute;
	}
</style>
