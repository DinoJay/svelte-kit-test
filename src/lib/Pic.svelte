<script>
	export let style = '';
	export let src = '';
	export let className = '';
	import { onMount } from 'svelte';
	/* Store the element in el */
	//   let el = document.getElementById('tilt');
</script>

<div class=""><slot /></div>
<div class="  flex-grow box1 bg-cover {className}" style="background-image: url({src}); " />

<style lang="scss">
	.box {
		margin: 25px;
		width: 250px;
		height: 250px;
		background: #fff;
		border: solid black;
		border-color: black;
		float: left;
	}

	.box1 {
		border-width: 3px 4px 3px 5px;
		border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
		transform: rotate(2deg);
	}
	.box2 {
		width: 350px;
		border-width: 3px 3px 5px 5px;
		border-radius: 4% 95% 6% 95%/95% 4% 92% 5%;
		transform: rotate(-2deg);
	}

	.box3 {
		border-width: 5px 3px 3px 5px;
		border-radius: 95% 4% 97% 5%/4% 94% 3% 95%;
		transform: rotate(2deg);
	}
	.first {
		mix-blend-mode: multiply;
		background: #0091e5;
	}
	.second {
		mix-blend-mode: multiply;
		background: #e42149;
	}
	.third {
		mix-blend-mode: multiply;
		background: #fff146;
	}
</style>
