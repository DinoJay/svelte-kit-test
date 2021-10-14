<script>
	import MixtapePage from './MixtapePage.svelte';
	import Title from '$lib/Title.svelte';
	const url = 'https://api.mixcloud.com/deli-jay/cloudcasts/';

	const promise = fetch(url, { mode: 'cors' })
		.then((response) => response.json())
		.then((result) => {
			const { data: resultData } = result;
			console.log('resultData', resultData);
			return Promise.all(
				resultData.map((d) =>
					fetch(`https://api.mixcloud.com${d.key}`).then((response) => response.json())
				)
			);
		});
	// .then((newData) => console.log('newData', newData));
</script>

{#if promise}
	{#await promise}
		<!-- promise is pending -->
		<Title animate><span class="text-7xl">Download...</span></Title>
	{:then data}
		<MixtapePage {data} />
	{:catch error}
		<!-- promise was rejected -->
		<Title animate
			><span class="text-7xl">
				Something went wrong: {error.message}
			</span></Title
		>
	{/await}
{:else}
	<Title animate><span class="text-7xl">Download...</span></Title>
{/if}
