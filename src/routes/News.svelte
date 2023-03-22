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
			<div class="flex max-h-32 items-center">
				<div class="mr-4">
					<img id="news1" src="" alt="something else" />
				</div>
				<h3 class="uppercase">Work collection</h3>
			</div>
			<div class="flex items-center justify-between gap-20">
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
			<div class="flex max-h-32 items-center">
				<div class="mr-4">
					<img id="news2" src="" alt="something" />
				</div>
				<h3 class="uppercase">Website of the year</h3>
			</div>
			<div class="flex items-center justify-between gap-20">
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
			<div class="flex max-h-32 items-center">
				<div class="mr-4">
					<img src="" alt="wow" id="news3" />
				</div>
				<h3 class="uppercase">The process of development</h3>
			</div>
			<div class="flex items-center justify-between gap-20">
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

	#news1 {
		content: url('https://picsum.photos/220/140');
	}

	#news2 {
		content: url('https://picsum.photos/220/140');
	}

	#news3 {
		content: url('https://picsum.photos/220/140');
	}
</style>
