<script>
    import cx from 'classnames';
    import { onMount, onDestroy } from 'svelte';
    import { counter } from '../transitions/counter';

    export let onCounterEnd = () => {};
    export let diffMode = false;
    export let startValue = 0;
    export let endValue = 100;
    $: sign = !diffMode || endValue === startValue ? '' : endValue < startValue ? '-' : '+';

    let visible = false;
    onMount(() => visible = true);
    onDestroy(() => visible = false);
</script>

<style>
    span {
        text-align: right;
        font-weight: bold;
    }

    .increase {
        color: #00ba95;
    }

    .decrease {
        color: #b80037;
    }
</style>

{#if visible}
    <span 
        class="{
            diffMode
            ? cx({ "increase": sign === '+', "decrease": sign === '-' })
            : ''
        }"
    >
        {#if startValue === endValue} 
            <span>{endValue}</span> 
        {:else}
            <span 
                in:counter="{{ startValue, endValue }}"
                on:introend="{onCounterEnd}"
            />
        {/if}
    </span>
{/if}