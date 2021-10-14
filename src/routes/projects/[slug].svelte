<script>
	import { page } from '$app/stores';
	import DetailProject from './DetailProject.svelte';

	const photoId = $page.params.slug;
	const urlBase = 'https://www.flickr.com/services/rest/?method=';
	const q = `flickr.photos.getInfo&api_key=5c4e7ab0a5acc4e3b261f08e16011d48&photo_id=${photoId}&format=json&nojsoncallback=1`;

	const url = `${urlBase}${q}`;

	const promise = fetch(url, { mode: 'cors' })
		.then((response) => response.json())
		.then((result) => {
			console.log('result', result);
			return result.photo;
		});
</script>

{#await promise}
	<p>...waiting</p>
{:then photo}
	<DetailProject
		description={photo.description._content}
		imgUrl={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`}
	/>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
