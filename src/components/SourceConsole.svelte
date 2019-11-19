<script>
    import { diff, source } from '../stores/source';

    let value = '';
    $: disabled = typeof value !== 'number';

    const handlePlayerDeath = () => {
        $diff = -Math.round(0.1 * $source);
    };

    const resetValueWrapper = fn => {
        return () => {
            fn();
            value = '';
        }
    };
</script>

<style>
    div {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: -0.5em;
        font-size: 0.6em;
        top: 40vh;
        background-color: gray;
        border-radius: 0.3em;
        padding: 0 1em 0.1em 0.5em;
    }

    input {
        border-radius: 0.3em;
    }

    button {
        width: 100%;
        border-radius: 0.3em;
    }

    button:disabled {
        background-color: darkgray;
        border-color: darkgray;
    }

    p {
        font-size: 0.7em;
    }
</style>

<div>
    <p>SET SOURCE</p>
    <input type=number bind:value={value} placeholder="input a number">
    <button {disabled} on:click="{resetValueWrapper(() => diff.set(Math.max(-$source, value)))}">Set diff</button>
    <button {disabled} on:click="{resetValueWrapper(() => source.set(Math.max(0, value)))}">Set source</button>
    <p>- OR -</p>
    <button on:click="{source.reset}">reset source</button>
    <button on:click="{handlePlayerDeath}">player dies</button>
</div>