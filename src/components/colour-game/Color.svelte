<script>
	import { isDark } from '$lib/colors';
	export let color = 'black';
</script>

<span class={`color ${color}`} class:dark={isDark(color)} style={`background:${color}`}>
	{color}
</span>

<style>
	.color {
		color: rgba(0, 0, 0, 0.4);
		flex: 1;
		padding: 1rem;
		font-weight: 900;
	}

	.color.dark {
		color: rgba(255, 255, 255, 0.75);
	}

	@keyframes jump {
		from {
			transform: scale(2.5) rotate(-3deg);
			box-shadow: var(--box-shadow);
		}
		to {
			transform: scale(1) rotate(0);
		}
	}

	.color.got {
		text-decoration: line-through;
		animation: jump 0.2s ease-in-out 2 alternate-reverse;
	}
</style>
