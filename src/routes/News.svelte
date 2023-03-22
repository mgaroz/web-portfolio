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
			AAAA
		</div>
		<div
			class="border-cod-gray-50 flex h-[15.125rem] w-full items-center justify-between border-b py-[3.125rem]"
		>
			BBBB
		</div>
		<div
			class="border-cod-gray-50 flex h-[15.125rem] w-full items-center justify-between border-b py-[3.125rem]"
		>
			CCCC
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
</style>
