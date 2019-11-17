// interpolates a numeric transition between two numbers within a given timeframe.
// a sign can be explicitly provided to prepend to the animation
export function counter(node, { duration = 1000, startValue = 0, endValue = 100 }) {
    const distance = endValue - startValue;
    return {
        duration,
        tick: t => {
            node.textContent = startValue + Math.ceil(t * distance);
        }
    };
}