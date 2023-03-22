<script lang="ts">
	import Link from '$lib/components/Link.svelte';
</script>

<section id="about" class="h-full w-full px-20 pt-28">
	<div id="about-me" class="pb-20">
		<h1 class="uppercase leading-none">
			Helping people to innovate and remain highly relevant by developing edge websites
		</h1>
	</div>
	<div id="more-about-me" class="flex items-center justify-end pt-10 pb-20">
		<div id="more-about-me-section-1" class="w-1/2">
			<h5 class="mb-[1.5625rem] uppercase">About me</h5>
			<p class="font-bgr mb-[1.5625rem] leading-7">
				There are many variations of passages of Lorem Ipsum available, but the majority have
				suffered alteration in some form, by injected humour, or randomised words which don't look
				even slightly believable. If you are going to use a passage of Lorem Ipsum.
			</p>
			<hr class="h-[1.75rem] border-0" />
			<h5 class="mb-[1.5625rem] uppercase">My goal</h5>
			<p class="font-bgr leading-7">
				You need to be sure there isn't anything embarrassing hidden in the middle of text. All the
				Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
				this the first true generator on the Internet. It uses a dictionary with Latin words.
			</p>
		</div>
	</div>
	<div id="about-footer" class="mb-[1.5625rem] flex justify-start gap-8">
		<div class="group">
			<Link href="#about" content="Scroll to explore" textSize="14px" duration={'200ms'} />
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
