<script lang="ts">
	import { Rocket, Palette, Zap, Copy, Check, Blocks, TestTube, Scale } from 'lucide-svelte';

	let copied = false;
	const copyCommand = async () => {
		const command = 'git clone https://github.com/JamesHusband/sveltstrap';
		await navigator.clipboard.writeText(command);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	};
</script>

<main class="min-h-screen blueprint-bg text-white overflow-hidden flex flex-col">
	<!-- Header Section -->
	<section class="fixed top-0 left-0 right-0 text-center py-12 z-50 bg-[#0a192f] shadow-lg">
		<div class="container mx-auto px-4">
			<h1 class="text-4xl font-bold mb-3 text-blue-300">SveltStrap</h1>
			<p class="text-lg text-blue-200/80 mb-6">A modern, lightweight SvelteKit boilerplate</p>
			<div class="flex justify-center gap-4">
				<a
					href="https://github.com/JamesHusband/sveltstrap"
					class="inline-flex items-center px-5 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors"
				>
					Get Started
				</a>
				<a
					href="/docs"
					class="inline-flex items-center px-5 py-2.5 border-2 border-blue-400 rounded-lg hover:border-blue-300 hover:text-blue-300 transition-colors"
				>
					Documentation
				</a>
			</div>
		</div>
	</section>

	<!-- Content -->
	<div class="flex-1 pt-[240px]">
		<div class="container mx-auto px-4">
			<section class="grid md:grid-cols-2 gap-6 mb-12">
				<div class="p-5 rounded-lg border border-blue-400/30 bg-blue-950/30 backdrop-blur-sm">
					<Blocks class="w-10 h-10 text-blue-300 mb-3" />
					<h2 class="text-lg font-semibold mb-2 text-blue-200">Component Based</h2>
					<p class="text-blue-200/80 text-sm">
						Built with reusable components using Svelte's powerful component system for maximum
						flexibility and maintainability.
					</p>
				</div>

				<div class="p-5 rounded-lg border border-blue-400/30 bg-blue-950/30 backdrop-blur-sm">
					<Palette class="w-10 h-10 text-blue-300 mb-3" />
					<h2 class="text-lg font-semibold mb-2 text-blue-200">Modern Styling</h2>
					<p class="text-blue-200/80 text-sm">
						Powered by TailwindCSS and shadcn-svelte for beautiful, responsive, and customizable
						designs.
					</p>
				</div>

				<div class="p-5 rounded-lg border border-blue-400/30 bg-blue-950/30 backdrop-blur-sm">
					<TestTube class="w-10 h-10 text-blue-300 mb-3" />
					<h2 class="text-lg font-semibold mb-2 text-blue-200">Full Test Suite</h2>
					<p class="text-blue-200/80 text-sm">
						Comprehensive testing with ViTest for unit tests, Playwright for E2E, and Storybook for
						component testing.
					</p>
				</div>

				<div class="p-5 rounded-lg border border-blue-400/30 bg-blue-950/30 backdrop-blur-sm">
					<Scale class="w-10 h-10 text-blue-300 mb-3" />
					<h2 class="text-lg font-semibold mb-2 text-blue-200">Scalable As Standard</h2>
					<p class="text-blue-200/80 text-sm">
						Built with scalability in mind, featuring a well-organized structure and best practices
						for growing applications.
					</p>
				</div>
			</section>

			<section class="text-center">
				<h2 class="text-2xl font-bold mb-3 text-blue-300">Ready to Build?</h2>
				<p class="text-lg text-blue-200/80 mb-6">Start your next project with SveltStrap today.</p>
				<div class="relative inline-block">
					<pre
						class="bg-blue-950/50 border border-blue-400/30 text-blue-200 p-4 pr-12 rounded-lg text-left backdrop-blur-sm text-sm"><code
							><span class="cursor">></span
							> git clone https://github.com/JamesHusband/sveltstrap</code
						></pre>
					<button
						on:click={copyCommand}
						class="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-400 hover:text-blue-300 transition-colors"
						aria-label="Copy command"
					>
						{#if copied}
							<Check class="w-5 h-5" />
						{:else}
							<Copy class="w-5 h-5" />
						{/if}
					</button>
				</div>
			</section>
		</div>
	</div>
</main>

<style>
	.blueprint-bg {
		background-color: #0a192f;
		background-image: linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px),
			linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px);
		background-size: 2rem 2rem;
		position: relative;
	}

	.cursor {
		animation: cursor 1s infinite step-end;
		margin-right: 0.5rem;
	}

	@keyframes cursor {
		50% {
			opacity: 0;
		}
	}
</style>
