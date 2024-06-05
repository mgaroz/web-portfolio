<script lang="ts">
	import '../app.css';
	import Menu from '$lib/components/Menu.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import { active } from '$lib/store';
	import { isMobileMenuActive } from '$lib/store';
	import { Toaster } from 'svelte-french-toast';
	import logo from '$lib/img/mg-logo.svg';
	import { partytownSnippet } from '@builder.io/partytown/integration';
	import { browser } from '$app/environment';
	import Switcher from '$lib/components/Switcher.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	let colorScheme: string;
	let isDark: boolean;

	const toggleTheme = () => {
		if (browser) {
			const theme = localStorage.getItem('theme');

			if (theme === 'dark') {
				localStorage.theme = 'light';
				document.documentElement.classList.remove('dark');
				colorScheme = 'dark';
				isDark = false;
			} else {
				localStorage.theme = 'dark';
				document.documentElement.classList.add('dark');
				colorScheme = 'light';
				isDark = true;
			}
		}
	};

	const menuItems = [
		{ label: 'Home', href: '/', id: 'home' },
		{ label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
		{ label: 'About', href: '#about', id: 'about' },
		{ label: 'Blog', href: '#blog', id: 'blog' },
		{ label: 'Contact', href: '#contact', id: 'contact' }
	];

	onMount(() => {
		colorScheme = localStorage.getItem('theme') as string;
		isDark = colorScheme === 'dark' ? true : false;
	});
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

	<meta name="twitter:card" property="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" property="twitter:url" content="https://www.mgaroz.pro/" />
	<meta name="twitter:title" property="twitter:title" content="mgaroz | Front-End Developer" />
	<meta
		name="twitter:description"
		property="twitter:description"
		content="Miguel Garoz is a Front-End Developer. He specializes in building exceptional websites, applications, and everything in between."
	/>
	<meta
		name="twitter:image"
		property="twitter:image"
		content="https://www.mgaroz.pro/website.webp"
	/>
	<meta name="twitter:creator" content="@mgaroz_pro" />
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
{#key isDark}
	<header
		in:fly={{ delay: 300, duration: 300, easing: cubicIn, x: '-100vw', y: 0 }}
		out:fly={{ duration: 300, easing: cubicOut, x: '100vw', y: 0 }}
	>
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
				<Switcher {toggleTheme} {isDark} />
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

	<div
		in:fly={{ delay: 300, duration: 300, easing: cubicIn, x: '-100vw', y: 0 }}
		out:fly={{ duration: 300, easing: cubicOut, x: '100vw', y: 0 }}
	>
		<slot />
	</div>
{/key}

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
