<script>
	import { browser, dev } from '$app/environment';
	import { page } from '$app/stores';
	import { getMeta } from '$lib/meta';
	import {
		PUBLIC_DEFAULT_DESCRIPTION,
		PUBLIC_DEFAULT_TITLE,
		PUBLIC_PROJECT_NAME
	} from '$env/static/public';
	import { derived } from 'svelte/store';
	import { onMount } from 'svelte';

	const meta = derived(page, ($page) =>
		getMeta({
			defaultTitle: PUBLIC_DEFAULT_TITLE,
			defaultDescription: PUBLIC_DEFAULT_DESCRIPTION,
			defaultOGImage: '/socialcard.jpeg',
			routeMeta: $page.data?.meta ?? {},
			url: $page.url,
			pageParam: $page.params?.page ?? ''
		})
	);

	let isScrolled = false;

	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', () => {
				isScrolled = window.scrollY > 100;
			});
		}
	});
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width" />
	<title>{$meta.title}</title>
	<meta name="description" content={$meta.description} />
	<link rel="canonical" href={$meta.canonicalUrl} />

	<link rel="icon" href="/favicon.ico" sizes="32x32" />
	<link rel="icon" href="/icon.svg" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/manifest.webmanifest" />

	<meta property="og:type" content={$meta.ogType} />
	<meta property="og:title" content={$meta.ogTitle} />
	<meta property="og:description" content={$meta.ogDescription} />
	<meta property="og:image" content={$meta.ogImage} />
	<meta property="og:url" content={$meta.ogUrl} />

	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<!-- Navigation Menu -->
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
					{#each ['Home', 'Games', 'About'] as item}
						<a 
							href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
							class="transition-colors font-medium"
							class:text-[#4A3B38]={!isScrolled}
							class:text-[#FFE4C4]={isScrolled}
							style="color: {isScrolled ? '#FFE4C4' : '#4A3B38'}"
						>
							{item}
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

<slot />

<style>
	a:hover {
		color: #FF8366 !important;
	}

	button:hover {
		color: #FF8366 !important;
	}
</style>
