import { join } from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { partytownVite } from '@builder.io/partytown/utils';

export default defineConfig({
	plugins: [
		sveltekit(),
		partytownVite({
			dest: join(__dirname, 'static', '~partytown')
		})
	]
});
