import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
//import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,

			scss: {
				prependData: '@import "src/variables.scss";'
			}
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte",
		adapter: adapter({
			// default options are shown
			pages: "build",
			assets: "build",
			fallback: null
		}),
		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@import "src/variables.scss";'
					}
				}
			}
		}
	}
};

export default config;
