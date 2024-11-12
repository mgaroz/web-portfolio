<script lang="ts">
	import { animate, inView } from 'motion';
	import { blogActive } from '$lib/store';
	import { backColor } from '$lib/store';
	import { active } from '$lib/store';
	import { blogActiveTags } from '$lib/store';
	import dayjs from 'dayjs';
	import { onMount } from 'svelte';
	let sectionContainer: HTMLDivElement;

	let myBlogData: any[] = $state([]);

	function setStatus(status: boolean) {
		active.set(false);
		blogActive.set(status);
		backColor.set('#000');
	}

	function setTrailerActive(status: boolean) {
		blogActive.set(false);
		blogActiveTags.set(status);
	}

	onMount(async () => {
		inView(sectionContainer, () => {
			const controls = animate(sectionContainer, { opacity: [0, 1], y: [100, 0] }, { duration: 1 });
			return () => controls.stop();
		});

		const res = await fetch('https://dev.to/api/articles/latest?username=mgaroz&per_page=3');
		myBlogData = await res.json();
	});
</script>

<section id="blog" class="2xs:px-6 h-full w-full pb-28 transition-colors duration-500 md:px-20">
	<div bind:this={sectionContainer}>
		<div>
			<p class="font-bgr pb-[1.5625rem] text-sm uppercase">/ Stay informed</p>
			<hr class="h-[1.75rem] border-0" />
			<span class="text-big-size block uppercase leading-none">Blog</span>
			<span class="text-big-size block uppercase leading-none">Latest entries</span>
		</div>
		<hr class="h-[1.75rem] border-0" />
		<hr class="h-[1.75rem] border-0" />
		<div>
			{#each myBlogData as { cover_image, url, title, tag_list, created_at }}
				<div
					class="border-cod-gray-50 group w-full items-center justify-between overflow-hidden border-b py-[3.125rem] first:border-t md:flex md:h-[15.125rem]"
				>
					<div class="relative max-h-36 max-w-fit cursor-pointer items-center md:flex">
						<div class="relative overflow-hidden">
							<div
								style="background-image: url('{cover_image}')"
								class="reverseit 2xs:hidden h-36 w-0 scale-125 bg-cover bg-center bg-no-repeat duration-500 group-hover:mr-10 group-hover:w-[220px] group-hover:scale-100 md:block"
							></div>
						</div>
						<h3
							class="text-titles 2xs:flex 2xs:h-20 2xs:pb-10 2xs:items-center uppercase md:block md:h-auto md:pb-0"
							onmouseenter={() => setStatus(true)}
							onmouseleave={() => setStatus(false)}
						>
							<a href={url} target="_blank">{title}</a>
						</h3>
					</div>
					<div class="flex-shrink-0 items-center justify-between md:flex md:h-16 md:gap-20">
						<!-- svelte-ignore a11y_no_static_element_interactions -->
						<div
							class="items-center justify-center md:flex md:h-16"
							onmouseenter={() => setTrailerActive(true)}
							onmouseleave={() => setTrailerActive(false)}
						>
							<span class="font-bgr 2xs:leading-loose block text-[14px] uppercase md:leading-normal"
								>{tag_list[0]} / {tag_list[1]} / {tag_list[2]}</span
							>
						</div>
						<!-- svelte-ignore a11y_no_static_element_interactions -->
						<div
							class="items-center justify-center md:flex md:h-16"
							onmouseenter={() => setTrailerActive(true)}
							onmouseleave={() => setTrailerActive(false)}
						>
							<span class="font-bgr block text-[14px] uppercase"
								>{dayjs(created_at.substring(0, 10)).format('MMMM DD, YYYY')}</span
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<hr class="h-[1.75rem] border-0" />
		<hr class="h-[1.75rem] border-0" />
		<div class="md:w-2/5">
			<p class="font-bgr text-xl uppercase">
				Create a powerful online presence, engage with your audience, and grow your business.
			</p>
			<hr class="h-[1.75rem] border-0" />
			<hr class="h-[1.75rem] border-0" />
			<div
				class="dark:bg-gallery-500 dark:text-cod-gray-500 bg-cod-gray-500 text-gallery-500 group flex h-[40px] w-36 items-center justify-center rounded-full align-middle uppercase transition-all duration-300 hover:scale-105"
			>
				<a href="https://dev.to/mgaroz" class="text-sm" target="_blank" rel="noreferrer"
					>Read blog</a
				>
			</div>
		</div>
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

	.text-titles {
		font-size: clamp(1.5rem, 1.1827rem + 1.4103vw, 2.875rem);
	}
</style>
