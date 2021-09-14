<script>
	import Tabs from '../components/tabs/Tabs.svelte';
	const tabButtons = [
		{
			id: 'js',
			name: 'JavaScript'
		},

		{
			id: 'ruby',
			name: 'Ruby'
		},
		{
			id: 'php',
			name: 'PHP'
		}
	];
</script>

<Tabs {tabButtons} />
