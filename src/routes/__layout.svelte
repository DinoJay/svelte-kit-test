<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<main class="shadow-md overflow-hidden max-w-prose p-8">
	<slot />
</main>

<style lang="scss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		background: url('/linedpaper.png');
		font-family: 'Arimo', sans-serif;
		/* @apply border-2 border-black; */
	}

	main {
		background: url('/linedpaper.png');
		font-family: 'Arimo', sans-serif;
		flex: 1;
		display: flex;
		flex-direction: column;
		/* padding: 1rem; */
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}

	.sketchy {
		// padding: 4rem 8rem;
		display: inline-block;
		border: 3px solid #333333;
		font-size: 2.5rem;
		border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
		text-transform: uppercase;
		letter-spacing: 0.3ch;
		background: #ffffff;
		position: relative;

		&::before {
			content: '';
			border: 2px solid #353535;
			display: block;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
			border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
		}
	}
</style>
