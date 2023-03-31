<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	let currentYear = new Date().getFullYear();
</script>

<section id="contact" class="2xs:px-6 h-full w-full md:px-20">
	<div class="pb-[1.5625rem]">
		<span class="font-bgr block text-sm uppercase">/ I'd love to hear from you </span>
	</div>
	<hr class="h-[1.75rem] border-0" />
	<div class="pb-10">
		<span class="text-big-size block uppercase leading-none">Get</span>
		<span class="text-big-size block uppercase leading-none">In touch</span>
	</div>
	<div class="w-full items-start justify-between pb-28 md:flex">
		<div id="contact-left" class="2xs:pb-10 md:w-1/4 md:pb-0">
			<h3 class="font-bgr text-subheader uppercase leading-none">Let's talk</h3>
		</div>
		<div id="contact-right" class="font-bgr md:w-2/3">
			<form action="https://fabform.io/f/Cf02Z9Y" method="POST">
				<div class="mb-8 grid w-full grid-cols-2 gap-10">
					<div class="inline-block">
						<label for="name" class="text-hear">NAME</label>
						<input
							type="text"
							name="name"
							id="name"
							class="border-cod-gray-50 focus:border-b-gallery-50 text-hear inline-block w-full border-0 border-b bg-transparent focus:ring-transparent"
						/>
					</div>
					<div class="inline-block">
						<label for="email" class="text-hear">EMAIL</label>
						<input
							type="email"
							name="email"
							id="email"
							class="border-cod-gray-50 focus:border-b-gallery-50 text-hear inline-block w-full border-0 border-b bg-transparent focus:ring-transparent"
						/>
					</div>
				</div>
				<div class="w-full">
					<label for="message" class="text-hear">MESSAGE</label>
					<textarea
						name="message"
						id="message"
						cols="30"
						rows="3"
						class="border-cod-gray-50 focus:border-b-gallery-50 text-hear w-full resize-none border-0 border-b bg-transparent focus:ring-transparent"
					/>
				</div>
				<hr class="h-[1.75rem] border-0" />
				<button
					type="submit"
					class="bg-gallery-500 text-cod-gray-500 font-bgm group h-[40px] w-36 rounded-full align-middle text-[14px] uppercase"
				>
					Send mail
				</button>
			</form>
		</div>
	</div>
	<div class="items-center justify-between pb-12 md:flex md:gap-8">
		<div class="font-bgr 2xs:gap-1 group flex items-center md:justify-between md:gap-8">
			<a href="/" aria-label="Home">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2.5"
					stroke="currentColor"
					class="h-5 w-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
					/>
				</svg>
			</a>
			<div class="2xs:hidden md:block">
				<Link href="/" content="Back to top" textSize="14px" duration="200ms" displacement="20px" />
			</div>
		</div>
		<div class="font-bgr">
			<span class="text-[14px] uppercase">Miguel Garoz &#169; {currentYear}</span>
		</div>
		<div class="font-bgr">
			<span class="text-[14px] uppercase">Follow me</span>
		</div>
	</div>
</section>

<style>
	.text-big-size {
		font-size: clamp(2.125rem, 1.2354rem + 3.9538vw, 5.98rem);
	}

	.text-subheader {
		font-size: clamp(1.5rem, 1.1827rem + 1.4103vw, 2.875rem);
	}

	.text-hear {
		font-size: clamp(0.875rem, 0.7885rem + 0.3846vw, 1.25rem);
	}
</style>
