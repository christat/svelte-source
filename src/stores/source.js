import { writable, derived } from 'svelte/store';

const createSource = () => {
    const { subscribe, set, update } = writable(0);

    return {
        subscribe,
        set: value => set(Math.max(0, value)),
        reset: () => set(0),
        update
    }
}

export const source = createSource();
export const diff = writable(0);
export const total = derived(
    [diff, source],
	([$diff, $source]) => $diff + $source
);