<script lang="ts">
	import Work from './Work.svelte';
	import About from './About.svelte';
	import News from './News.svelte';
	import Contact from './Contact.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import { active, workActive, backColor, blogActive } from '$lib/store';
	import Link from '$lib/components/Link.svelte';

	let nameContainer: HTMLSpanElement;
	let lastNameContainer: HTMLSpanElement;
	let subContainer: HTMLSpanElement;
	let ballContainer: HTMLDivElement;
	let m = { x: 0, y: 0 };

	export let data;

	$: activeBackColor = $backColor;

	let tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

	function handleMousemove(e: MouseEvent) {
		(m.x = e.clientX), (m.y = e.clientY);
	}

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
	class:active={$active}
	class:active-work={$workActive || $blogActive}
	class="circle 2xs:hidden z-40 md:block"
	bind:this={ballContainer}
	style="--backColor:{activeBackColor}"
/>
<section class="2xs:px-6 md:h-[calc(70vh+128px)] md:px-20 md:pt-32" id="home">
	<div
		id="hero"
		class="relative z-20 h-full w-full flex-col items-center justify-around overflow-hidden md:flex"
	>
		<div class="z-2 relative inset-0 mx-auto block w-full">
			<div class="2xs:pt-40 relative mx-auto w-full pb-40 text-left md:pt-10">
				<h1 class="text-hero-size 2xs:pb-10 leading-none md:pb-0">
					<span class="relative block md:-translate-x-2" bind:this={nameContainer}>MIGUEL</span>
					<span
						class="font-bgr 2xs:hidden relative max-w-[16.25rem] align-middle text-sm uppercase leading-5 md:inline-block"
						bind:this={subContainer}
						>Front-end developer with an adaptive approach to problem solving.</span
					>
					<span class="2xs:left-0 relative inline-block md:left-10" bind:this={lastNameContainer}
						>GAROZ</span
					>
				</h1>
				<span class="font-bgr 2xs:block 2xs:text-[14px] uppercase md:hidden">
					Front-end developer with an adaptive approach to problem solving.
				</span>
			</div>
		</div>
		<div
			class="2xs:pb-10 flex w-full items-center justify-between uppercase md:pb-0"
			id="hero-footer"
		>
			<div
				id="hero-footer-left"
				class="font-bgr group flex items-center justify-center gap-8 overflow-hidden"
			>
				<div class="2xs:hidden md:block">
					<Link
						href="#work"
						content="Scroll to explore"
						textSize="14px"
						duration="200ms"
						displacement="20px"
					/>
				</div>
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
				<span class="font-bgr text-sm">Selected works (04)</span>
			</div>
		</div>
	</div>
</section>
<Work />
<div class="2xs:px-6 md:px-20">
	<hr class="border-cod-gray-50 pb-28" />
</div>
<About />
{#await data then res}
	<News blogData={res.response} />
{/await}
<Contact />

<style>
	.text-hero-size {
		font-size: clamp(3.15rem, 1.3846rem + 7.8462vw, 10.8rem);
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
		transition: background-color 0.3s, width 0.3s, height 0.3s;
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
