<script lang="ts">
	let currentYear = new Date().getFullYear();
</script>

<section id="contact" class="h-full w-full px-20 pt-28">
	<div class="pb-10">
		<span class="text-big-size block uppercase leading-none">Get</span>
		<span class="text-big-size block uppercase leading-none">In touch</span>
	</div>
	<div class="pb-20">
		<span class="block text-[1.25rem] uppercase"> I'd love to hear from you </span>
	</div>
	<div class="flex w-full items-start justify-between pb-28">
		<div id="contact-left" class="w-1/4">
			<h3 class="uppercase leading-none">Let's talk</h3>
		</div>
		<div id="contact-right" class="w-2/3">
			<form action="/contact">
				<div class="mb-8 grid w-full grid-cols-2 gap-10">
					<div class="inline-block">
						<label for="name" class="text-[20px]">NAME</label>
						<input
							type="text"
							name="name"
							id="name"
							class="inline-block w-full border-0 border-b bg-transparent text-[20px]"
						/>
					</div>
					<div class="inline-block">
						<label for="email" class="text-[20px]">EMAIL</label>
						<input
							type="email"
							name="email"
							id="email"
							class="inline-block w-full border-0 border-b bg-transparent text-[20px] outline-transparent"
						/>
					</div>
				</div>
				<div class="w-full">
					<label for="message" class="text-[20px]">MESSAGE</label>
					<textarea
						name="message"
						id="message"
						cols="30"
						rows="10"
						class="w-full resize-none border-0 border-b bg-transparent text-[20px]"
					/>
				</div>
				<hr class="h-[1.75rem] border-0" />
				<button
					class="bg-gallery-500 text-cod-gray-500 group h-[40px] w-36 rounded-full align-middle text-[14px] uppercase"
				>
					Send mail
				</button>
			</form>
		</div>
	</div>
	<div class="flex items-center justify-between gap-8 pb-12">
		<div class="flex items-center justify-between gap-8">
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
			<span class="block text-[14px] uppercase">Back to top</span>
		</div>
		<div>
			<span class="text-[14px] uppercase">Miguel Garoz &#169; {currentYear}</span>
		</div>
		<div>
			<span class="text-[14px] uppercase">Follow me</span>
		</div>
	</div>
</section>

<style>
	.text-big-size {
		font-size: clamp(2.125rem, 1.2354rem + 3.9538vw, 5.98rem);
	}
</style>
