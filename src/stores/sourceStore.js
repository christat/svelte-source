import { writable, derived } from 'svelte/store';

export const diff = writable(0);
export const total = writable(0)

export const totalPreview = derived(
    diff,
    total,
	($diff, $total) => $diff + $total
);

export const updateTotal = total.set(totalPreview);