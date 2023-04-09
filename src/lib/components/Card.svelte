<script lang="ts">
	import coffee from '$lib/img/coffeetp.webp';
	import skyshot from '$lib/img/skyshot.webp';
	import airoboshot from '$lib/img/airoboshot.webp';
	import showcase from '$lib/img/showcaseport.webp';

	let items = [
		{
			title: "Andy's Cafe",
			text: 'Website for a Cafe in Cudillero, Asturias, Spain.',
			code: 'Sveltekit, Tailwind',
			img: coffee,
			link: '/'
		},
		{
			title: 'Skyler Cohen',
			text: 'Made for this cute little model from Australia',
			code: 'Sveltekit, Tailwind, DaisyUI',
			img: skyshot,
			link: '/'
		},
		{
			title: 'Airobo',
			text: 'Website made using only an image from Dribbble',
			code: 'Sveltekit, Tailwind',
			img: airoboshot,
			link: '/'
		},
		{
			title: 'Showcase',
			text: 'A project manager for your projects',
			code: 'Sveltekit, Tailwind',
			img: showcase,
			link: '/'
		}
	];
</script>

{#each items as { title, text, code, img, link }}
	<div class="md:pb-10">
		<div class="slider font-bgr border-cod-gray-50 group border">
			<div class="slider__wrp swiper-wrapper">
				<div class="slider__item swiper-slide">
					<div class="slider__img">
						<img
							src={img}
							alt="coffee"
							class="scale-100 saturate-0 group-hover:rotate-[20deg] group-hover:scale-150 group-hover:saturate-100"
						/>
					</div>
					<div class="slider__content text-gallery-50">
						<span class="slider__code text-gallery-800">{code}</span>
						<div class="slider__title ">{title}</div>
						<div class="slider__text  text-gallery-700">
							{text}
						</div>
						<a href={link} class="slider__button uppercase">Read more</a>
					</div>
				</div>
			</div>
		</div>
	</div>
{/each}

<style>
	.slider {
		width: 95%;
		position: relative;
		max-width: 800px;
		margin: auto;
		background: transparent;
		box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
		padding: 30px;
		/* border-radius: 25px; */
		height: 400px;
		transition: all 0.3s;
	}

	@media screen and (max-width: 992px) {
		.slider {
			max-width: 680px;
			height: 400px;
		}
	}

	@media screen and (max-width: 768px) {
		.slider {
			min-height: 500px;
			height: auto;
			margin: 180px auto;
		}
	}

	@media screen and (max-height: 500px) and (min-width: 992px) {
		.slider {
			height: 350px;
		}
	}

	.slider__item {
		display: flex;
		align-items: center;
	}

	@media screen and (max-width: 768px) {
		.slider__item {
			flex-direction: column;
		}
	}

	.slider__item.swiper-slide-active .slider__img img {
		opacity: 1;
		transition-delay: 0.3s;
	}

	.slider__img {
		width: 400px;
		flex-shrink: 0;
		height: 300px;
		/* box-shadow: 4px 13px 30px 1px rgba(0, 0, 0, 0.2); */
		border-radius: 20px;
		transform: translateX(-80px);
		overflow: hidden;
	}

	@media screen and (max-width: 768px) {
		.slider__img {
			transform: translateY(-50%);
			width: 90%;
		}
	}
	@media screen and (max-width: 576px) {
		.slider__img {
			width: 95%;
		}
	}
	@media screen and (max-height: 500px) and (min-width: 992px) {
		.slider__img {
			height: 270px;
		}
	}

	.slider__img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		opacity: 1;
		border-radius: 20px;
		transition: all 0.3s;
	}

	.slider__content {
		padding-right: 25px;
	}

	@media screen and (max-width: 768px) {
		.slider__content {
			margin-top: -80px;
			text-align: center;
			padding: 0 30px;
		}
	}

	@media screen and (max-width: 576px) {
		.slider__content {
			padding: 0;
		}
	}

	.slider__content > * {
		opacity: 1;
		transform: translateY(25px);
		transition: all 0.4s;
	}

	.slider__code {
		margin-bottom: 15px;
		display: block;
		font-weight: 500;
		text-transform: uppercase;
	}

	.slider__title {
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 20px;
		text-transform: uppercase;
	}

	.slider__text {
		margin-bottom: 30px;
		line-height: 1.5em;
		text-transform: uppercase;
	}

	.slider__button {
		display: inline-flex;
		background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
		padding: 15px 35px;
		border-radius: 50px;
		color: #fff;
		box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
		text-decoration: none;
		font-weight: 500;
		justify-content: center;
		text-align: center;
		letter-spacing: 1px;
	}
	@media screen and (max-width: 576px) {
		.slider__button {
			width: 100%;
		}
	}
</style>
