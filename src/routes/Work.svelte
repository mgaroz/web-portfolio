<script lang="ts">
	import { FastAverageColor } from 'fast-average-color';
	import { workActive, backColor } from '$lib/store';
	import item1 from '$lib/img/sky-full.webp';
	import item2 from '$lib/img/cf-landing.webp';
	import item3 from '$lib/img/item3.avif';
	import item4 from '$lib/img/item4.avif';

	function setStatus(status: boolean, color: string) {
		workActive.set(status);
		backColor.set(color);
	}

	function newSetStatus(status: boolean, image: string) {
		workActive.set(status);
		fac
			.getColorAsync(image)
			.then((color) => {
				backColor.set(color.hex);
			})
			.catch((e) => {
				console.error(e);
			});
		fac.destroy();
	}

	const fac = new FastAverageColor();
</script>

<section class="h-full w-full px-20 pb-28" id="work">
	<div id="work-section" class="flex items-center justify-between gap-8">
		<div
			id="work-item-one"
			class="group relative w-1/4 grow basis-0 cursor-pointer transition-all duration-500 hover:grow-[2.5] xl:h-[45vh] 2xl:h-[60vh]"
			on:mouseenter={() => newSetStatus(true, item1)}
			on:mouseleave={() => workActive.set(false)}
		>
			<div class="mb-4 h-full w-full overflow-hidden">
				<div
					class="bg-cod-gray-50 mb-4 h-full w-full scale-110 bg-[url('$lib/img/sky-full.webp')] bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-100"
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
			on:mouseenter={() => newSetStatus(true, item2)}
			on:mouseleave={() => workActive.set(false)}
		>
			<div class="mb-4 h-full w-full overflow-hidden">
				<div
					class="bg-cod-gray-50 mb-4 h-full w-full scale-110 bg-[url('$lib/img/cf-landing.webp')] bg-cover bg-center bg-no-repeat transition-transform duration-500 hover:scale-100"
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
			on:mouseenter={() => newSetStatus(true, item3)}
			on:mouseleave={() => workActive.set(false)}
		>
			<div class="mb-4 h-full w-full overflow-hidden">
				<div
					class="bg-cod-gray-50 mb-4 h-full w-full scale-110 bg-[url('$lib/img/item3.avif')] bg-cover bg-center bg-no-repeat transition-transform duration-500 hover:scale-100"
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
			on:mouseenter={() => newSetStatus(true, item4)}
			on:mouseleave={() => workActive.set(false)}
		>
			<div class="mb-4 h-full w-full overflow-hidden">
				<div
					class="bg-cod-gray-50 mb-4 h-full w-full scale-110 bg-[url('$lib/img/item4.avif')] bg-cover bg-center bg-no-repeat transition-transform duration-500 hover:scale-100"
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
