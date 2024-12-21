<script>
	import '../styles/app.postcss';
</script>

<div class="min-h-screen bg-[#FFE4C4] bg-cover bg-center bg-no-repeat pt-16">
	<main class="container mx-auto px-4">
		<slot />
	</main>
</div>

<style>
	:global(body) {
		background-color: #FFE4C4;
		margin: 0;
		padding: 0;
	}

	:global(*) {
		scroll-behavior: smooth;
	}
</style>
