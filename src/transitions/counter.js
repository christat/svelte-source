// interpolates a numeric transition between two numbers within a given timeframe.
// a sign can be explicitly provided to prepend to the animation
export function counter(node, { duration = 1000, startValue = 0, endValue = 100, hideSign = false }) {
    const distance = endValue - startValue;
    
    if (hideSign) {
        return {
            duration,
            tick: t => {
                node.textContent = Math.abs(startValue + Math.ceil(t * distance));
            }
        };
    }

    // negative numbers already contain their sign; positive is implied.
    // Additionally, no distance changes should not have either sign.
    const sign = distance > 0 ? '+' : '';
    return {
        duration,
        tick: t => {
            node.textContent = `${sign}${Math.ceil(t * distance)}`;
        }
    }
}