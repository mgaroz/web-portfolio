<script lang="ts">
	import { activeMenuInfo } from '$lib/store';
	export let menuItems: any;

	function setClickedNavItem(item: string) {
		$activeMenuInfo.currentActiveItem = item;
	}
</script>

<div class="2xs:hidden uppercase md:block">
	<ul
		class="font-bgr group flex h-full list-none items-center text-[14px]"
		on:mouseenter={() => ($activeMenuInfo.isBeingHovered = true)}
		on:mouseleave={() => ($activeMenuInfo.isBeingHovered = false)}
	>
		{#each menuItems as item}
			<li class="group/link h-full overflow-hidden px-[30px]">
				<a
					href={item.href}
					class="relative transition-all duration-150 after:absolute after:left-0 after:inline-block after:translate-y-full after:transition-[inherit] after:content-[attr(data-hover)] group-hover/link:opacity-100 group-hover/link:after:translate-y-0 group-hover:[&:not(:hover)]:opacity-50"
					data-hover={item.label}
					on:click={() => setClickedNavItem(item.id)}
				>
					<span
						class="inline-block translate-y-0 transition-[inherit] group-hover/link:-translate-y-full [&:not(:hover)]:translate-y-0"
						>{item.label}</span
					>
				</a>
				<div
					class="{!$activeMenuInfo.isBeingHovered && $activeMenuInfo.currentActiveItem === item.id
						? 'visible'
						: 'invisible'} mt-[2px] h-[1px] w-full border-t group-hover/link:visible hover/link:[&:not(:hover)]:invisible"
				/>
			</li>
		{/each}
	</ul>
</div>
