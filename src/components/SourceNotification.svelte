<script>
    import { diff, source, total, settle } from '../stores/source';
    import FadeContainer from './FadeContainer.svelte';
    import LeftImageContainer from './LeftImageContainer.svelte';
    import SlideTopDownContainer from './SlideTopDownContainer.svelte';
    import NumberCounter from './NumberCounter.svelte';

    // used as "ruler" to preserve left-margin on source number wrt diff; checkout styles/markup for deets.
    $: longestNumber = String($diff).length >= String($source).length ? $diff : $source;

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
    .layout {
        position: absolute;
        bottom: 20vh;
        left: 5vw;
    }

    .notification {
        display: inline-flex;
        flex-flow: column nowrap;
        align-items: flex-end;
        justify-content: flex-end;
    }

    .ruler {
        visibility: hidden;
        height: 0;
    }
</style>

<div class="layout">
    <FadeContainer {visible}>
        <div class="notification">
            <span class="ruler">{$total}</span>
            <SlideTopDownContainer visible={diffVisible}>
                <NumberCounter diffMode={true} endValue={$diff} onCounterEnd={hideDiff} />
            </SlideTopDownContainer>
            <LeftImageContainer>
                <span class="ruler">{longestNumber}</span>
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