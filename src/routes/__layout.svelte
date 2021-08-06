<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<main class="shadow-md">
	<slot />
</main>

<footer />

<style>
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
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
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
</style>
