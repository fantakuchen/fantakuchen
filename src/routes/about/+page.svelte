<script lang="ts">
	import { Cake, Users, Gamepad, MessageSquare } from 'lucide-svelte';
</script>

<div class="container mx-auto px-4 py-12">
	<h1 class="text-4xl font-bold text-[#4A3B38] mb-12 text-center">Willkommen zu Fantakuchen!</h1>

	<div class="grid gap-8 max-w-4xl mx-auto">
		<!-- Why Section -->
		<div class="bg-white/90 rounded-lg p-6 shadow-lg transform hover:scale-[1.02] transition-transform">
			<div class="flex items-start gap-4">
				<div class="bg-[#FF6B4A] p-3 rounded-lg">
					<Cake class="w-6 h-6 text-white" />
				</div>
				<div>
					<h2 class="text-xl font-bold text-[#4A3B38] mb-2">WHY FANTACAKE??</h2>
					<p class="text-[#4A3B38]/80">
						Because, I watched <a 
							href="https://www.youtube.com/watch?v=RmqFPzFAIDY" 
							target="_blank" 
							rel="noopener noreferrer"
							class="text-[#FF6B4A] hover:text-[#FF8366] underline"
						>This Video</a> at an ungodly hour of the morning, and felt clever using FantaKuchen...
					</p>
				</div>
			</div>
		</div>

		<!-- Who Section -->
		<div class="bg-white/90 rounded-lg p-6 shadow-lg transform hover:scale-[1.02] transition-transform">
			<div class="flex items-start gap-4">
				<div class="bg-[#FF6B4A] p-3 rounded-lg">
					<Users class="w-6 h-6 text-white" />
				</div>
				<div>
					<h2 class="text-xl font-bold text-[#4A3B38] mb-2">WHO FANTACAKE??</h2>
					<p class="text-[#4A3B38]/80">
						An open source collective of people (well, me anyway) with far too much free time (me again...) and share an enjoyment of cake.
					</p>
				</div>
			</div>
		</div>

		<!-- What Section -->
		<div class="bg-white/90 rounded-lg p-6 shadow-lg transform hover:scale-[1.02] transition-transform">
			<div class="flex items-start gap-4">
				<div class="bg-[#FF6B4A] p-3 rounded-lg">
					<Gamepad class="w-6 h-6 text-white" />
				</div>
				<div>
					<h2 class="text-xl font-bold text-[#4A3B38] mb-2">WHAT FANTACAKE??</h2>
					<p class="text-[#4A3B38]/80">
						Open Organisation for indie game development (Phaser, Three, Unreal.js) with no "suprise mechanics" or "buy this box" to win mechanics.
					</p>
					<div class="flex flex-wrap gap-2 mt-3">
						{#each ['Phaser', 'Three.js', 'Unreal.js'] as tech}
							<span class="text-xs px-2 py-1 bg-[#FFE4C4] rounded text-[#4A3B38]">{tech}</span>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- Want Section -->
		<div class="bg-white/90 rounded-lg p-6 shadow-lg transform hover:scale-[1.02] transition-transform">
			<div class="flex items-start gap-4">
				<div class="bg-[#FF6B4A] p-3 rounded-lg">
					<MessageSquare class="w-6 h-6 text-white" />
				</div>
				<div>
					<h2 class="text-xl font-bold text-[#4A3B38] mb-2">WANT FANTACAKE??</h2>
					<p class="text-[#4A3B38]/80 mb-4">
						If you are interested in making multiplayer arcade games, get in touch!
					</p>
					<a 
						href="https://github.com/JamesHusband" 
						target="_blank" 
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 bg-[#FF6B4A] hover:bg-[#FF8366] text-white px-6 py-2 rounded-lg transition-colors"
					>
						Join Us on GitHub
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
