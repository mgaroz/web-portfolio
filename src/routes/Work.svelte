<script lang="ts">
	import { workActive, backColor } from '$lib/store';
	import item1 from '$lib/img/skyshot.webp';
	import item2 from '$lib/img/coffeeshot.webp';
	import item3 from '$lib/img/showcaseport.webp';
	import item4 from '$lib/img/airoboshot.webp';

	let colorObject: { [prop: string]: string } = {
		item1: '#775280',
		item2: '#5b5953',
		item3: '#9c9a9e',
		item4: '#465f77'
	};

	let portfolioItems = [
		{
			id: 'item1',
			name: 'Skyler Cohen',
			type: 'Development',
			tech: 'Sveltekit, Tailwind',
			link: 'https://skylercohen.com.au',
			source: 'https://github.com/mgaroz/skyler-website',
			img: item1
		},
		{
			id: 'item2',
			name: "Andy's Cafe",
			type: 'Development',
			tech: 'Sveltekit, Tailwind',
			link: 'https://coffee-landing.pages.dev/',
			source: 'https://github.com/mgaroz/coffee-landing',
			img: item2
		},
		{
			id: 'item3',
			name: 'Project manager (WIP)',
			type: 'Development',
			tech: 'Sveltekit, Tailwind, DaisyUI',
			link: 'https://showcase-nine.vercel.app/',
			source: 'https://github.com/mgaroz/showcase/tree/main/apps/web',
			img: item3
		},
		{
			id: 'item4',
			name: 'AiRobo',
			type: 'Development',
			tech: 'Sveltekit, Tailwind',
			link: 'https://airobo.pages.dev',
			source: 'https://github.com/mgaroz/airobo',
			img: item4
		}
	];

	function setStatusAndColor(status: boolean, color: string) {
		workActive.set(status);
		backColor.set(colorObject[color]);
	}
</script>

<section class="2xs:px-6 h-full w-full pb-28 md:px-20" id="portfolio">
	<div
		id="work-section"
		class="2xs:flex 2xs:justify-between 2xs:flex-col 2xs:gap-16 md:grid md:grid-cols-2 md:gap-8 md:gap-y-16 xl:flex xl:flex-row xl:items-center xl:gap-8"
	>
		{#each portfolioItems as { id, name, type, tech, link, source, img }}
			<div
				class="2xs:h-[50vmin] 2xs:flex 2xs:flex-col 2xs:w-full group relative transition-all duration-500 hover:grow-[2.5] md:h-[25vh] xl:flex xl:h-[45vh] xl:w-1/4 xl:grow xl:basis-0 2xl:h-[60vh]"
				on:mouseenter={() => setStatusAndColor(true, id)}
				on:mouseleave={() => workActive.set(false)}
			>
				<div class="relative mb-4 min-h-full w-full overflow-hidden">
					<div
						class="font-bgr 2xs:absolute 2xs:left-0 2xs:h-[25%] sm: 2xs:bottom-0 2xs:w-full bg-cod-gray-900/60 z-20 flex items-center justify-between backdrop-blur-sm md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100 xl:h-[10%]"
					>
						<p class="2xs:px-2 xs:px-4 text-[14px] uppercase">
							{type}
						</p>
						<div
							class="flex gap-4 pr-4"
							on:mouseenter={() => workActive.set(false)}
							on:mouseleave={() => setStatusAndColor(true, id)}
						>
							<a
								href={source}
								target="_blank"
								class="transition-opacity duration-500 md:block md:opacity-0 md:group-hover:opacity-100"
								aria-label="Source"
								><svg
									class="h-7 w-7 text-white"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="1"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" />
									<path
										d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
									/></svg
								></a
							>
							<a
								href={link}
								target="_blank"
								class="transition-opacity duration-500 md:block md:opacity-0 md:group-hover:opacity-100"
								aria-label="Website"
								><svg
									class="h-7 w-7 text-white"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="1"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" /> <circle cx="12" cy="12" r="9" />
									<line x1="3.6" y1="9" x2="20.4" y2="9" />
									<line x1="3.6" y1="15" x2="20.4" y2="15" /> <path d="M11.5 3a17 17 0 0 0 0 18" />
									<path d="M12.5 3a17 17 0 0 1 0 18" /></svg
								></a
							>
						</div>
					</div>
					<div
						style="background-image: url('{img}')"
						class="bg-cod-gray-50 relative mb-4 flex h-full w-full scale-110 flex-col items-end justify-end bg-cover bg-center bg-no-repeat text-white transition-transform duration-500 group-hover:scale-100"
					/>
				</div>
				<div class="2xs:w-full flex max-h-full items-center justify-between">
					<p
						class="font-bgr p1 2xs:whitespace-normal 2xs:opacity-100 uppercase md:whitespace-nowrap"
					>
						{name}
					</p>
					<p
						class="text-gallery-800 p2 2xs:hidden 2xs:whitespace-nowrap uppercase opacity-0 transition-all duration-500 group-hover:opacity-100 md:block"
					>
						{tech}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.p1 {
		font-size: clamp(0.875rem, 0.7885rem + 0.3846vw, 1.25rem);
	}

	.p2 {
		font-size: 14px;
	}
</style>
