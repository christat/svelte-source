<script>
    import { diff, source, total, settle } from '../stores/source';
    import FadeContainer from './FadeContainer.svelte';
    import LeftImageContainer from './LeftImageContainer.svelte';
    import SlideTopDownContainer from './SlideTopDownContainer.svelte';
    import NumberCounter from './NumberCounter.svelte';

    // diff refers to the first NumberContainer (with sign and color).
    // The handler triggers sliding out by SlideTopDownContainer on transition end.
    $: diffVisible = $diff !== 0;
    const hideDiff = () => setTimeout(() => diffVisible = false, 1000);
    const hideSource = () => setTimeout(() => {
        source.update(value => Math.max(0, value + $diff));
        diff.set(0);
    }, 1000);

    // handles visiiity of entire notification.
    // Fades out when second NumberContainer ends transitioning with a delay (below).
    $: visible = $diff !== 0;
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
            <span>{$total}</span>
            <SlideTopDownContainer visible={diffVisible}>
                <NumberCounter diffMode={true} endValue={$diff} onCounterEnd={hideDiff} />
            </SlideTopDownContainer>
            <LeftImageContainer>
                <NumberCounter
                    hideSign={true}
                    startValue={$source}
                    endValue={diffVisible ? $source : $total}
                    onCounterEnd={hideSource}
                />
            </LeftImageContainer>
        </div>
    </FadeContainer>
</div>