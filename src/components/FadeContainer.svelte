<script>
    import { fade } from 'svelte/transition';

    export let duration = 500;
    export let visible = false;
</script>

{#if visible}
	<div transition:fade="{{ duration }}">
        <slot />
	</div>
{/if}