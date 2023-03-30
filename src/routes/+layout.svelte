<script lang="ts">
	import '../app.css';
	import Link from '$lib/components/Link.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import { active, activeMenuInfo, isMobileMenuActive } from '$lib/store';
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
	<button
		aria-controls="primary-navigation"
		aria-expanded="false"
		class="2xs:fixed 2xs:aspect-square 2xs:z-50 2xs:right-6 2xs:top-7 h-6 w-6 md:hidden {$isMobileMenuActive
			? 'open'
			: ''}"
		on:click={() => ($isMobileMenuActive = !$isMobileMenuActive)}
	>
		<div class="flex h-6 w-6 flex-col items-center justify-around overflow-hidden">
			<div class="bar-one" />
			<div class="bar-two" />
			<div class="bar-three" />
		</div>
		<span class="sr-only">Menu</span></button
	>
	<nav
		class="bg-cod-gray-500 2xs:px-6 2xs:py-8 fixed z-30 flex w-full items-center justify-between md:h-32 md:py-5 md:px-20"
	>
		<div class="flex items-center">
			<img src={logo} alt="logo" class="h-4" width="144px" height="16" />
		</div>
		<div class="menu 2xs:hidden h-full md:block">
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
					<Link href="/" content="Home" textSize="14px" duration={'150ms'} menuItem={true} />
				</li>
				<li
					class="hovered group h-full px-[30px]"
					style="opacity: {$activeMenuInfo.itemBeingHovered === 'portfolio'
						? 1
						: $activeMenuInfo.isBeingHovered
						? 0.5
						: 1}"
					on:mouseenter={() => itemHovered(true, 'portfolio')}
					on:mouseleave={() => itemHovered(false, '')}
				>
					<Link
						href="#portfolio"
						content="Portfolio"
						textSize="14px"
						duration={'150ms'}
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
					<Link href="#about" content="About" textSize="14px" duration={'150ms'} menuItem={true} />
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
					<Link href="#blog" content="Blog" textSize="14px" duration={'150ms'} menuItem={true} />
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
						menuItem={true}
					/>
				</li>
			</ul>
		</div>
	</nav>
	<div
		class="bg-cod-gray-500 2xs:fixed top-0 z-40 h-full w-full pt-20 duration-500 md:hidden {$isMobileMenuActive
			? 'translate-y-0'
			: '-translate-y-full'}"
	>
		<MobileNav />
	</div>
</header>

<slot />

<style>
	.hovered {
		transition: opacity 0.1s ease-in-out;
	}

	.bar-one,
	.bar-two,
	.bar-three {
		width: 1.5rem;
		height: 0.125rem;
		background-color: #fff;
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
	}

	.bar-one {
		transform: rotate(0);
	}

	.bar-two {
		opacity: 1;
		transform: translateX(0);
	}

	.bar-three {
		transform: rotate(0);
	}

	.open .bar-one {
		transform: rotate(45deg);
	}
	.open .bar-two {
		opacity: 0;
		transform: translateX(-20px);
	}

	.open .bar-three {
		transform: rotate(-45deg);
	}
</style>
