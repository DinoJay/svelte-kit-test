<script>
	import { onMount } from 'svelte';
	import Pic from '$lib/Pic.svelte';
	import Title from '$lib/Title.svelte';
	let title = null;
	let rXP = 170;
	let rYP = 319;

	export let translateFirst = [0, 0];
	export let translateSec = [1.2, 0];
	export let translateThird = [1.3, 0];
	// onMount(() => {
	//   document.addEventListener('mousemove', (e) => {
	//     const offX = title ? title.offsetLeft : 0;
	//     const offY = title ? title.offsetTop : 0;
	//     const offsetWidth = title ? title.offsetWidth : 0;
	//     const offsetHeight = title ? title.offsetHeight : 0;
	//     rXP = Math.max(Math.min(e.pageX - offX - offsetWidth / 2, 170), -170);
	//     rYP = e.pageY - offY - offsetHeight / 2;
	//     console.log({ rXP, rYP });
	//   });
	// });

	let translateFirstTitle = [0, 0];
	let translateSecTitle = [1.5, 0];
	let translateThirdTitle = [3, 0];
</script>

<div class="flex-grow flex items-center">
	<div class="max-w-2xl mr-12 ">
		<h1 class="text-7xl mb-4 relative">
			<Title
				translateFirst={translateFirstTitle}
				translateSec={translateSecTitle}
				translateThird={translateThirdTitle}>Jan Maushagen</Title
			>
		</h1>
		<p class="text-gray-700">
			<span class="line-through">PhD student</span>, orginally from Germany, (32) years{' and '} me {6}
			months old) for{' '}
			{7} years now. Getting my head around research, programming and languages. Drinking cappucino in
			the morning, jogging and doing Diss-co music in the evening. As part of my day job I work on data
			visualization and educational Games!
		</p>
	</div>
	<div class="gallery flex-grow">
		<div class="firstPic ">
			<a href="/projects">
				<Pic src="/whiteboard.jpg" className="w-full h-full bg-cover bg-center">
					<h2 class="">
						<span class="text-4xl  py-1 uppercase font-mono"
							><Title {translateFirst} {translateSec} {translateThird}>#projects</Title></span
						>
					</h2>
				</Pic>
			</a>
		</div>
		<div class="secPic">
			<a href="/mixtapes" class="w-full h-full">
				<Pic src="/mixer.jpg" className="bg-center bg-cover w-full h-full ">
					<h2 class="">
						<span class="text-4xl  py-1 uppercase font-mono"
							><Title {translateFirst} {translateSec} {translateThird}>#mixtapes</Title></span
						>
					</h2>
				</Pic>
			</a>
		</div>
		<div class="thirdPic">
			<a class="w-full h-full" href="/projects">
				<Pic src="/tickle.jpg" className="cover bg-cover bg-center w-full h-full ">
					<h2 class="bottom-0">
						<span class=" text-xl py-1 uppercase font-mono"
							><Title {translateFirst} {translateSec} {translateThird}>#projects/</Title></span
						>
						<span class=" text-xl py-1 uppercase font-mono"
							><Title {translateFirst} {translateSec} {translateThird}>tickle</Title></span
						>
					</h2>
				</Pic>
			</a>
		</div>
		<div class="fourthPic">
			<a href="/work">
				<Pic src="me_blurred.jpg" className="bg-center bg-cover w-full h-full ">
					<h2>
						<span class="text-2xl  py-1 uppercase font-mono"
							><Title {translateFirst} {translateSec} {translateThird}>#work</Title></span
						>
					</h2>
				</Pic>
			</a>
		</div>
		<div class="fifthPic">
			<a href="/projects" class="w-full h-full">
				<Pic src="/holger.jpg" className="bg-cover bg-center w-full h-full ">
					<span class="py-1 text-2xl uppercase font-mono"
						><Title {translateFirst} {translateSec} {translateThird}>#project/vinyl</Title></span
					>
				</Pic>
			</a>
		</div>
	</div>
</div>

<style>
	.first {
		transform: translate(0%, 0%);
		color: #0091e5;
	}
	.second {
		transform: translate(1%, 0%);
		color: #e42149;
	}
	.third {
		transform: translate(0.3%, 0%);
		color: #fff146;
	}
	/* .layer {
    width: 100%;
    height: 100%;
    position: absolute;
  } */
	.layer-1 {
		opacity: 0.6;
	}

	/* .shadow {
    background: black;
    height: 100px;
    width: 100px;
    position: relative;
  } */
	shadow:after,
	shadow:before {
		content: '';
		background: grey;
		position: absolute;
	}
	shadow:after {
		width: 100%;
		height: 20px;
		left: 10px;
		bottom: 0;
		transform: translatey(100%) skewx(45deg);
	}
	shadow:before {
		width: 20px;
		height: 100%;
		right: 0;
		transform: translatex(100%) skewy(45deg);
		top: 10px;
	}

	.box {
		/* box-shadow: 7px 7px 0px #404040; */
		box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
			0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
			0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(16, 1fr);
		grid-template-rows: repeat(18, 20px);
		column-gap: 25px;
		row-gap: 20px;
	}
	.firstPic {
		/* background-image: url(/whiteboard.jpg); */
		grid-column: span 9;
		grid-row: 1 / span 10;
	}
	.secPic {
		grid-column: span 7;
		grid-row: 2 / span 6;
	}
	.thirdPic {
		grid-column: span 4;
		grid-row: 11 / span 6;
	}
	.fourthPic {
		grid-column: span 5;
		grid-row: 11 / span 7;
	}
	.fifthPic {
		grid-column: span 7;
		grid-row: 8 / span 8;
	}
</style>
