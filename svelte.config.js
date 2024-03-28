<<<<<<< HEAD
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
=======
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
>>>>>>> cf-mailchannels

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
<<<<<<< HEAD
			pages: 'build',
			assets: 'build',
			fallback: null,
=======
			// routes: {
			// 	include: ['/*'],
			// 	exclude: ['<all>']
			// },
			pages: 'build',
			assets: 'build',
			fallback: undefined,
>>>>>>> cf-mailchannels
			precompress: false
		})
	}
};

export default config;
