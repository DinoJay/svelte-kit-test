<script>
	import { page } from '$app/stores';

	const photoId = $page.params.slug;

	const q =
		'flickr.photos.getInfo&api_key=5c4e7ab0a5acc4e3b261f08e16011d48&photo_id=50989718831&format=json';
</script>

{$page.params.slug}
