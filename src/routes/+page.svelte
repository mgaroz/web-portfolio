<script lang="ts">
	import Work from './Work.svelte';
	import About from './About.svelte';
	import News from './News.svelte';
	import Contact from './Contact.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import { active, workActive, backColor, blogActive, blogActiveTags } from '$lib/store';
	import Link from '$lib/components/Link.svelte';

	let ballContainer: HTMLDivElement;
	let m = { x: 0, y: 0 };
	let tagline = 'Front-end developer with an adaptive approach to problem solving.';

	export let data;

	$: activeBackColor = $backColor;

	let tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

	function handleMousemove(e: MouseEvent) {
		(m.x = e.clientX), (m.y = e.clientY);
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
<section class="2xs:px-6 md:h-[calc(70vh+128px)] md:px-20 md:pt-32" id="home">
	<div
		id="hero"
		class="relative z-20 h-full w-full flex-col items-center justify-around overflow-hidden md:flex"
	>
		<div class="z-2 relative inset-0 mx-auto block w-full">
			<div class="2xs:pt-40 relative mx-auto w-full pb-40 text-left md:pt-10">
				<h1 class="text-hero-size 2xs:pb-10 leading-none md:pb-0">
					<span class="2xs:translate-x-0 load-animation-title relative block md:-ml-2">MIGUEL</span>
					<span
						class="font-bgr 2xs:hidden tagline-animation relative max-w-[16.25rem] align-middle text-sm uppercase leading-5 opacity-0 md:inline-block"
						>{tagline}</span
					>
					<span class="2xs:left-0 load-animation-subtitle relative inline-block md:left-10"
						>GAROZ</span
					>
				</h1>
				<span
					class="font-bgr 2xs:block 2xs:text-[14px] tagline-animation uppercase opacity-0 md:hidden"
				>
					{tagline}
				</span>
			</div>
		</div>
		<div
			class="2xs:pb-10 flex w-full flex-col items-center justify-between uppercase md:pb-0"
			id="hero-footer"
		>
			<div class="2xs:pb-4 flex w-full items-center gap-4 md:pb-8">
				<a href="https://github.com/mgaroz" target="_blank" aria-label="Github">
					<svg
						class="h-7 w-7 text-white"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="1"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<path
							d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
						/></svg
					>
				</a>
				<a href="https://www.linkedin.com/in/mgaroz/" target="_blank" aria-label="LinkedIn">
					<svg
						class="h-7 w-7 text-white"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path
							d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
						/> <rect x="2" y="9" width="4" height="12" /> <circle cx="4" cy="4" r="2" /></svg
					>
				</a>
				<a href="https://twitter.com/mgaroz_pro" target="_blank" aria-label="Twitter">
					<svg
						class="h-7 w-7 text-white"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="1"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<path
							d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z"
						/></svg
					>
				</a>
			</div>
			<div class="flex w-full justify-between">
				<div
					id="hero-footer-left"
					class="font-bgr group flex items-center justify-center gap-8 overflow-hidden"
				>
					<div class="2xs:hidden md:block">
						<Link
							href="#portfolio"
							content="Scroll to explore"
							textSize="14px"
							duration="200ms"
							displacement="20px"
						/>
					</div>
					<div class="flex h-5 w-5 items-center justify-center">
						<a href="#portfolio" aria-label="Portfolio">
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
						</a>
					</div>
				</div>
				<div id="hero-footer-right">
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

	.load-animation-title {
		animation: slideUp 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
	}

	.load-animation-subtitle {
		animation: slideUp 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.1s forwards;
	}

	.tagline-animation {
		animation: slideUp2 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s forwards;
	}
	@keyframes slideUp {
		0% {
			transform: translateY(100%);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes slideUp2 {
		0% {
			clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
			transform: translateY(100%);
			opacity: 0;
		}
		100% {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
