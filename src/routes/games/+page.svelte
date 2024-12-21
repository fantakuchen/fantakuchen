<script lang="ts">
	import { Gamepad, Tag, Github } from 'lucide-svelte';

	const games = [
		{
			title: 'Ant Keeper',
			description: 'Build and manage your own ant colony! Start with a single queen ant and grow your colony into a thriving empire. Collect resources, expand your territory, and protect your ants from predators in this engaging simulation game.',
			image: '/images/ant-keeper.webp',
			tags: ['Simulation', 'Strategy', 'Management'],
			github: 'https://github.com/JamesHusband/Ant-Keeper',
			features: [
				'Start with a single queen ant',
				'Manage colony resources',
				'Defend against predators',
				'Expand your territory'
			]
		},
		{
			title: 'Tour Program',
			description: 'Experience the thrill of being a tour guide! Navigate through beautiful locations, manage your group, and create unforgettable experiences. A unique simulation game that puts you in charge of organizing and leading amazing tours.',
			image: '/images/tour-program.jpeg',
			tags: ['Simulation', 'Adventure', 'Management'],
			github: 'https://github.com/JamesHusband/TourProgram',
			features: [
				'Lead tour groups',
				'Explore locations',
				'Manage group dynamics',
				'Create unique experiences'
			]
		}
	];

	let selectedTags: string[] = [];
	const allTags = Array.from(new Set(games.flatMap(game => game.tags)));

	function toggleTag(tag: string) {
		selectedTags = selectedTags.includes(tag)
			? selectedTags.filter(t => t !== tag)
			: [...selectedTags, tag];
	}

	$: filteredGames = selectedTags.length > 0
		? games.filter(game => selectedTags.some(tag => game.tags.includes(tag)))
		: games;
</script>

<div class="container mx-auto px-4 py-12">
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold text-[#4A3B38] mb-4">Our Games</h1>
		<p class="text-[#4A3B38]/80 max-w-2xl mx-auto">
			Explore our collection of free, open-source games. No microtransactions, no loot boxes - just pure gaming fun!
		</p>
	</div>

	<!-- Tags Filter -->
	<div class="mb-8">
		<div class="flex items-center gap-2 mb-3">
			<Tag class="w-5 h-5 text-[#FF6B4A]" />
			<h2 class="text-lg font-semibold text-[#4A3B38]">Filter by Tags</h2>
		</div>
		<div class="flex flex-wrap gap-2">
			{#each allTags as tag}
				<button
					class="px-3 py-1 rounded-full text-sm transition-colors"
					class:bg-[#FF6B4A]={selectedTags.includes(tag)}
					class:text-white={selectedTags.includes(tag)}
					class:bg-[#FFE4C4]={!selectedTags.includes(tag)}
					class:text-[#4A3B38]={!selectedTags.includes(tag)}
					on:click={() => toggleTag(tag)}
				>
					{tag}
				</button>
			{/each}
		</div>
	</div>

	<!-- Games Grid -->
	<div class="grid gap-8">
		{#each filteredGames as game}
			<div class="bg-white/90 rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.01] transition-transform">
				<div class="md:flex">
					<div class="md:w-1/3">
						<img
							src={game.image}
							alt={game.title}
							class="w-full h-full object-cover"
						/>
					</div>
					<div class="p-6 md:w-2/3">
						<h2 class="text-2xl font-bold text-[#4A3B38] mb-2">{game.title}</h2>
						<div class="flex flex-wrap gap-2 mb-4">
							{#each game.tags as tag}
								<span class="text-xs px-2 py-1 bg-[#FFE4C4] rounded text-[#4A3B38]">{tag}</span>
							{/each}
						</div>
						<p class="text-[#4A3B38]/80 mb-4">{game.description}</p>
						
						<!-- Features List -->
						<div class="mb-6">
							<h3 class="font-semibold text-[#4A3B38] mb-2">Key Features:</h3>
							<ul class="grid grid-cols-2 gap-2">
								{#each game.features as feature}
									<li class="flex items-center gap-2 text-sm text-[#4A3B38]/80">
										<Gamepad class="w-4 h-4 text-[#FF6B4A]" />
										{feature}
									</li>
								{/each}
							</ul>
						</div>

						<div class="flex justify-end">
							<a 
								href={game.github}
								target="_blank" 
								rel="noopener noreferrer"
								class="inline-flex items-center gap-2 bg-[#FF6B4A] hover:bg-[#FF8366] text-white px-6 py-2 rounded-lg transition-colors"
							>
								<Github class="w-5 h-5" />
								Play Now
							</a>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div> 