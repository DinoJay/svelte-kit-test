<script>
	import { get } from 'svelte/store';
	import Pic from '$lib/Pic.svelte';
	import Title from '$lib/Title.svelte';

	export let data = [];

	const rowHeight = 20;
	let prepData = [];
	let offsetWidth = 0;
	const divisor = 8;
	$: {
		prepData = data.map((d) => ({
			...d,
			cols: Math.max(Math.round(d.width_t / divisor), 1),
			rows: Math.max(Math.round(d.height_t / divisor), 1)
		}));
		console.log('prepData', prepData, offsetWidth);
	}
	let id = null;
	const getStyles = (d) => {
		if (d.id !== id) return `grid-column: span ${d.cols};grid-row: span ${d.rows}`;
		return `grid-column: ${1};grid-row: ${1}`;
	};
</script>

<div class="w-full" bind:offsetWidth>
	<div
		class="gallery"
		style="grid-template-columns: repeat({Math.round(
			Math.floor(offsetWidth / divisor / 2.8)
		)}, {divisor}px); "
	>
		{#each prepData as d (d.id)}
			<div
				role="button"
				on:click={() => (id = id !== d.id ? id : d.id)}
				class="w-full h-full relative -3"
				style={getStyles(d)}
			>
				<Pic src={d.url_m}>
					<span class="  w-full px-2"><Title className="w-full">{d.title}</Title></span>
				</Pic>
			</div>
		{/each}
	</div>
</div>

<style>
	.gallery {
		display: grid;
		grid-auto-rows: 8px;
		grid-gap: 15px;
		grid-auto-flow: dense;
	}
</style>
