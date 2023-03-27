<script lang="ts">
	import '../app.css';
	import Link from '$lib/components/Link.svelte';
	import { active, activeMenuInfo } from '$lib/store';
	import logo from '$lib/img/mg-logo.svg';

	function handleEnter() {
		active.set(true);
	}

	function itemHovered(status: boolean, item: string) {
		activeMenuInfo.set({
			itemBeingHovered: item,
			isBeingHovered: status,
			currentActiveItem: $activeMenuInfo.currentActiveItem
		});
	}
</script>

<svelte:head>
	<title>mgaroz | Font-End Developer</title>
	<meta name="robots" content="index nofollow" />
	<meta
		name="description"
		content="Miguel Garoz is a Front-End Developer. He specializes in building exceptional websites, applications, and everything in between."
	/>
</svelte:head>

<header>
	<nav class="bg-cod-gray-500 fixed z-30 flex h-32 w-full items-center justify-between py-5 px-20">
		<div class="flex items-center"><img src={logo} alt="logo" class="h-4" /></div>
		<div class="menu h-full">
			<ul
				class="font-bgr flex h-full list-none items-center"
				on:mouseenter={handleEnter}
				on:mouseleave={() => active.set(false)}
			>
				<li
					class="hovered group h-full px-[30px]"
					style="opacity: {$activeMenuInfo.itemBeingHovered === 'home'
						? 1
						: $activeMenuInfo.isBeingHovered
						? 0.5
						: 1}"
					on:mouseenter={() => itemHovered(true, 'home')}
					on:mouseleave={() => itemHovered(false, '')}
				>
					<Link
						href="/"
						content="Home"
						textSize="14px"
						duration={'150ms'}
						displacement=""
						menuItem={true}
					/>
				</li>
				<li
					class="hovered group h-full px-[30px]"
					style="opacity: {$activeMenuInfo.itemBeingHovered === 'work'
						? 1
						: $activeMenuInfo.isBeingHovered
						? 0.5
						: 1}"
					on:mouseenter={() => itemHovered(true, 'work')}
					on:mouseleave={() => itemHovered(false, '')}
				>
					<Link
						href="#work"
						content="Work"
						textSize="14px"
						duration={'150ms'}
						displacement=""
						menuItem={true}
					/>
				</li>
				<li
					class="hovered group h-full px-[30px]"
					style="opacity: {$activeMenuInfo.itemBeingHovered === 'about'
						? 1
						: $activeMenuInfo.isBeingHovered
						? 0.5
						: 1}"
					on:mouseenter={() => itemHovered(true, 'about')}
					on:mouseleave={() => itemHovered(false, '')}
				>
					<Link
						href="#about"
						content="About"
						textSize="14px"
						duration={'150ms'}
						displacement=""
						menuItem={true}
					/>
				</li>
				<li
					class="hovered group h-full px-[30px]"
					style="opacity: {$activeMenuInfo.itemBeingHovered === 'blog'
						? 1
						: $activeMenuInfo.isBeingHovered
						? 0.5
						: 1}"
					on:mouseenter={() => itemHovered(true, 'blog')}
					on:mouseleave={() => itemHovered(false, '')}
				>
					<Link
						href="#blog"
						content="Blog"
						textSize="14px"
						duration={'150ms'}
						displacement=""
						menuItem={true}
					/>
				</li>
				<li
					class="hovered group h-full pl-[30px]"
					style="opacity: {$activeMenuInfo.itemBeingHovered === 'contact'
						? 1
						: $activeMenuInfo.isBeingHovered
						? 0.5
						: 1}"
					on:mouseenter={() => itemHovered(true, 'contact')}
					on:mouseleave={() => itemHovered(false, '')}
				>
					<Link
						href="#contact"
						content="Contact"
						textSize="14px"
						duration={'150ms'}
						displacement=""
						menuItem={true}
					/>
				</li>
			</ul>
		</div>
	</nav>
</header>

<slot />

<style>
	.hovered {
		transition: opacity 0.1s ease-in-out;
	}
</style>
