<script lang="ts">
	import '../app.css';
	import Menu from '$lib/components/Menu.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import { active } from '$lib/store';
	import { isMobileMenuActive } from '$lib/store';
	import { Toaster } from 'svelte-french-toast';
	import logo from '$lib/img/mg-logo.svg';
	import logolight from '$lib/img/mg-logo-light.svg';
	import { browser } from '$app/environment';
	import Switcher from '$lib/components/Switcher.svelte';
	import { onMount } from 'svelte';
	import LayoutHead from '$lib/components/LayoutHead.svelte';

	let colorScheme: string;
	let isDark: boolean;

	const toggleTheme = () => {
		if (browser) {
			const theme = localStorage.getItem('theme');

			if (theme === 'dark') {
				localStorage.theme = 'light';
				document.documentElement.classList.remove('dark');
				document.documentElement.classList.add('light');
				colorScheme = 'dark';
				isDark = false;
			} else {
				localStorage.theme = 'dark';
				document.documentElement.classList.add('dark');
				document.documentElement.classList.remove('light');
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

		if (colorScheme !== null || colorScheme !== undefined || colorScheme !== '') {
			isDark = colorScheme === 'dark' ? true : false;
		} else {
			isDark = false;
		}
	});
</script>

<svelte:head>
	<LayoutHead />
	{#if isDark}
		<link rel="preload" as="image" href={logo} />
	{:else}
		<link rel="preload" as="image" href={logolight} />
	{/if}
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
		class="dark:bg-cod-gray-500 2xs:px-6 2xs:py-8 fixed z-30 flex w-full items-center justify-between bg-white md:h-24 md:px-20 md:py-5"
	>
		<div class="flex items-center">
			{#if isDark}
				<img src={logo} alt="logo" class="h-4" width="144px" height="16" />
			{:else}
				<img src={logolight} alt="logo" class="h-4" width="144px" height="16" />
			{/if}
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="flex h-full items-center"
			on:mouseenter={() => ($active = true)}
			on:mouseleave={() => ($active = false)}
		>
			<Menu {menuItems} />
			<div class="2xs:hidden md:block">
				<Switcher {toggleTheme} {isDark} />
			</div>
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
