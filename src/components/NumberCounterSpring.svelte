<script>
    import cx from 'classnames';
    import { spring } from 'svelte/motion';

    export let onCounterEnd = () => {};
    export let diffMode = false;
    export let startValue = 0;
    export let endValue = 100;
    export let hideSign = false;
    $: increase = endValue > startValue;
    $: sign = !diffMode || endValue === startValue ? '' : endValue < startValue ? '-' : '+';
    $: distance = (endValue - startValue) / 100;

    const count = spring(startValue, { stiffness: 1.8, damping: 0.3, precision: 1 });
    $: {
        if ((increase && $count >= endValue) || (!increase && $count <= endValue)) {
            onCounterEnd();
        } else {
            count.update(n => n + distance);
        }
    };
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
        <span>{Math.floor($count)}</span>
    {/if}
</span>