<script lang="ts">
	import { PUBLIC_PROJECT_NAME } from '$env/static/public';
	import { Ship } from 'lucide-svelte';
	import { cn } from '$lib/utils';

	export let title: string = PUBLIC_PROJECT_NAME;
	export let showIcon: boolean = true;
	export let iconSize: number = 8;
</script>

<header
	class={cn(
		'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
	)}
>
	<div class="container flex h-14 max-w-screen-2xl items-center">
		<div class="mr-4 flex justify-between w-full">
			<a href="/" class="mr-6 flex items-center space-x-2">
				{#if showIcon}
					<Ship class={cn(`h-${iconSize} w-${iconSize}`)} role="img" aria-hidden="true" />
				{/if}
				<span class="font-bold inline-block">{title}</span>
			</a>
		</div>
	</div>
</header>
