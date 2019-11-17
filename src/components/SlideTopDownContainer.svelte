<script>
    import { fly } from 'svelte/transition';

    export let inY = -40;
    export let outY = 40;
    export let duration = 1000;
    export let visible = false;
    export let onSlideOut = () => {};
</script>

{#if visible}
    <div
        in:fly="{{ duration, y: inY }}"
        out:fly="{{ duration, y: outY }}"
        on:outrostart="{onSlideOut}"
    >
        <slot/>
    </div>
{/if}