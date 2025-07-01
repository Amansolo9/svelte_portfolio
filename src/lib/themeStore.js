import { writable } from 'svelte/store';

// Default to light, will be updated on mount
export const theme = writable('light'); 