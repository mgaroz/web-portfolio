<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import TextClear from '$lib/components/TextClear.svelte';
	import toast from 'svelte-french-toast';
	import type { ActionData } from '../../../routes/$types';
	import { ArrowUp } from '$lib';

	let loading = false;
	let currentYear = new Date().getFullYear();
	export let form: ActionData;

	const submitForm = () => {
		return async ({ result, update, formElement }: any) => {
			loading = true;

			switch (result.type) {
				case 'success':
					toast.success('Message was sent successfully', {
						style: 'background: #2E2E2E; border: 1px solid #3ECF8E; color:white'
					});
					await applyAction(result);
					await invalidateAll();
					formElement.reset();
					break;
				case 'redirect':
					toast.success('Form was successfully submitted', {
						style: 'background: #2E2E2E; border: 1px solid #3ECF8E; color:white'
					});
					await invalidateAll();
					await applyAction(result);
					break;
				case 'failure':
					if (result.status === 400) {
						toast.error('Some fields are missing', {
							style: 'background: #2E2E2E; border: 1px solid #f87171; color:white'
						});
					} else {
						toast.error(result.status + ' ' + result.data.message, {
							style: 'background: #2E2E2E; border: 1px solid #f87171; color:white'
						});
					}
					await update();
					break;
				case 'error':
					toast.error(result.status + ' ' + result.error.message, {
						style: 'background: #2E2E2E; border: 1px solid #f87171; color:white'
					});
					break;
				default:
					await update();
			}
			loading = false;
		};
	};
</script>

<section id="contact" class="2xs:px-6 h-full w-full transition-colors duration-500 md:px-20">
	<div class="pb-[1.5625rem]">
		<span class="font-bgr block text-sm uppercase">/ I'd love to hear from you </span>
	</div>
	<hr class="h-[1.75rem] border-0" />
	<div class="pb-10">
		<span class="text-big-size block uppercase leading-none">Get</span>
		<span class="text-big-size block uppercase leading-none">In touch</span>
	</div>
	<div class="w-full items-start justify-between pb-28 md:flex">
		<div id="contact-left" class="2xs:pb-10 md:w-1/4 md:pb-0">
			<h3 class="font-bgr text-subheader uppercase leading-none">Let's talk</h3>
		</div>
		<div id="contact-right" class="font-bgr md:w-2/3">
			<form method="POST" use:enhance={submitForm}>
				<div class="mb-8 w-full gap-10 md:grid md:grid-cols-2">
					<div class="2xs:mb-8 2xs:w-full inline-block">
						<label for="name" class="text-hear">NAME</label>
						<input
							type="text"
							name="name"
							id="name"
							class="border-cod-gray-50 focus:border-b-gallery-50 text-hear inline-block w-full border-0 border-b bg-transparent focus:ring-transparent"
							disabled={loading}
						/>
						{#if form?.errors?.name}
							<small class="text-red-400">{form.errors.name}</small>
						{/if}
					</div>
					<div class="2xs:w-full inline-block">
						<label for="email" class="text-hear">EMAIL</label>
						<input
							type="email"
							name="email"
							id="email"
							class="border-cod-gray-50 focus:border-b-gallery-50 text-hear inline-block w-full border-0 border-b bg-transparent focus:ring-transparent"
							disabled={loading}
						/>
						{#if form?.errors?.email}
							<small class="text-red-400">{form.errors.email}</small>
						{/if}
					</div>
				</div>
				<div class="w-full">
					<label for="message" class="text-hear">MESSAGE</label>
					<textarea
						name="message"
						id="message"
						cols="30"
						rows="3"
						class="border-cod-gray-50 focus:border-b-gallery-50 text-hear w-full resize-none border-0 border-b bg-transparent focus:ring-transparent"
						disabled={loading}
					/>
					{#if form?.errors?.message}
						<small class="text-red-400">{form.errors.message}</small>
					{/if}
				</div>
				<hr class="h-[1.75rem] border-0" />
				<button
					type="submit"
					class="dark:bg-gallery-500 dark:text-cod-gray-500 font-bgm text-gallery-500 bg-cod-gray-500 group h-[40px] w-36 rounded-full align-middle text-[14px] uppercase transition-all duration-500 hover:scale-105"
					disabled={loading}
				>
					Submit
				</button>
			</form>
		</div>
	</div>
	<div
		class="2xs:grid 2xs:grid-cols-[1fr_1fr] 2xs:grid-rows-[1fr_1fr] items-center justify-between pb-12 md:flex md:gap-8"
	>
		<div class="font-bgr 2xs:gap-1 2xs:justify-between group flex items-center md:gap-8">
			<a href="/" aria-label="Home">
				<svelte:component this={ArrowUp} />
			</a>
			<div class="2xs:hidden md:block">
				<TextClear text="Back to top" href="#home" />
			</div>
		</div>
		<div class="font-bgr 2xs:text-right md:text-left">
			<span class="text-[14px] uppercase">Miguel Garoz &#169; {currentYear}</span>
		</div>
		<div class="2xs:text-right col-span-2">
			<TextClear text="Made with Sveltekit" href="https://kit.svelte.dev" target="_blank" />
		</div>
	</div>
</section>

<style>
	.text-big-size {
		font-size: clamp(2.125rem, 1.2354rem + 3.9538vw, 5.98rem);
	}

	.text-subheader {
		font-size: clamp(1.5rem, 1.1827rem + 1.4103vw, 2.875rem);
	}

	.text-hear {
		font-size: clamp(0.875rem, 0.7885rem + 0.3846vw, 1.25rem);
	}
</style>
