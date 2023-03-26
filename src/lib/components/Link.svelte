<script lang="ts">
	import { activeNavItem } from '$lib/store';
	export let href: string;
	export let content: string | number;
	export let textSize: string;
	export let duration: string;
	export let displacement: string;
	export let menuItem: boolean = false;
	let prevNavItem: string;

	function setActiveNavItem(status: string) {
		prevNavItem = $activeNavItem;
		activeNavItem.set(status);
	}

	function setPreviousNavItem() {
		if (prevNavItem !== $activeNavItem) {
			activeNavItem.set(prevNavItem);
		}
	}
</script>

{#if menuItem}
	<a
		{href}
		class="block h-full overflow-hidden uppercase"
		on:mouseenter={() => setActiveNavItem(content.toString().toLowerCase())}
		on:mouseleave={() => setPreviousNavItem()}
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
	<a {href} class="block overflow-hidden uppercase">
		<span
			class="slide-up transition-[top] {displacement
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
