<script>
	export let data;
	import Title from '$lib/Title.svelte';
</script>

<div class=" flex-grow flex flex-col overflow-auto">
	<h1 class="text-7xl mb-3 mr-6"><Title>Jan Maushagen</Title></h1>
	<div class="w-full flex-grow md:flex items-center m-auto ">
		<h1 class="text-7xl mb-3 mr-6"><Title>Mixtapes</Title></h1>
		<div class="flex-grow gallery w-full ">
			{#each data as d (d.key)}
				<a href={`/projects/${d.key}`}>
					<div role="button" class=" mb-3 flex flex-col pb-3 shadow-lg">
						<Title>{d.name}</Title>
						<img class="flex-grow" alt={d.key} src={d.pictures.large} />
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.gallery {
		column-count: 4;

		/* display: grid;
    grid-template-rows: repeat(20, 8px);
     */
		grid-gap: 10px;
		/* grid-auto-flow: dense; */
	}
	.gallery div {
		break-inside: avoid;
		/* padding: 16px; */
		page-break-inside: avoid;
		will-change: transform;
	}
</style>
