<script lang="ts">
	import { activeMenuInfo, active } from '$lib/store';
	export let href: string;
	export let content: string | number;

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
		class="mt-[2px] h-[1px] w-full border-t group-hover:visible {!$active &&
		!$activeMenuInfo.isBeingHovered &&
		$activeMenuInfo.currentActiveItem === content.toString().toLowerCase()
			? 'visible'
			: 'invisible'}"
	/>
</div>
