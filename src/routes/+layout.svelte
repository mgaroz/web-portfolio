<script lang="ts">
	import '../app.css';
	import Menu from '$lib/components/Menu.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import { active } from '$lib/store';
	import { isMobileMenuActive } from '$lib/store';
	import { Toaster } from 'svelte-french-toast';
	import logo from '$lib/img/mg-logo.svg';
	import { partytownSnippet } from '@builder.io/partytown/integration';

	const menuItems = [
		{ label: 'Home', href: '/', id: 'home' },
		{ label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
		{ label: 'About', href: '#about', id: 'about' },
		{ label: 'Blog', href: '#blog', id: 'blog' },
		{ label: 'Contact', href: '#contact', id: 'contact' }
	];
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
	<script>
		partytown = {
			forward: ['dataLayer.push', 'gtag']
		};
	</script>
	{@html '<script>' + partytownSnippet() + '</script>'}
	<script
		type="text/partytown"
		src="https://www.googletagmanager.com/gtag/js?id=G-NLCL9X3EY6"
	></script>
	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			dataLayer.push(arguments);
		};
		gtag('js', new Date());
		gtag('config', 'G-NLCL9X3EY6');
	</script>
</svelte:head>

<Toaster />
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
		class="dark:bg-cod-gray-500 2xs:px-6 2xs:py-8 fixed z-30 flex w-full items-center justify-between bg-white md:h-32 md:px-20 md:py-5"
	>
		<div class="flex items-center">
			<img src={logo} alt="logo" class="h-4" width="144px" height="16" />
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="flex h-full items-center"
			on:mouseenter={() => ($active = true)}
			on:mouseleave={() => ($active = false)}
		>
			<Menu {menuItems} />
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
