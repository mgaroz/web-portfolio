<script lang="ts">
	import { FastAverageColor } from 'fast-average-color';
	import { workActive, backColor } from '$lib/store';
	import item1 from '$lib/img/sky-full.avif';
	import item2 from '$lib/img/cf-landing.avif';
	import item3 from '$lib/img/item3.avif';
	import item4 from '$lib/img/item4.avif';
	import { onMount } from 'svelte';

	let imagesObject = { item1: item1, item2: item2, item3: item3, item4: item4 };
	let colorObject: { [prop: string]: any } = {};

	function setStatusAndColor(status: boolean, color: string) {
		workActive.set(status);
		backColor.set(colorObject[color]);
	}

	const fac = new FastAverageColor();

	onMount(() => {
		let values = Object.values(imagesObject);
		values.forEach((item, idx) => {
			fac
				.getColorAsync(item)
				.then((color) => {
					let key = 'item' + (idx + 1).toString();
					Object.assign(colorObject, { [key]: color.hex });
				})
				.catch((e) => {
					console.error(e);
				});
		});
		fac.destroy();
	});
</script>

<section class="2xs:px-6 h-full w-full pb-28 md:px-20" id="portfolio">
	<div
		id="work-section"
		class="2xs:flex 2xs:justify-between 2xs:gap-3 md:flex-row md:items-center md:gap-8"
	>
		<div
			id="work-item-one"
			class="2xs:h-[13vh] xs:h-[19vh] group relative w-1/4 grow basis-0 cursor-pointer transition-all duration-500 hover:grow-[2.5] xl:h-[45vh] 2xl:h-[60vh]"
			on:mouseenter={() => setStatusAndColor(true, 'item1')}
			on:mouseleave={() => workActive.set(false)}
		>
			<div class="mb-4 h-full w-full overflow-hidden">
				<div
					style="background-image: url('{item1}')"
					class="bg-cod-gray-50 mb-4 flex h-full w-full scale-110 flex-col items-end justify-end bg-cover bg-center bg-no-repeat text-white transition-transform duration-500 group-hover:scale-100"
				>
					<div class="mb-4 flex">
						<a
							href="https://github.com/mgaroz"
							target="_blank"
							class="mr-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
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
							href="https://github.com/mgaroz"
							target="_blank"
							class="mr-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
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
			</div>
			<div class="2xs:w-full flex items-center justify-between">
				<p
					class="font-bgr p1 2xs:whitespace-normal 2xs:opacity-0 2xs:hover:opacity-100 uppercase md:whitespace-nowrap md:opacity-100"
				>
					Skyler Cohen
				</p>
				<p
					class="text-gallery-800 p2 2xs:hidden uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block"
				>
					Development
				</p>
			</div>
		</div>
		<div
			id="work-item-two"
			class="xs:h-[19vh] group relative w-1/4 grow basis-0 cursor-pointer transition-all duration-500 hover:grow-[2.5] xl:h-[45vh] 2xl:h-[60vh]"
			on:mouseenter={() => setStatusAndColor(true, 'item2')}
			on:mouseleave={() => workActive.set(false)}
		>
			<div class="mb-4 h-full w-full overflow-hidden">
				<div
					style="background-image: url('{item2}')"
					class="bg-cod-gray-50 mb-4 h-full w-full scale-110 bg-cover bg-center bg-no-repeat transition-transform duration-500 hover:scale-100"
				/>
			</div>
			<div class="flex items-center justify-between">
				<p class="p1 font-bgr uppercase">Andy's Cafe</p>
				<p
					class="text-gallery-800 p2 2xs:hidden uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block"
				>
					Development
				</p>
			</div>
		</div>
		<div
			id="work-item-three"
			class="xs:h-[19vh] group relative w-1/4 grow basis-0 cursor-pointer transition-all duration-500 hover:grow-[2.5] xl:h-[45vh] 2xl:h-[60vh]"
			on:mouseenter={() => setStatusAndColor(true, 'item3')}
			on:mouseleave={() => workActive.set(false)}
		>
			<div class="mb-4 h-full w-full overflow-hidden">
				<div
					style="background-image: url('{item3}')"
					class="bg-cod-gray-50 mb-4 h-full w-full scale-110 bg-cover bg-center bg-no-repeat transition-transform duration-500 hover:scale-100"
				/>
			</div>
			<div class="flex items-center justify-between">
				<p class="p1 font-bgr uppercase">Item Three</p>
				<p
					class="text-gallery-800 p2 2xs:hidden uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block"
				>
					Development
				</p>
			</div>
		</div>
		<div
			id="work-item-four"
			class="xs:h-[19vh] group relative w-1/4 grow basis-0 cursor-pointer transition-all duration-500 hover:grow-[2.5] xl:h-[45vh] 2xl:h-[60vh]"
			on:mouseenter={() => setStatusAndColor(true, 'item4')}
			on:mouseleave={() => workActive.set(false)}
		>
			<div class="mb-4 h-full w-full overflow-hidden">
				<div
					style="background-image: url('{item4}')"
					class="bg-cod-gray-50 mb-4 h-full w-full scale-110 bg-cover bg-center bg-no-repeat transition-transform duration-500 hover:scale-100"
				/>
			</div>
			<div class="flex items-center justify-between">
				<p class="p1 font-bgr uppercase">Item Four</p>
				<p
					class="text-gallery-800 p2 2xs:hidden uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block"
				>
					Development
				</p>
			</div>
		</div>
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
