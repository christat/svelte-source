<script>
    import { fly } from 'svelte/transition';

    export let yStart = -40;
    export let yEnd = 40;
    export let duration = 1000;
    export let visible = false;
    export let onSlideOut = () => {};
</script>

{#if visible}
    <div
        in:fly="{{ duration, y: yStart }}"
        out:fly="{{ duration, y: yEnd }}"
        on:outrostart="{onSlideOut}"
    >
        <slot/>
    </div>
{/if}