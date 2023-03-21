<section class="px-20 h-[calc(100vh-128px)]">
	<div
		id="hero"
		class="w-full relative z-20 overflow-hidden flex flex-col items-center justify-around h-full"
	>
		<div class="relative w-full inset-0 block mx-auto z-2">
			<div class="pt-10 pb-40 w-full mx-auto relative text-left">
				<h1 class="text-hero-size leading-none">
					<span class="block relative">MIGUEL</span>
					<span class="inline-block relative left-96">GAROZ</span>
				</h1>
			</div>
			<div class="absolute bottom-0 left-0 max-w-[16.25rem]" id="herosub-wrapper">
				<h5 class="translate-y-[calc(-23vh+50%)] translate-x-2 uppercase leading-5">
					<span class="text-sm relative block"
						>Front-end developer with an adaptive approach to problem solving.</span
					>
				</h5>
			</div>
		</div>
		<div class="uppercase flex items-center justify-between w-full" id="hero-footer">
			<div id="hero-footer-left" class="overflow-hidden">
				<span class="inline-block text-sm slide-up cursor-pointer">Scroll to explore</span>
			</div>
			<div id="hero-footer-right">
				<span class="text-sm">Selected case studies (04)</span>
			</div>
		</div>
	</div>
</section>

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
