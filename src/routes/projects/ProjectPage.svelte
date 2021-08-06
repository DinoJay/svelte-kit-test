<script>
	export let data = [];
	import Title from '$lib/Title.svelte';
	import HomeBtn from '$lib/HomeBtn.svelte';

	const rowHeight = 20;
	let prepData = [];
	let offsetWidth = 0;
	const divisor = 5;
	$: {
		prepData = data.map((d) => ({
			...d,
			cols: Math.max(Math.round(d.width_t / divisor), 1),
			rows: Math.max(Math.round(d.height_t / divisor), 1)
		}));
		console.log('offsetWidth', offsetWidth);
	}
	let id = null;
	const getStyles = (d) => {
		if (d.id !== id) return `grid-column: span ${d.cols};grid-row: span ${d.rows}`;
		return `grid-column: ${1};grid-row: ${1}`;
	};
</script>

<div class="h-screen mt-auto flex flex-col">
	<div class="w-full md:flex items-center m-auto" bind:offsetWidth>
		<h1 class="text-7xl mb-3 mr-6"><Title>Projects</Title></h1>
		<div class="gallery flex-grow overflow-auto">
			{#each prepData as d (d.id)}
				<div
					role="button"
					on:click={() => (id = id !== d.id ? id : d.id)}
					class=" flex flex-col pb-3"
				>
					<Title>{d.title}</Title>
					<img class="flex-grow" alt={d.id} src={d.url_m} />
				</div>
			{/each}
		</div>
	</div>
	<a href="/" class="text-2xl uppercase mb-3 flex items-center">
		<HomeBtn />
	</a>
</div>

<style>
	.gallery {
		column-count: 4;

		/* display: grid;
    grid-template-rows: repeat(20, 8px);
    grid-gap: 15px; */
		/* grid-auto-flow: dense; */
	}
	.gallery div {
		break-inside: avoid;
		/* padding: 16px; */
		page-break-inside: avoid;
		will-change: transform;
	}
</style>
