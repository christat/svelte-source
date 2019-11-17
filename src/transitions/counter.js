
export function counter(node, { duration = 1000, startValue = 0, endValue = 100, sign = '' }) {
    const distance = Math.abs(endValue - startValue);
    return {
        duration,
        tick: t => {
            node.textContent = `${sign}${startValue + Math.round(t * distance)}`;
        }
    };
}