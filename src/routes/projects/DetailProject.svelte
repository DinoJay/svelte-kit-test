<script>
	export let imgUrl;
	export let description;
	console.log('imgUrl', imgUrl);
</script>

<div>
	<p>{@html description}</p>
	<img class="w-60 h-60" src={imgUrl} />
</div>
