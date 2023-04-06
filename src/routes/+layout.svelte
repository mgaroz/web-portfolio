<script lang="ts">
	import '../app.css';
	import Link from '$lib/components/Link.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import { active } from '$lib/store';
	import { activeMenuInfo } from '$lib/store';
	import { isMobileMenuActive } from '$lib/store';
	import logo from '$lib/img/mg-logo.svg';

	const menuItems = [
		{ label: 'Home', href: '/', id: 'home' },
		{ label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
		{ label: 'About', href: '#about', id: 'about' },
		{ label: 'Blog', href: '#blog', id: 'blog' },
		{ label: 'Contact', href: '#contact', id: 'contact' }
	];

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
	<title>mgaroz | Front-End Developer</title>
	<meta name="title" content="mgaroz | Front-End Developer" />
	<meta
		name="description"
		content="Miguel Garoz is a Front-End Developer. He specializes in building exceptional websites, applications, and everything in between."
	/>

	<meta itemprop="name" content="mgaroz | Front-End Developer" />
	<meta
		itemprop="description"
		content="Miguel Garoz is a Front-End Developer. He specializes in building exceptional websites, applications, and everything in between."
	/>
	<meta itemprop="image" content="https://www.mgaroz.pro/website.webp" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.mgaroz.pro/" />
	<meta property="og:title" content="mgaroz | Front-End Developer" />
	<meta
		property="og:description"
		content="Miguel Garoz is a Front-End Developer. He specializes in building exceptional websites, applications, and everything in between."
	/>
	<meta property="og:image" content="https://www.mgaroz.pro/website.webp" />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.mgaroz.pro/" />
	<meta property="twitter:title" content="mgaroz | Front-End Developer" />
	<meta
		property="twitter:description"
		content="Miguel Garoz is a Front-End Developer. He specializes in building exceptional websites, applications, and everything in between."
	/>
	<meta property="twitter:image" content="https://www.mgaroz.pro/website.webp" />
</svelte:head>

<header>
	<button
		aria-controls="primary-navigation"
		aria-expanded="false"
		class="2xs:fixed 2xs:aspect-square 2xs:z-50 2xs:right-6 2xs:top-7 h-6 w-6 md:hidden"
		on:click={() => ($isMobileMenuActive = !$isMobileMenuActive)}
	>
		<div
			class="flex h-6 w-6 flex-col items-center justify-around overflow-hidden {$isMobileMenuActive
				? 'open'
				: ''}"
		>
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
				{#each menuItems as item}
					<li
						class="hovered group h-full px-[30px] {$activeMenuInfo.itemBeingHovered === item.id
							? 'li__opacity__full'
							: $activeMenuInfo.isBeingHovered
							? 'li__opacity__half'
							: 'li__opacity__full'}"
						on:mouseenter={() => itemHovered(true, item.id)}
						on:mouseleave={() => itemHovered(false, '')}
					>
						<Link href={item.href} content={item.label} />
					</li>
				{/each}
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
	.li__opacity__full {
		opacity: 1;
	}

	.li__opacity__half {
		opacity: 0.5;
	}
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
