<script lang="ts">
	import { activeMenuInfo, active } from '$lib/store';
	export let href: string;
	export let content: string | number;
	export let textSize: string;
	export let duration: string;
	export let displacement: string = '19px';
	export let menuItem: boolean = false;
	export let target: string = '_self';

	function setItemBeingHovered(item: string) {
		$activeMenuInfo.itemBeingHovered = item;
		$activeMenuInfo.isBeingHovered = true;
	}

	function setClickedNavItem(item: string) {
		$activeMenuInfo.currentActiveItem = item;
	}

	function setPreviousNavItem() {
		$activeMenuInfo.itemBeingHovered = '';
		$activeMenuInfo.isBeingHovered = false;
	}
</script>

{#if menuItem}
	<div class="flex h-full w-full flex-col items-center justify-center">
		<a
			{href}
			class="mx-auto block overflow-hidden uppercase"
			on:mouseenter={() => setItemBeingHovered(content.toString().toLowerCase())}
			on:mouseleave={() => setPreviousNavItem()}
			on:click={() => setClickedNavItem(content.toString().toLowerCase())}
		>
			<span
				class="slide-up transition-[top] group-hover:-top-[var(--displacement)]"
				data-hover={content}
				style="--textSize:{textSize}; --duration:{duration}; --displacement:{displacement}"
				>{content}</span
			>
		</a>
		<div
			class="h-[1px] w-full border-t group-hover:visible {!$active &&
			!$activeMenuInfo.isBeingHovered &&
			$activeMenuInfo.currentActiveItem === content.toString().toLowerCase()
				? 'visible'
				: 'invisible'}"
		/>
	</div>
{:else}
	<a {href} class="block overflow-hidden uppercase" {target}>
		<span
			class="slide-up transition-[top] group-hover:-top-[var(--displacement)]"
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
		top: 105%;
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
