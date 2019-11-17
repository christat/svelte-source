import { writable, derived } from 'svelte/store';

export const diff = writable(0);
export const source = writable(0);

export const total = derived(
    diff,
    source,
	($diff, $source) => $diff + $source
);

export const playerDeathPenalty = () => {
    source.update(amount => Math.round(0.9 * amount));
}