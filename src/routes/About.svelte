<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Link from '$lib/components/Link.svelte';
	import { onMount } from 'svelte';

	let headerContainer: HTMLHeadElement;
	let sectionContainer: HTMLElement;
	let tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		let animText = tl
			.from(headerContainer, {
				duration: 2,
				// clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
				opacity: 0.5
			})
			.to(
				headerContainer,
				{
					duration: 2,
					// clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
					opacity: 1
				},
				'-=2'
			);

		ScrollTrigger.create({
			trigger: sectionContainer,
			start: '15% 90%',
			end: 'bottom 80%',
			toggleActions: 'restart reverse restart reverse',
			animation: animText
		});
	});
</script>

<section id="about" class="h-full w-full px-20 pb-28" bind:this={sectionContainer}>
	<div id="about-me" class="md:pb-14 2xl:pb-20">
		<h1 class="uppercase leading-none" bind:this={headerContainer}>
			Helping people to innovate and remain relevant by developing highly performant websites
		</h1>
	</div>
	<div id="more-about-me" class="flex items-center justify-end pt-10 pb-20">
		<div id="more-about-me-section-1" class="w-1/2">
			<h5 class="font-bgr mb-[1.5625rem] uppercase">About me</h5>
			<p class="font-bgr mb-[1.5625rem] leading-7">
				Hello there, my name is Miguel Garoz and I'm a front-end developer. I have a passion for
				creating responsive websites that provide the best user experience possible. I am constantly
				learning and expanding my knowledge in this ever-evolving field to stay up-to-date with the
				latest technologies and techniques.
			</p>
			<!-- <hr class="h-[1.75rem] border-0" /> -->
			<!-- <h5 class="font-bgr mb-[1.5625rem] uppercase">My goal</h5> -->
			<p class="font-bgr leading-7">
				When I'm not coding, you can find me exploring new technologies and trends in the field,
				reading up on the latest industry news, and working on personal projects to continue
				improving my skills. I'm excited to see where my journey as a front-end developer will take
				me next!
			</p>
		</div>
	</div>
	<div id="about-footer" class="flex justify-start gap-8 2xl:mt-16">
		<div class="font-bgr group">
			<Link
				href="#about"
				content="More about me"
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
</section>
