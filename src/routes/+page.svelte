<script lang="ts">
	import Work from './Work.svelte';
	import About from './About.svelte';
	import News from './News.svelte';
	import Contact from './Contact.svelte';
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let nameContainer: HTMLSpanElement;
	let lastNameContainer: HTMLSpanElement;
	let subContainer: HTMLSpanElement;

	let tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

	function animateHero() {
		tl.from(nameContainer, {
			duration: 1.5,
			y: 100,
			opacity: 0
		})
			.from(
				lastNameContainer,
				{
					duration: 1.5,
					y: 100,
					opacity: 0
				},
				'-=1.40'
			)
			.from(
				subContainer,
				{
					duration: 1.5,
					y: 100,
					opacity: 0,
					clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
				},
				'-=1.40'
			)
			.to(
				subContainer,
				{
					duration: 1.5,
					clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
				},
				'-=1.40'
			);
	}

	onMount(() => {
		animateHero();
	});
</script>

<section class="h-[calc(100vh+110px)] px-20" id="home">
	<div
		id="hero"
		class="relative z-20 flex h-full w-full flex-col items-center justify-around overflow-hidden"
	>
		<div class="z-2 relative inset-0 mx-auto block w-full">
			<div class="relative mx-auto w-full pt-10 pb-40 text-left">
				<h1 class="text-hero-size leading-none">
					<span class="relative block -translate-x-2" bind:this={nameContainer}>MIGUEL</span>
					<span
						class="relative inline-block max-w-[16.25rem] align-middle text-sm uppercase leading-5"
						bind:this={subContainer}
						>Front-end developer with an adaptive approach to problem solving.</span
					>
					<span class="relative left-10 inline-block" bind:this={lastNameContainer}>GAROZ</span>
				</h1>
			</div>
		</div>
		<div class="flex w-full items-center justify-between uppercase" id="hero-footer">
			<div id="hero-footer-left" class="flex items-center justify-center gap-8 overflow-hidden">
				<span class="slide-up inline-block cursor-pointer text-sm">Scroll to explore</span>
				<div class="flex h-5 w-5 items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width={2.5}
						stroke="currentColor"
						class="h-5 w-5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
						/>
					</svg>
				</div>
			</div>
			<div id="hero-footer-right">
				<span class="text-sm">Selected case studies (04)</span>
			</div>
		</div>
	</div>
</section>
<Work />
<div class="px-20">
	<hr />
</div>
<About />
<News />
<Contact />

<style>
	.slide-up::before {
		position: absolute;
		width: auto;
		top: 100%;
		left: 0;
		content: 'Scroll to explore';
	}

	.slide-up:hover {
		top: -20px;
	}

	.slide-up {
		position: relative;
		top: 0px;
		width: auto;
		transition: top 0.2s;
	}

	.slide-up::after {
		clear: both;
		content: ' ';
		display: block;
		height: 0;
		visibility: hidden;
	}

	.text-hero-size {
		font-size: clamp(3.15rem, 1.3846rem + 7.8462vw, 10.8rem);
	}
</style>
