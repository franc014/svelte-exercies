<script>
	import TabButton from './TabButton.svelte';
	import TabPanel from './TabPanel.svelte';
	import { contents } from '../../lib/stores/tabContent';

	export let tabButtons = [];
	let currentTabId = tabButtons[0]?.id;

	function activatePanel(e) {
		currentTabId = e.detail.tabId;
	}
</script>

<div class="tabs">
	{#if tabButtons}
		<div role="tablist" aria-label="Programming Languages">
			{#each tabButtons as tabButton}
				<TabButton
					name={tabButton.name}
					id={tabButton.id}
					isSelected={tabButton.id === currentTabId}
					on:activateTab={activatePanel}
				/>
			{/each}
		</div>
		{#each $contents as contentItem}
			<TabPanel id={contentItem.id} content={contentItem.content} bind:currentTabId />
		{/each}
	{:else}
		<p>Please provide tab items</p>
	{/if}
</div>

<style>
	.tabs {
		display: grid;
	}

	[role='tablist'] {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-gap: 10px;
	}
</style>
