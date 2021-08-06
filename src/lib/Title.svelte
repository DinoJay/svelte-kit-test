<script>
	export let className = '';
	export let animate = false;
	export let translateFirst = [0, 0];
	export let translateSec = [1, 0];
	export let translateThird = [1, 0];
	import { onMount } from 'svelte';
	// onMount(() => {
	let s0;
	let s1;
	let s2;
	$: {
		clearInterval(s0);
		clearInterval(s1);
		clearInterval(s2);
		if (animate) {
			s0 = setInterval(() => {
				const ms = new Date().getMilliseconds();
				const off = ms % 7;
				translateFirst = [off, 0];
			}, 100);
			s1 = setInterval(() => {
				const ms = new Date().getMilliseconds();
				const off = ms % 7;
				translateSec = [off + 3, 0];
			}, 200);
			s2 = setInterval(() => {
				const ms = new Date().getMilliseconds();
				const off = ms % 7;
				translateThird = [off + 5, 0];
			}, 300);
		} else {
			clearInterval(s0);
			clearInterval(s1);
			clearInterval(s2);
		}
	}
	// });
</script>

<span class="{className}  relative title">
	<span class=" w-full opacity-0  px-2 font-mono font-bold "><slot /></span>
	<span
		style="transform: translate({translateFirst[0]}%, {translateFirst[1]}%)"
		class=" w-full first absolute left-0 top-0 font-mono font-bold transition-all"><slot /></span
	>
	<span
		style="transform: translate({translateSec[0]}%, {translateSec[1]}%)"
		class=" w-full second absolute left-0 top-0 font-mono font-bold transition-all"><slot /></span
	>
	<span
		style="transform: translate({translateThird[0]}%, {translateThird[1]}%)"
		class="w-full third absolute left-0 top-0  font-mono font-bold transition-all"><slot /></span
	>
	<span class="hidden w-full absolute text-black left-0 px-2 font-mono font-bold "><slot /></span>
</span>

<style>
	.title * {
		text-transform: uppercase;
		letter-spacing: -0.1em;
		transform-origin: left;
		mix-blend-mode: multiply;
	}
	.first {
		/* transform: translate(0%, 0%); */
		color: #0091e5;
	}
	.second {
		/* transform: translate(1%, 0%); */
		color: #e42149;
	}
	.third {
		/* transform: translate(0.3%, 0%); */
		color: #fff146;
	}
</style>
