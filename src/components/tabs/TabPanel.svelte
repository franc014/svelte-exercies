<script>
	export let id = 'js';
	export let content;
	export let currentTabId;
</script>

<div role="tabpanel" aria-labelledby={id} hidden={currentTabId !== id}>
	<p>{content}</p>
</div>

<style>
	[role='tabpanel'] {
		background: var(--yellow);
		padding: 2rem;
	}
</style>
