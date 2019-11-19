<script>
    export let src = "./source.svg";
</script>

<style>
    img {
        height: 1em;
        width: 1em;
        transform: translate(0px, -0.4em);
        padding-right: 0.4em;
    }

    .container {
        display: flex;
        flex-flow: row nowrap;
    }

    .slotContainer {
        display: flex;
        flex-flow: column nowrap;
    }

    .container,
    .slotContainer {
        align-items: flex-end;
        justify-content: flex-end;
    }
</style>

<div class="container">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img {src}>
    <div class="slotContainer">
        <slot/>
    </div>
</div>