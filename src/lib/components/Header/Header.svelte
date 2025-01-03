<script lang="ts" context="module">
	export interface HeaderProps {
		isScrolled: boolean;
	}
</script>

<script lang="ts">
	export let isScrolled: boolean;

	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Games', href: '/games' },
		{ label: 'About', href: '/about' }
	];
</script>

<div
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
	class:bg-[#FF6B4A]={isScrolled}
	class:bg-transparent={!isScrolled}
>
	<div class="container mx-auto px-4">
		<div class="flex items-center justify-between h-16">
			<div class="flex items-center space-x-8">
				<a href="/" class="flex items-center">
					<img src="/images/fantakuchen.webp" alt="Fantakuchen" class="h-10 w-auto" />
				</a>
				<nav class="hidden md:flex space-x-6">
					{#each navItems as { label, href }}
						<a 
							{href}
							class="transition-colors font-medium"
							class:text-[#4A3B38]={!isScrolled}
							class:text-[#FFE4C4]={isScrolled}
							style="color: {isScrolled ? '#FFE4C4' : '#4A3B38'}"
						>
							{label}
						</a>
					{/each}
				</nav>
			</div>
			<div class="flex items-center space-x-4">
				<button 
					class="md:hidden transition-colors"
					style="color: {isScrolled ? '#FFE4C4' : '#4A3B38'}"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	a:hover {
		color: #FF8366 !important;
	}

	button:hover {
		color: #FF8366 !important;
	}
</style> 