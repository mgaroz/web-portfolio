<script lang="ts">
	import '../app.css';
	import Link from '$lib/components/Link.svelte';
	import { active, activeNavItem } from '$lib/store';
	import logo from '$lib/img/mg-logo.svg';

	let hoveredStatus = {
		hovered: false,
		item: ''
	};

	function handleEnter() {
		active.set(true);
	}

	function itemHovered(status: boolean, item: string) {
		hoveredStatus = { hovered: status, item: item };
	}
</script>

<header>
	<nav class="bg-cod-gray-500 fixed z-30 flex h-32 w-full items-center justify-between py-5 px-20">
		<div class="flex items-center"><img src={logo} alt="logo" class="h-8" /></div>
		<div class="menu">
			<ul
				class="font-bgr flex list-none"
				on:mouseenter={handleEnter}
				on:mouseleave={() => active.set(false)}
			>
				<li
					class="group inline-block py-5 px-[30px]"
					style="opacity: {hoveredStatus.item === 'home' ? 1 : hoveredStatus.hovered ? 0.5 : 1}"
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

					<div
						class="h-[1px] w-full border-t {$activeNavItem === 'home' ? 'visible' : 'invisible'}"
					/>
				</li>
				<li
					class="group inline-block py-5 px-[30px]"
					style="opacity: {hoveredStatus.item === 'work' ? 1 : hoveredStatus.hovered ? 0.5 : 1}"
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
					<div
						class="h-[1px] w-full border-t {$activeNavItem === 'work' ? 'visible' : 'invisible'}"
					/>
				</li>
				<li
					class="hovered group inline-block py-5 px-[30px]"
					style="opacity: {hoveredStatus.item === 'about' ? 1 : hoveredStatus.hovered ? 0.5 : 1}"
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
					<div
						class="h-[1px] w-full border-t {$activeNavItem === 'about' ? 'visible' : 'invisible'}"
					/>
				</li>
				<li
					class="hovered group inline-block py-5 px-[30px]"
					style="opacity: {hoveredStatus.item === 'blog' ? 1 : hoveredStatus.hovered ? 0.5 : 1}"
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
					<div
						class="h-[1px] w-full border-t {$activeNavItem === 'blog' ? 'visible' : 'invisible'}"
					/>
				</li>
				<li
					class="group my-5 ml-[30px] inline-block"
					style="opacity: {hoveredStatus.item === 'contact' ? 1 : hoveredStatus.hovered ? 0.5 : 1}"
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
					<div
						class="h-[1px] w-full border-t {$activeNavItem === 'contact' ? 'visible' : 'invisible'}"
					/>
				</li>
			</ul>
		</div>
	</nav>
</header>

<slot />

<style>
	.hovered {
		transition: opacity 0.2s;
	}
</style>
