<script>
	import { browser, dev } from '$app/environment';
	import { page } from '$app/stores';
	import { getMeta } from '$lib/meta';
	import {
		PUBLIC_DEFAULT_DESCRIPTION,
		PUBLIC_DEFAULT_TITLE,
		PUBLIC_PROJECT_NAME
	} from '$env/static/public';
	import Header from '$lib/components/Header.svelte';
	import { derived } from 'svelte/store';

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

<Header />

<slot />
