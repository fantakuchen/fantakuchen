<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	// Featured games data
	const featuredGames = [
		{
			title: 'Ant Keeper',
			description: 'Build and manage your own ant colony! Start with a single queen ant and grow your colony into a thriving empire. Collect resources, expand your territory, and protect your ants from predators in this engaging simulation game.',
			image: '/images/ant-keeper.webp',
			tags: ['Simulation', 'Strategy', 'Management']
		},
		{
			title: 'Tour Program',
			description: 'Experience the thrill of being a tour guide! Navigate through beautiful locations, manage your group, and create unforgettable experiences. A unique simulation game that puts you in charge of organizing and leading amazing tours.',
			image: '/images/tour-program.jpeg',
			tags: ['Simulation', 'Adventure', 'Management']
		}
	];

	// Game grid data
	const games = [
		{
			title: 'Ant Keeper',
			image: '/images/ant-keeper.webp',
			tags: ['Simulation', 'Strategy'],
			github: 'https://github.com/JamesHusband/Ant-Keeper'
		},
		{
			title: 'Tour Program',
			image: '/images/tour-program.jpeg',
			tags: ['Simulation', 'Adventure'],
			github: 'https://github.com/JamesHusband/TourProgram'
		}
	];

	let currentSlide = 0;

	function nextSlide() {
		currentSlide = (currentSlide + 1) % featuredGames.length;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + featuredGames.length) % featuredGames.length;
	}

	// Auto-advance carousel every 5 seconds
	setInterval(() => {
		if (featuredGames.length > 1) {
			nextSlide();
		}
	}, 5000);
</script>

<main class="min-h-screen bg-[#FFE4C4] text-[#4A3B38]">
	<!-- Featured Games Carousel -->
	<section class="relative h-[600px] mb-8">
		<div class="absolute inset-0 overflow-hidden">
			{#each featuredGames as game, i}
				<div
					class="absolute inset-0 transition-opacity duration-500"
					class:opacity-100={i === currentSlide}
					class:opacity-0={i !== currentSlide}
				>
					<div class="absolute inset-0 bg-gradient-to-r from-[#4A3B38]/70 to-transparent z-10" />
					<img
						src={game.image}
						alt={game.title}
						class="w-full h-full object-cover"
					/>
					<div class="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-[#4A3B38]/90">
						<div class="container mx-auto">
							<h1 class="text-5xl font-bold mb-4 text-[#FFE4C4]">{game.title}</h1>
							<p class="text-lg mb-6 max-w-2xl text-[#FFE4C4]/90">{game.description}</p>
							<div class="flex items-center gap-4">
								<a 
									href={game.title === 'Ant Keeper' 
										? 'https://github.com/JamesHusband/Ant-Keeper'
										: 'https://github.com/JamesHusband/TourProgram'} 
									target="_blank" 
									rel="noopener noreferrer"
									class="bg-[#FF6B4A] hover:bg-[#FF8366] px-8 py-3 rounded-lg font-semibold flex items-center gap-2 text-white transition-colors"
								>
									Play Now
								</a>
								<div class="flex flex-wrap gap-2">
									{#each game.tags as tag}
										<span class="text-sm px-3 py-1 bg-[#FFE4C4]/20 rounded text-[#FFE4C4]">{tag}</span>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
		{#if featuredGames.length > 1}
			<button
				class="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-[#FFE4C4]/10 hover:bg-[#FFE4C4]/20 rounded-full z-30 text-[#FFE4C4]"
				on:click={prevSlide}
			>
				<ChevronLeft class="w-8 h-8" />
			</button>
			<button
				class="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-[#FFE4C4]/10 hover:bg-[#FFE4C4]/20 rounded-full z-30 text-[#FFE4C4]"
				on:click={nextSlide}
			>
				<ChevronRight class="w-8 h-8" />
			</button>
		{/if}
	</section>

	<!-- Games Grid -->
	<section class="container mx-auto px-4 py-8">
		<h2 class="text-2xl font-bold mb-6">Our Games</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each games as game}
				<div class="group relative bg-white/90 rounded-lg overflow-hidden hover:scale-105 transition-transform shadow-lg">
					<img
						src={game.image}
						alt={game.title}
						class="w-full aspect-[16/9] object-cover"
					/>
					<div class="p-4">
						<h3 class="font-medium mb-2">{game.title}</h3>
						<div class="flex flex-wrap gap-2 mb-3">
							{#each game.tags as tag}
								<span class="text-xs px-2 py-1 bg-[#FFE4C4] rounded text-[#4A3B38]">{tag}</span>
							{/each}
						</div>
						<div class="flex justify-end">
							<a 
								href={game.github}
								target="_blank" 
								rel="noopener noreferrer"
								class="opacity-0 group-hover:opacity-100 transition-opacity bg-[#FF6B4A] hover:bg-[#FF8366] px-4 py-2 rounded text-white"
							>
								Play Now
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
</main>

<style>
	:global(body) {
		background-color: #FFE4C4;
		margin: 0;
		padding: 0;
	}
</style>
