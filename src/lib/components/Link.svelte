<script lang="ts">
	import { activeNavItem } from '$lib/store';
	export let href: string;
	export let content: string | number;
	export let textSize: string;
	export let duration: string;
	export let displacement: string;
	export let menuItem: boolean = false;

	function setActiveNavItem(status: string) {
		activeNavItem.set(status);
	}
</script>

{#if menuItem}
	<a
		{href}
		class="block h-full overflow-hidden uppercase"
		on:click={() => setActiveNavItem(content.toString().toLowerCase())}
	>
		<span
			class="slide-up h-full transition-[top] {displacement
				? `group-hover:-top-[var(--displacement)]`
				: 'group-hover:-top-[19px]'}"
			data-hover={content}
			style="--textSize:{textSize}; --duration:{duration}; --displacement:{displacement}"
			>{content}</span
		>
	</a>
{:else}
	<a {href} class="block h-full overflow-hidden uppercase">
		<span
			class="slide-up h-full transition-[top] {displacement
				? `group-hover:-top-[var(--displacement)]`
				: 'group-hover:-top-[19px]'}"
			data-hover={content}
			style="--textSize:{textSize}; --duration:{duration}; --displacement:{displacement}"
			>{content}</span
		>
	</a>
{/if}

<style>
	.slide-up {
		position: relative;
		top: 0px;
		width: auto;
		font-size: var(--textSize);
		transition-duration: var(--duration);
	}

	.slide-up::before {
		position: absolute;
		width: auto;
		top: 100%;
		left: 0;
		content: attr(data-hover);
	}

	.slide-up::after {
		clear: both;
		content: ' ';
		display: block;
		height: 0;
		visibility: hidden;
	}
</style>
