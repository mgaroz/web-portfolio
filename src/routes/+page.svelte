<script lang="ts">
	import { Work, About, News, Contact, SocialIcons, ArrowDown } from '$lib/index';
	import { animate, frame, type AnimationSequence } from 'motion';
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
	let tagline = 'Front-end developer with an adaptive approach to problem solving.';
	let m = $state({ x: 0, y: 0 });

	interface Props {
		form: ActionData;
	}

	let { form }: Props = $props();

	let activeBackColor = $derived($backColor);

	function handleMousemove(e: MouseEvent) {
		(m.x = e.clientX), (m.y = e.clientY);
	}

	$effect(() => {
		const sequence: AnimationSequence = [
			[
				nameContainer,
				{
					clipPath: [
						'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
						'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
					],
					y: [112, 0],
					opacity: [0, 1]
				},
				{ duration: 1.5 }
			],
			[
				lastNameContainer,
				{
					clipPath: [
						'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
						'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
					],
					y: [112, 0],
					opacity: [0, 1]
				},
				{ duration: 1.5, at: '-1.40' }
			],
			[
				subContainer,
				{
					clipPath: [
						'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
						'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
					],
					y: [112, 0],
					opacity: [0, 1]
				},
				{ duration: 1.5, at: '-1.5' }
			],
			[
				subContainer2,
				{
					clipPath: [
						'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
						'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
					],
					y: [112, 0],
					opacity: [0, 1]
				},
				{ duration: 1.5, at: '-1.5' }
			],
			[heroFooterLeftContainer, { x: [-208, 0] }, { duration: 1.5, at: '-1.1' }],
			[socialIconsContainer, { x: [-208, 0] }, { duration: 1, at: '-1.3' }],
			[heroFooterRightContainer, { x: [208, 0] }, { duration: 1.5, at: '-1.5' }]
		];

		const ball = $state(ballContainer);
		const pos = $state({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
		const mouse = $derived(m);
		const speed = 0.25;
		const dt = 1.25 - Math.pow(1.35 - speed, 1.75);

		function update() {
			pos.x += (mouse.x - pos.x) * dt;
			pos.y += (mouse.y - pos.y) * dt;
		}

		frame.read(update, true);
		frame.update(update, true);
		frame.render(() => {
			ball.animate(
				{
					transform: `translate(calc(${pos.x}px - 50%), calc(${pos.y}px - 50%))`
				},
				{ fill: 'forwards' }
			);
		}, true);

		animate(sequence, { delay: 0 });
	});
</script>

<svelte:window onpointermove={handleMousemove} />

<div
	class:hero--state-active={$active || $blogActiveTags}
	class:hero--state-active-work={$workActive || $blogActive}
	class="2xs:hidden pointer-events-none fixed z-40 h-10 w-10 translate-x-1/2 translate-y-1/2 rounded-full border-2 border-[#737373] transition-all duration-300 will-change-transform md:block"
	bind:this={ballContainer}
	style="--backColor:{activeBackColor}"
></div>

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
				<h1 class="heading--h1-size 2xs:pb-10 leading-none md:pb-0">
					<span class="2xs:ml-0 relative block translate-y-28 md:-ml-2" bind:this={nameContainer}
						>MIGUEL</span
					>
					<span
						class="font-bgr 2xs:hidden relative max-w-[16.25rem] translate-y-28 align-middle text-sm uppercase leading-5 md:inline-block"
						bind:this={subContainer}>{tagline}</span
					>
					<span
						class="2xs:left-0 relative inline-block translate-y-28 md:left-10"
						bind:this={lastNameContainer}>GAROZ</span
					>
				</h1>
				<span
					class="font-bgr 2xs:block 2xs:text-[14px] translate-y-28 uppercase md:hidden"
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
			<div bind:this={socialIconsContainer} class="w-full">
				<SocialIcons />
			</div>
			<div class="flex w-full justify-between">
				<div
					id="hero-footer-left"
					class="font-bgr group flex items-center justify-center gap-8 overflow-hidden"
					bind:this={heroFooterLeftContainer}
				>
					<div class="2xs:hidden md:block">
						<TextClear href="#portfolio" text="Scroll to explore" />
					</div>
					<div class="flex h-5 w-5 items-center justify-center">
						<a href="#portfolio" aria-label="Portfolio">
							<ArrowDown />
						</a>
					</div>
				</div>
				<div id="hero-footer-right" bind:this={heroFooterRightContainer}>
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
