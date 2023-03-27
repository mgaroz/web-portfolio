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
		class="2xs:flex 2xs:flex-col 2xs:justify-between gap-8 md:flex-row md:items-center"
	>
		<div
			id="work-item-one"
			class="group relative w-1/4 grow basis-0 cursor-pointer transition-all duration-500 hover:grow-[2.5] xl:h-[45vh] 2xl:h-[60vh]"
			on:mouseenter={() => setStatusAndColor(true, 'item1')}
			on:mouseleave={() => workActive.set(false)}
		>
			<div class="mb-4 h-full w-full overflow-hidden">
				<div
					style="background-image: url('{item1}')"
					class="bg-cod-gray-50 mb-4 h-full w-full scale-110  bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-100"
				/>
			</div>
			<div class="flex items-center justify-between">
				<p class="font-bgr p1 whitespace-nowrap uppercase">Skyler Cohen</p>
				<p
					class="text-gallery-800 p2 uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				>
					Development
				</p>
			</div>
		</div>
		<div
			id="work-item-two"
			class="group relative w-1/4 grow basis-0 cursor-pointer transition-all duration-500 hover:grow-[2.5] xl:h-[45vh] 2xl:h-[60vh]"
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
					class="text-gallery-800 p2 uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				>
					Development
				</p>
			</div>
		</div>
		<div
			id="work-item-three"
			class="group relative w-1/4 grow basis-0 cursor-pointer transition-all duration-500 hover:grow-[2.5] xl:h-[45vh] 2xl:h-[60vh]"
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
					class="text-gallery-800 p2 uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				>
					Development
				</p>
			</div>
		</div>
		<div
			id="work-item-four"
			class="group relative w-1/4 grow basis-0 cursor-pointer transition-all duration-500 hover:grow-[2.5] xl:h-[45vh] 2xl:h-[60vh]"
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
				<p class="p1 uppercase">Item Four</p>
				<p
					class="text-gallery-800 p2 uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				>
					Development
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.p1 {
		font-size: 18px;
	}

	.p2 {
		font-size: 14px;
	}
</style>
