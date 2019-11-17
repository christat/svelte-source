<script>
	import SourceConsole from './components/SourceConsole.svelte';
	import SourceNotification from './components/SourceNotification.svelte';
</script>

<style>
	:global(body) {
		margin: 0px;
		background-color: black;
		color: white;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 16px;
	}

	@media only screen and (min-height: 720px) and (max-height: 1079px) {
	:global(body) {
		font-size: 24px;
	}
	}

	@media only screen and (min-height: 1080px) and (max-height: 1439px) {
	:global(body) {
		font-size: 32px;
	}
	}

	@media only screen and (min-height: 1440px) and (max-height: 1799px) {
	:global(body) {
		font-size: 40px;
	}
	}

	@media only screen and (min-height: 1800px) and (max-height: 2159px) {
	:global(body) {
		font-size: 48px;
	}
	}

	@media only screen and (min-height: 2160px) {
	:global(body) {
		font-size: 56px;
	}
	}
</style>

<SourceNotification />
<SourceConsole />