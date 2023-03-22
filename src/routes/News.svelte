<script lang="ts">
	import Link from '$lib/components/Link.svelte';
</script>

<section id="news" class="h-full w-full px-20 pt-28 pb-28">
	<div>
		<h6 class="pb-[1.5625rem] uppercase">/ Get informed</h6>
		<hr class="h-[1.75rem] border-0" />
		<span class="text-big-size block uppercase leading-none">Read</span>
		<span class="text-big-size block uppercase leading-none">All news</span>
	</div>
	<hr class="h-[1.75rem] border-0" />
	<hr class="h-[1.75rem] border-0" />
	<div>
		<div
			class="border-cod-gray-50 flex h-[15.125rem] w-full items-center justify-between border-t border-b py-[3.125rem]"
		>
			<div class="group relative flex max-h-32 items-center">
				<div class="overflow-hidden">
					<!-- Needs GSAP to reverse animation -->
					<div
						class="mr-4 w-0 scale-125 bg-[url('https://picsum.photos/220/140')] bg-cover bg-no-repeat duration-500 group-hover:h-36 group-hover:w-[220px] group-hover:scale-100"
					/>
				</div>
				<h3 class="uppercase">Work collection</h3>
			</div>
			<div class="flex flex-shrink-0 items-center justify-between gap-20">
				<div>
					<span class="block text-[14px] uppercase">intern / projects / agency</span>
				</div>
				<div>
					<span class="block text-[14px] uppercase">march 21, 2023</span>
				</div>
			</div>
		</div>
		<div
			class="border-cod-gray-50 flex h-[15.125rem] w-full items-center justify-between border-b py-[3.125rem]"
		>
			<div class="group relative flex max-h-32 items-center">
				<div class="overflow-hidden">
					<!-- Needs GSAP to reverse animation -->
					<div
						class="mr-4 w-0 scale-125 bg-[url('https://picsum.photos/220/140')] bg-cover bg-no-repeat transition-all duration-500 group-hover:h-36 group-hover:w-[220px] group-hover:scale-100 group-hover:transition-all group-hover:duration-500"
					/>
				</div>
				<h3 class="uppercase">Website of the year</h3>
			</div>
			<div class="flex flex-shrink-0 items-center justify-between gap-20">
				<div>
					<span class="block text-[14px] uppercase">intern / projects / agency</span>
				</div>
				<div>
					<span class="block text-[14px] uppercase">march 21, 2023</span>
				</div>
			</div>
		</div>
		<div
			class="border-cod-gray-50 flex h-[15.125rem] w-full items-center justify-between border-b py-[3.125rem]"
		>
			<div class="group relative flex max-h-32 items-center">
				<div class="overflow-hidden">
					<!-- Needs GSAP to reverse animation -->
					<div
						class="reverseit mr-4 w-0 scale-125 bg-[url('https://picsum.photos/220/140')] bg-cover bg-no-repeat duration-500 group-hover:h-36 group-hover:w-[220px] group-hover:scale-100"
					/>
				</div>
				<h3 class="uppercase">The process</h3>
			</div>
			<div class="flex flex-shrink-0 items-center justify-between gap-20">
				<div>
					<span class="block text-[14px] uppercase">intern / projects / agency</span>
				</div>
				<div>
					<span class="block text-[14px] uppercase">march 21, 2023</span>
				</div>
			</div>
		</div>
	</div>
	<hr class="h-[1.75rem] border-0" />
	<hr class="h-[1.75rem] border-0" />
	<div class="w-2/5">
		<h5 class="uppercase">
			We help businesses to innovate and remain relevant to their customers only by developing
			digital creative products.
		</h5>
		<hr class="h-[1.75rem] border-0" />
		<button
			class="bg-gallery-500 text-cod-gray-500 group h-[40px] w-36 rounded-full align-middle uppercase"
		>
			<Link href="#blog" content="Read blog" textSize="14px" duration="200ms" displacement="" />
		</button>
	</div>
</section>

<style>
	.text-big-size {
		font-size: clamp(2.125rem, 1.2354rem + 3.9538vw, 5.98rem);
	}

	.reverseit {
		transform: scale(1.25), width(0);
		transform-origin: center;
		transition: all 0.5s ease-in-out;
	}
</style>
