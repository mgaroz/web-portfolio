import { writable } from 'svelte/store';

export const active = writable(false);
export const workActive = writable(false);
export const backColor = writable('#000');
export const blogActive = writable(false);
export const activeNavItem = writable('home');
export const activeMenuInfo = writable({
	item: 'home',
	hovered: true
});
