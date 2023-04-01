<script lang="ts">
	import Link from '$lib/components/Link.svelte';

	let observed = false;

	function actionWhenIntersecting(e: HTMLElement) {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				observed = true;
				observer.unobserve(e);
				observer.disconnect();
			}
		});
		observer.observe(e);
	}
</script>

<section id="about" class="2xs:px-6 2xs:pb-20 h-full w-full overflow-hidden md:px-20 md:pb-28">
	<div id="about-me" class="md:pb-14 2xl:pb-20">
		<h2
			class="responsive-font uppercase leading-none transition-opacity duration-[1500ms] {observed
				? 'opacity-100'
				: 'opacity-0'}"
			use:actionWhenIntersecting
		>
			Helping people to innovate and remain relevant by developing highly performant websites
		</h2>
	</div>
	<div id="more-about-me" class="2xs:pb-10 flex items-center justify-end pt-10 md:pb-20">
		<div
			id="more-about-me-section-1"
			class="2xs:w-full transition-all duration-[1500ms] md:w-1/2 {observed
				? 'translate-x-0'
				: 'translate-x-[800px]'}"
			use:actionWhenIntersecting
		>
			<p class="md:font-bgr responsive-title 2xs:font-bgm 2xs:font-normal mb-[1.5625rem] uppercase">
				About me
			</p>
			<p class="font-bgr mb-[1.5625rem] leading-7">
				Hello there, my name is Miguel Garoz and I'm a front-end developer. I have a passion for
				creating responsive websites that provide the best user experience possible. I am constantly
				learning and expanding my knowledge in this ever-evolving field to stay up-to-date with the
				latest technologies and techniques.
			</p>
			<p class="font-bgr leading-7">
				When I'm not coding, you can find me exploring new technologies and trends in the field,
				reading up on the latest industry news, and working on personal projects to continue
				improving my skills. I'm excited to see where my journey as a front-end developer will take
				me next!
			</p>
		</div>
	</div>
	<div id="about-footer" class="flex justify-start gap-8 2xl:mt-16">
		<div class="font-bgr 2xs:hidden group md:block">
			<Link href="#blog" content="Blog" textSize="14px" duration="200ms" displacement="20px" />
		</div>
		<div class="flex h-5 w-5 items-center justify-center">
			<a href="#blog" aria-label="Blog">
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
</section>

<style>
	.responsive-font {
		font-size: clamp(2.125rem, 1.2354rem + 3.9538vw, 5.98rem);
	}

	.responsive-title {
		font-size: clamp(1rem, 0.9423rem + 0.2564vw, 1.25rem);
	}
</style>
