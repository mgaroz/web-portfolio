<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import { blogActive, backColor } from '$lib/store';
	import dayjs from 'dayjs';

	export let blogData: any;

	function setStatus(status: boolean) {
		blogActive.set(status);
		backColor.set('#000');
	}
</script>

<section id="blog" class="h-full w-full px-20 pt-28">
	<div>
		<h6 class="font-bgr pb-[1.5625rem] uppercase">/ Get informed</h6>
		<hr class="h-[1.75rem] border-0" />
		<span class="text-big-size block uppercase leading-none">Blog</span>
		<span class="text-big-size block uppercase leading-none">Latest entries</span>
	</div>
	<hr class="h-[1.75rem] border-0" />
	<hr class="h-[1.75rem] border-0" />
	<div>
		{#each blogData as post}
			<div
				class="border-cod-gray-50 group flex h-[15.125rem] w-full items-center justify-between overflow-hidden border-b border-t py-[3.125rem]"
			>
				<div class="relative flex max-h-36 max-w-fit cursor-pointer items-center">
					<div class="relative overflow-hidden">
						<div
							style="background-image: url('{post.cover_image}')"
							class="reverseit h-36 w-0 scale-125 bg-cover bg-center bg-no-repeat duration-500 group-hover:mr-10 group-hover:w-[220px] group-hover:scale-100"
						/>
					</div>
					<h3
						class="uppercase"
						on:mouseenter={() => setStatus(true)}
						on:mouseleave={() => setStatus(false)}
					>
						<a href={post.url} target="_blank">{post.title}</a>
					</h3>
				</div>
				<div class="flex flex-shrink-0 items-center justify-between gap-20">
					<div>
						<span class="font-bgr block text-[14px] uppercase"
							>{post.tag_list[0]} / {post.tag_list[1]} / {post.tag_list[2]}</span
						>
					</div>
					<div>
						<span class="font-bgr block text-[14px] uppercase"
							>{dayjs(post.created_at.substring(0, 10)).format('MMMM DD, YYYY')}</span
						>
					</div>
				</div>
			</div>
		{/each}
		<div
			class="border-cod-gray-50 group flex h-[15.125rem] w-full items-center justify-between border-b py-[3.125rem]"
		>
			<div class="relative flex max-h-36 cursor-pointer items-center">
				<div class="relative overflow-hidden transition-all">
					<div
						class="reverseit h-36 w-0 scale-125 bg-[url('https://picsum.photos/221/140')] bg-cover bg-center bg-no-repeat duration-500 group-hover:mr-10 group-hover:w-[220px] group-hover:scale-100"
					/>
				</div>
				<h3
					class="uppercase"
					on:mouseenter={() => setStatus(true)}
					on:mouseleave={() => setStatus(false)}
				>
					Website of the year
				</h3>
			</div>
			<div class="flex flex-shrink-0 items-center justify-between gap-20">
				<div>
					<span class="font-bgr block text-[14px] uppercase">intern / projects / agency</span>
				</div>
				<div>
					<span class="font-bgr block text-[14px] uppercase">march 21, 2023</span>
				</div>
			</div>
		</div>
		<div
			class="border-cod-gray-50 group flex h-[15.125rem] w-full items-center justify-between border-b py-[3.125rem]"
		>
			<div class="relative flex max-h-36 cursor-pointer items-center">
				<div class="overflow-hidden">
					<div
						class="reverseit h-36 w-0 scale-125 bg-[url('https://picsum.photos/222/140')] bg-cover bg-center bg-no-repeat duration-500 group-hover:mr-10 group-hover:w-[220px] group-hover:scale-100"
					/>
				</div>
				<h3
					class="uppercase"
					on:mouseenter={() => setStatus(true)}
					on:mouseleave={() => setStatus(false)}
				>
					The process
				</h3>
			</div>
			<div class="flex flex-shrink-0 items-center justify-between gap-20">
				<div>
					<span class="font-bgr block text-[14px] uppercase">intern / projects / agency</span>
				</div>
				<div>
					<span class="font-bgr block text-[14px] uppercase">march 21, 2023</span>
				</div>
			</div>
		</div>
	</div>
	<hr class="h-[1.75rem] border-0" />
	<hr class="h-[1.75rem] border-0" />
	<div class="w-2/5">
		<h5 class="font-bgr uppercase">
			We help businesses to innovate and remain relevant to their customers only by developing
			digital creative products.
		</h5>
		<hr class="h-[1.75rem] border-0" />
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
