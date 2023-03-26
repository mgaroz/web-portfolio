<script lang="ts">
	import '../app.css';
	import Link from '$lib/components/Link.svelte';
	import { active, activeNavItem } from '$lib/store';

	function handleEnter() {
		active.set(true);
	}
</script>

<header>
	<nav class="bg-cod-gray-500 fixed z-30 flex h-32 w-full items-center justify-between py-5 px-20">
		<div class="logo">LOGO</div>
		<div class="menu">
			<ul
				class="font-bgr flex list-none"
				on:mouseenter={handleEnter}
				on:mouseleave={() => active.set(false)}
			>
				<li class="group inline-block py-5 px-[30px]">
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
				<li class="group inline-block py-5 px-[30px]">
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
				<li class="group inline-block py-5 px-[30px]">
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
				<li class="group inline-block py-5 px-[30px]">
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
				<li class="group my-5 ml-[30px] inline-block">
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
