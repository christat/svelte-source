<script>
    import { onMount } from 'svelte';
    import FadeContainer from './FadeContainer.svelte';
    import LeftImageContainer from './LeftImageContainer.svelte';
    import SlideTopDownContainer from './SlideTopDownContainer.svelte';
    import NumberCounter from './NumberCounter.svelte';

    // diff refers to the first NumberContainer (with sign and color).
    // The handler triggers sliding out by SlideTopDownContainer on transition end.
    const diffMode = true;
    let diffVisible = true;
    function hideDiff() {
        setTimeout(() => diffVisible = false, 1000)
    }

    // final value to be rendered by second NumberContainer.
    // Gets synced/updated after first NumberContainer ends its transition.
    let finalValue = 2500;
    function onSlideOut() {
        finalValue = 2900;
    }

    // handles visiiity of entire notification.
    // Fades out when second NumberContainer ends transitioning with a delay (below).
    let visible = false;
    function fadeOut() {
        setTimeout(() => visible = false, 2000);
    }

    onMount(() => visible = true);
</script>

<style>
    .container {
        position: absolute;
        bottom: 20vh;
        left: 5vw;
    }

    .flex {
        display: inline-flex;
        flex-flow: column nowrap;
        align-items: flex-end;
        justify-content: flex-end;
    }

    span {
        visibility: hidden;
    }
</style>

<div class="container">
    <FadeContainer {visible}>
        <div class="flex">
            <span>{finalValue}</span>
            <SlideTopDownContainer visible={diffVisible} {onSlideOut} >
                <NumberCounter {diffMode} endValue={400} onCounterEnd={hideDiff} />
            </SlideTopDownContainer>
            <LeftImageContainer>
                <NumberCounter startValue={2500} endValue={finalValue} onCounterEnd={fadeOut} />
            </LeftImageContainer>
        </div>
    </FadeContainer>
</div>