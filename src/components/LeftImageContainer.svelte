<script>
    export let src = "./source.svg";
</script>

<style>
    div {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-end;
        justify-content: flex-end;
    }

    img {
        height: 1em;
        width: 1em;
        transform: translate(0px, -0.4em);
        padding-right: 0.4em;
    }
</style>

<div>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img {src}>
    <slot/>
</div>