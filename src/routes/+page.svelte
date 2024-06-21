<script lang="ts">
	import { Work, About, News, Contact, SocialIcons, ArrowDown } from '$lib/index';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import { active } from '$lib/store';
	import { workActive } from '$lib/store';
	import { backColor } from '$lib/store';
	import { blogActive } from '$lib/store';
	import { blogActiveTags } from '$lib/store';
	import TextClear from '$lib/components/TextClear.svelte';
	import type { ActionData } from './$types';
	// import Card from '$lib/components/Card.svelte';

	let nameContainer: HTMLSpanElement;
	let lastNameContainer: HTMLSpanElement;
	let subContainer: HTMLSpanElement;
	let subContainer2: HTMLSpanElement;
	let ballContainer: HTMLDivElement;
	let socialIconsContainer: HTMLDivElement;
	let heroFooterLeftContainer: HTMLDivElement;
	let heroFooterRightContainer: HTMLDivElement;
	let m = { x: 0, y: 0 };
	let tagline = 'Front-end developer with an adaptive approach to problem solving.';

	export let form: ActionData;

	$: activeBackColor = $backColor;

	let tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

	function handleMousemove(e: MouseEvent) {
		(m.x = e.clientX), (m.y = e.clientY);
	}

	function animateHero() {
		tl.to(nameContainer, {
			duration: 1.5,
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			opacity: 1,
			y: 0
		})
			.to(
				lastNameContainer,
				{
					duration: 1.5,
					clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
					opacity: 1,
					y: 0
				},
				'-=1.40'
			)
			.from(
				subContainer,
				{
					duration: 1.5,
					clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
				},
				'-=1.40'
			)
			.to(
				subContainer,
				{
					duration: 1.5,
					opacity: 1,
					y: 0,
					clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
				},
				'-=1.5'
			)
			.from(
				subContainer2,
				{
					clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
				},
				'-=1.5'
			)
			.to(
				subContainer2,
				{
					duration: 1.5,
					opacity: 1,
					y: 0,
					clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
				},
				'-=1.5'
			)
			.to(
				socialIconsContainer,
				{
					duration: 1.5,
					x: 0
				},
				'-=1.5'
			)
			.to(
				heroFooterLeftContainer,
				{
					duration: 1.5,
					x: 0
				},
				'-=1.1'
			)
			.to(
				heroFooterRightContainer,
				{
					duration: 1.5,
					x: 0
				},
				'-=1.5'
			);
	}

	onMount(() => {
		gsap.set(ballContainer, { xPercent: -50, yPercent: -50 });
		const ball = ballContainer;
		const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
		const mouse = m;
		const speed = 0.25;
		const xSet = gsap.quickSetter(ball, 'x', 'px');
		const ySet = gsap.quickSetter(ball, 'y', 'px');
		gsap.ticker.add(() => {
			const dt = 1.25 - Math.pow(1.35 - speed, gsap.ticker.deltaRatio());
			pos.x += (mouse.x - pos.x) * dt;
			pos.y += (mouse.y - pos.y) * dt;
			xSet(pos.x);
			ySet(pos.y);
		});
		animateHero();
	});
</script>

<svelte:window on:mousemove={handleMousemove} />

<div
	class:active={$active || $blogActiveTags}
	class:active-work={$workActive || $blogActive}
	class="circle 2xs:hidden z-40 md:block"
	bind:this={ballContainer}
	style="--backColor:{activeBackColor}"
/>

<section
	class="2xs:px-6 2xs:h-[calc(95vh+128px)] md:h-[calc(90vh+128px)] md:px-20 md:pt-32"
	id="home"
>
	<div
		id="hero"
		class="2xs:flex relative z-20 h-full w-full flex-col items-center justify-around overflow-hidden transition-colors duration-500"
	>
		<div class="z-2 relative inset-0 mx-auto block w-full">
			<div class="2xs:pt-40 relative mx-auto w-full pb-40 text-left md:pt-10">
				<h1 class="text-hero-size 2xs:pb-10 leading-none md:pb-0">
					<span
						class="2xs:ml-0 name-container relative block translate-y-28 opacity-0 md:-ml-2"
						bind:this={nameContainer}>MIGUEL</span
					>
					<span
						class="font-bgr 2xs:hidden relative max-w-[16.25rem] translate-y-28 align-middle text-sm uppercase leading-5 opacity-0 md:inline-block"
						bind:this={subContainer}>{tagline}</span
					>
					<span
						class="2xs:left-0 name-container relative inline-block translate-y-28 opacity-0 md:left-10"
						bind:this={lastNameContainer}>GAROZ</span
					>
				</h1>
				<span
					class="font-bgr 2xs:block 2xs:text-[14px] translate-y-28 uppercase opacity-0 md:hidden"
					bind:this={subContainer2}
				>
					{tagline}
				</span>
			</div>
		</div>
		<div
			class="2xs:pb-10 flex w-full flex-col items-center justify-between uppercase md:pb-0"
			id="hero-footer"
		>
			<SocialIcons bind:socialIconsContainer />
			<div class="flex w-full justify-between">
				<div
					id="hero-footer-left"
					class="font-bgr group flex -translate-x-52 items-center justify-center gap-8 overflow-hidden"
					bind:this={heroFooterLeftContainer}
				>
					<div class="2xs:hidden md:block">
						<TextClear href="#portfolio" text="Scroll to explore" />
					</div>
					<div class="flex h-5 w-5 items-center justify-center">
						<a href="#portfolio" aria-label="Portfolio">
							<svelte:component this={ArrowDown} />
						</a>
					</div>
				</div>
				<div id="hero-footer-right" bind:this={heroFooterRightContainer} class="translate-x-52">
					<span class="font-bgr h-full text-sm">Selected works (04)</span>
				</div>
			</div>
		</div>
	</div>
</section>

<Work />
<div class="2xs:px-6 md:px-20">
	<hr class="border-cod-gray-50 pb-28" />
</div>
<!-- <div class="min-h-[75vh] px-20 pb-28 pt-28">
	<Card />
</div> -->
<About />
<News />
<Contact {form} />

<style>
	.text-hero-size {
		font-size: clamp(3.15rem, 1.3846rem + 7.8462vw, 10.8rem);
	}

	.name-container {
		clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
	}

	.circle {
		width: 40px;
		height: 40px;
		position: fixed;
		top: 0;
		left: 0;
		border: 2px solid #737373;
		border-radius: 50%;
		pointer-events: none;
		transition:
			background-color 0.3s,
			width 0.3s,
			height 0.3s;
	}

	.active {
		width: 120px;
		height: 120px;
		background-color: #73737340;
		border: none;
	}

	.active-work {
		width: 100px;
		height: 100px;
		background-color: var(--backColor);
		border: none;
		background-image: url('$lib/img/arrow-up-right.svg');
		background-size: 50%;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>
