import preprocess from 'svelte-preprocess';
// import { scss } from 'svelte-preprocess';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte', ssr: false
	},
	preprocess: preprocess()
}

export default config;
