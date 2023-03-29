<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Link from '$lib/components/Link.svelte';
	import { blogActive, backColor, active } from '$lib/store';
	import dayjs from 'dayjs';
	import { onMount } from 'svelte';
	let sectionContainer: HTMLDivElement;

	let tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

	export let blogData: any;

	function setStatus(status: boolean) {
		active.set(false);
		blogActive.set(status);
		backColor.set('#000');
	}

	function setTrailerActive(status: boolean) {
		blogActive.set(false);
		active.set(status);
	}

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.from(sectionContainer, {
			duration: 1,
			y: 100,
			opacity: 0,
			scrollTrigger: {
				trigger: sectionContainer,
				start: 'top 80%',
				end: 'bottom 80%',
				toggleActions: 'play reverse play reverse'
			}
		});
	});
</script>

<section id="blog" class="2xs:px-6 h-full w-full pb-28 md:px-20">
	<div bind:this={sectionContainer}>
		<div>
			<h6 class="font-bgr pb-[1.5625rem] uppercase">/ Stay informed</h6>
			<hr class="h-[1.75rem] border-0" />
			<span class="text-big-size block uppercase leading-none">Blog</span>
			<span class="text-big-size block uppercase leading-none">Latest entries</span>
		</div>
		<hr class="h-[1.75rem] border-0" />
		<hr class="h-[1.75rem] border-0" />
		<div>
			{#each blogData as post}
				<div
					class="border-cod-gray-50 group w-full items-center justify-between overflow-hidden border-b py-[3.125rem] first:border-t md:flex md:h-[15.125rem]"
				>
					<div class="relative max-h-36 max-w-fit cursor-pointer items-center md:flex">
						<div class="relative overflow-hidden">
							<div
								style="background-image: url('{post.cover_image}')"
								class="reverseit 2xs:hidden h-36 w-0 scale-125 bg-cover bg-center bg-no-repeat duration-500 group-hover:mr-10 group-hover:w-[220px] group-hover:scale-100 md:block"
							/>
						</div>
						<h3
							class="text-titles 2xs:flex 2xs:h-20 2xs:pb-10 2xs:items-center uppercase md:block md:h-auto md:pb-0"
							on:mouseenter={() => setStatus(true)}
							on:mouseleave={() => setStatus(false)}
						>
							<a href={post.url} target="_blank">{post.title}</a>
						</h3>
					</div>
					<div class="flex-shrink-0 items-center justify-between md:flex md:h-16 md:gap-20">
						<div
							class="items-center justify-center md:flex md:h-16"
							on:mouseenter={() => setTrailerActive(true)}
							on:mouseleave={() => setTrailerActive(false)}
						>
							<span class="font-bgr 2xs:leading-loose block text-[14px] uppercase md:leading-normal"
								>{post.tag_list[0]} / {post.tag_list[1]} / {post.tag_list[2]}</span
							>
						</div>
						<div
							class="items-center justify-center md:flex md:h-16"
							on:mouseenter={() => setTrailerActive(true)}
							on:mouseleave={() => setTrailerActive(false)}
						>
							<span class="font-bgr block text-[14px] uppercase"
								>{dayjs(post.created_at.substring(0, 10)).format('MMMM DD, YYYY')}</span
							>
						</div>
					</div>
				</div>
			{/each}
			<div
				class="border-cod-gray-50 group h-[15.125rem] w-full items-center justify-between border-b py-[3.125rem] md:flex"
			>
				<div class="relative max-h-36 cursor-pointer items-center md:flex">
					<div class="relative overflow-hidden transition-all">
						<div
							class="reverseit 2xs:hidden h-36 w-0 scale-125 bg-[url('https://picsum.photos/221/140')] bg-cover bg-center bg-no-repeat duration-500 group-hover:mr-10 group-hover:w-[220px] group-hover:scale-100 md:block"
						/>
					</div>
					<h3
						class="text-titles 2xs:flex 2xs:h-20 2xs:pb-10 2xs:items-center uppercase md:block md:h-auto md:pb-0"
						on:mouseenter={() => setStatus(true)}
						on:mouseleave={() => setStatus(false)}
					>
						Website of the year
					</h3>
				</div>
				<div class="flex-shrink-0 items-center justify-between md:flex md:gap-20">
					<div>
						<span class="font-bgr block text-[14px] uppercase">intern / projects / agency</span>
					</div>
					<div>
						<span class="font-bgr block text-[14px] uppercase">march 21, 2023</span>
					</div>
				</div>
			</div>
			<div
				class="border-cod-gray-50 group h-[15.125rem] w-full items-center justify-between border-b py-[3.125rem] md:flex"
			>
				<div class="relative max-h-36 cursor-pointer items-center md:flex">
					<div class="relative overflow-hidden">
						<div
							class="reverseit 2xs:hidden h-36 w-0 scale-125 bg-[url('https://picsum.photos/222/140')] bg-cover bg-center bg-no-repeat duration-500 group-hover:mr-10 group-hover:w-[220px] group-hover:scale-100 md:block"
						/>
					</div>
					<h3
						class="text-titles 2xs:flex 2xs:h-20 2xs:pb-10 2xs:items-center uppercase md:block md:h-auto md:pb-0"
						on:mouseenter={() => setStatus(true)}
						on:mouseleave={() => setStatus(false)}
					>
						The process
					</h3>
				</div>
				<div class="flex-shrink-0 items-center justify-between md:flex md:gap-20">
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
		<div class="md:w-2/5">
			<h5 class="font-bgr uppercase">
				Create a powerful online presence, engage with your audience, and grow your business.
			</h5>
			<hr class="h-[1.75rem] border-0" />
			<hr class="h-[1.75rem] border-0" />
			<button
				class="bg-gallery-500 text-cod-gray-500 group h-[40px] w-36 rounded-full align-middle uppercase"
			>
				<Link
					href="#blog"
					content="Read blog"
					textSize="14px"
					duration="200ms"
					displacement="20px"
				/>
			</button>
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
