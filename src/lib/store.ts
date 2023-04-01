import { writable } from 'svelte/store';

export const active = writable(false);
export const workActive = writable(false);
export const backColor = writable('#000');
export const blogActive = writable(false);
export const blogActiveTags = writable(false);
export const activeMenuInfo = writable({
	itemBeingHovered: '',
	isBeingHovered: false,
	currentActiveItem: 'home'
});
export const isMobileMenuActive = writable(false);
export const observed = writable(false);
