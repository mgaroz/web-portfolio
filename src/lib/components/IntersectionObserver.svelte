<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { observed } from '$lib/store';

	function handleView() {
		$observed = true;
	}
	let container: HTMLElement;
	let observer: IntersectionObserver;

	onMount(() => {
		if (browser) {
			const handleIntersect = (entries: any, observer: IntersectionObserver) => {
				entries.forEach((entry: any) => {
					if (entry.isIntersecting) {
						observer.unobserve(entry.target);
						handleView();
					}
				});
			};
			const options = { threshold: 0, rootMargin: '-30%' };
			observer = new IntersectionObserver(handleIntersect, options);
			observer.observe(container);
		}
	});
	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});
</script>

<div bind:this={container}>
	<slot />
</div>
