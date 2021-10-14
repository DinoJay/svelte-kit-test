<script>
	import { onMount } from 'svelte';
	import Pic from '$lib/Pic.svelte';
	import Title from '$lib/Title.svelte';
	let title = null;
	let rXP = 170;
	let rYP = 319;

	export let translateFirst = [3, 0];
	export let translateSec = [5, 0];
	export let translateThird = [12, 0];

	let translateFirstTitle = [3, 0];
	let translateSecTitle = [5, 0];
	let translateThirdTitle = [12, 0];
</script>

<div class="flex flex-col justify-center ">
	<div class="flex  justify-start items-center mb-4">
		<Title
			translateFirst={translateFirstTitle}
			translateSec={translateSecTitle}
			translateThird={translateThirdTitle}
			className="text-7xl z-10">Jan <br />Maus+<br />hagen</Title
		>
		<img
			class="w-48 box1 border-black h-40 object-cover ml-20 border-round"
			style="height:14rem; width:14rem"
			src="jan_profile.jpg"
		/>
	</div>
	<p class="text-gray-700 mt-12">
		<span class="line-through">PhD student</span>, orginally from Germany, (32) years{' and '} me {6}
		months old) for{' '}
		{7} years now. Getting my head around research, programming and languages. Drinking cappucino in
		the morning, jogging and doing Diss-co music in the evening. As part of my day job I work on data
		visualization and educational Games!
	</p>
	<div class=" mt-16 flex-grow flex">
		<div class="flex-grow mr-6">
			<div class=" item1 h-48 flex flex-col">
				<Pic src="/whiteboard.jpg" className="rounded-full box1 w-full h-full bg-cover bg-center">
					<h2 class="">
						<span class="text-3xl  py-1 uppercase font-mono"
							><Title {translateFirst} {translateSec} {translateThird}>projects</Title></span
						>
					</h2>
				</Pic>
			</div>
			<div class=" h-32 item2  flex flex-col ">
				<Pic src="/mixer.jpg" className="bg-center bg-cover box1 ">
					<h2 class="">
						<span class="text-3xl  py-1 uppercase font-mono"
							><Title {translateFirst} {translateSec} {translateThird}>mixtapes</Title></span
						>
					</h2>
				</Pic>
			</div>
			<div class="h-32 flex  flex-col">
				<Pic src="/tickle.jpg" className="box3 cover bg-cover bg-center w-full h-full ">
					<h2 class="bottom-0">
						<span class=" text-3xl py-1 uppercase font-mono"
							><Title {translateFirst} {translateSec} {translateThird}>TICKLE</Title></span
						>
					</h2>
				</Pic>
			</div>
		</div>
		<div class="flex flex-col flex-grow h-96">
			<Pic src="me_blurred.jpg" className="  box1 bg-center bg-cover w-full h-full ">
				<h2>
					<span class="text-3xl  py-1 uppercase font-mono"
						><Title {translateFirst} {translateSec} {translateThird}>work</Title></span
					>
				</h2>
			</Pic>
		</div>
		<div class="flex flex-col border-round flex-grow h-96">
			<Pic src="/holger.jpg" className=" box1 bg-cover bg-center w-full h-full ">
				<span class="py-1 text-3xl uppercase font-mono"
					><Title {translateFirst} {translateSec} {translateThird}>Vinyl</Title></span
				>
			</Pic>
		</div>
	</div>
</div>

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
	.container {
		margin-left: 20px;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));

		grid-template-rows: repeat(6, 1fr);
		gap: 35px 35px;
		grid-template-areas:
			'left-top right-top .'
			'center-right center-left .'
			'bottom-left bottom-right .';
	}
	.item1 {
		grid-area: left-top;
	}
	.item2 {
		grid-area: right-top;
	}
	.item3 {
		grid-area: center-right;
	}
	.item4 {
		grid-area: center-left;
	}
	.item5 {
		grid-area: bottom-left;
	}
	.item6 {
		grid-area: bottom-right;
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		grid-template-rows: repeat(4, 20px);
		// column-gap: 25px;
		// row-gap: 20px;
	}
	.firstPic {
		/* background-image: url(/whiteboard.jpg); */
		grid-column: span 7;
		grid-row: auto;
	}
	.secPic {
		grid-column: span 7;
		grid-row: auto;
		// grid-row: 2 / span 6;
	}
	.thirdPic {
		grid-column: span 4;
		grid-row: auto;
		// grid-row: 11 / span 6;
	}
	.fourthPic {
		grid-column: span 5;
		grid-row: auto;
		// grid-row: 11 / span 7;
	}
	.fifthPic {
		grid-column: span 7;
		grid-row: auto;
		// grid-row: 8 / span 8;
	}
</style>
