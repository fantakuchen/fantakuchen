<script lang="ts">
	import { Gamepad, Github } from 'lucide-svelte';

	export interface GameCardProps {
		title: string;
		description: string;
		image: string;
		tags: string[];
		github: string;
		features?: string[];
		compact?: boolean;
	}

	export let title: string;
	export let description: string;
	export let image: string;
	export let tags: string[];
	export let github: string;
	export let features: string[] = [];
	export let compact = false;
</script>

{#if compact}
	<div class="group relative bg-white/90 rounded-lg overflow-hidden hover:scale-105 transition-transform shadow-lg">
		<img
			src={image}
			alt={title}
			class="w-full aspect-[16/9] object-cover"
		/>
		<div class="p-4">
			<h3 class="font-medium mb-2">{title}</h3>
			<div class="flex flex-wrap gap-2 mb-3">
				{#each tags as tag}
					<span class="text-xs px-2 py-1 bg-[#FFE4C4] rounded text-[#4A3B38]">{tag}</span>
				{/each}
			</div>
			<div class="flex justify-end">
				<a 
					href={github}
					target="_blank" 
					rel="noopener noreferrer"
					class="opacity-0 group-hover:opacity-100 transition-opacity bg-[#FF6B4A] hover:bg-[#FF8366] px-4 py-2 rounded text-white"
				>
					Play Now
				</a>
			</div>
		</div>
	</div>
{:else}
	<div class="bg-white/90 rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.01] transition-transform">
		<div class="md:flex">
			<div class="md:w-1/3">
				<img
					src={image}
					alt={title}
					class="w-full h-full object-cover"
				/>
			</div>
			<div class="p-6 md:w-2/3">
				<h2 class="text-2xl font-bold text-[#4A3B38] mb-2">{title}</h2>
				<div class="flex flex-wrap gap-2 mb-4">
					{#each tags as tag}
						<span class="text-xs px-2 py-1 bg-[#FFE4C4] rounded text-[#4A3B38]">{tag}</span>
					{/each}
				</div>
				<p class="text-[#4A3B38]/80 mb-4">{description}</p>
				
				{#if features.length > 0}
					<div class="mb-6">
						<h3 class="font-semibold text-[#4A3B38] mb-2">Key Features:</h3>
						<ul class="grid grid-cols-2 gap-2">
							{#each features as feature}
								<li class="flex items-center gap-2 text-sm text-[#4A3B38]/80">
									<Gamepad class="w-4 h-4 text-[#FF6B4A]" />
									{feature}
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				<div class="flex justify-end">
					<a 
						href={github}
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
{/if} 