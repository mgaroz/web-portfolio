<script lang="ts">
	import { activeMenuInfo, active } from '$lib/store';
	export let href: string;
	export let content: string | number;
	export let textSize: string;
	export let duration: string;
	export let displacement: string = '19px';
	// export let menuItem: boolean = false;

	function setItemBeingHovered(item: string) {
		$activeMenuInfo.itemBeingHovered = item;
		$activeMenuInfo.isBeingHovered = true;
		console.log(content);
	}

	function setClickedNavItem(item: string) {
		$activeMenuInfo.currentActiveItem = item;
	}

	function setPreviousNavItem() {
		setTimeout(() => {
			$activeMenuInfo.itemBeingHovered = '';
			$activeMenuInfo.isBeingHovered = false;
		}, 0);
	}
</script>

<!-- {#if menuItem} -->
<div class="flex h-full w-full flex-col items-center justify-center">
	<a
		{href}
		class="clear-text relative mx-auto block overflow-hidden p-0 text-[14px] uppercase transition-transform duration-150 after:absolute after:left-0 after:inline-block after:translate-y-full after:transition-[inherit] after:content-[attr(data-hover)] group-hover:after:translate-y-0"
		data-hover={content}
		on:mouseenter={() => setItemBeingHovered(content.toString().toLowerCase())}
		on:mouseleave={() => setPreviousNavItem()}
		on:click={() => setClickedNavItem(content.toString().toLowerCase())}
	>
		<span class="inline-block translate-y-0 transition-[inherit] group-hover:-translate-y-full"
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

<!-- {:else}
	<a {href} class="block overflow-hidden uppercase">
		<span
			class="slide-up transition-[top] group-hover:-top-[var(--displacement)]"
			data-hover={content}
			style="--textSize:{textSize}; --duration:{duration}; --displacement:{displacement}"
			>{content}</span
		>
	</a>
{/if} -->
<style>
	.slide-up {
		position: relative;
		top: 0px;
		width: auto;
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

	/* .clear-text {
		position: relative;
		padding: 0;
		overflow: hidden;
		transition: transform 0.15s;
		display: block;
	} */

	/* .clear-text::after {
		content: attr(data-hover);
		display: inline-block;
		transform: translateY(100%);
		position: absolute;
		left: 0;
		transition: inherit;
	} */

	/* .clear-text > span {
		display: inline-block;
		transform: translateY(0%);
		transition: inherit;
	} */

	/* .clear-text:hover > span {
		transform: translateY(-100%);
	} */

	/* .clear-text:hover::after {
		transform: translateY(0%);
	} */
</style>
