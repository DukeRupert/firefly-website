<script lang="ts">
	import { quintIn, quintOut } from 'svelte/easing';

	import { fade } from 'svelte/transition';
	interface Logo {
		src: string;
		alt: string;
	}
	const logos: Logo[] = [
		{ src: 'images/logo-kcc.svg', alt: 'Kagen Coffee & Crepes logo' },
		{ src: 'images/logo-osc.png', alt: 'One Sleep Company logo' },
		{ src: 'images/logo-fts.png', alt: 'FtS Excavation logo' },
		{ src: 'images/logo-trbc.jpg', alt: 'The Ridge Bible Church logo' },
		{ src: 'images/logo-ag.webp', alt: 'Aestus cRPG Guides logo' }
	];
	let index = 0;

	const next = () => {
		index = (index + 1) % logos.length;
	};

	setInterval(next, 3000);
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative mt-16 md:mt-24 lg:mt-32 bg-white max-w-6xl mx-auto rounded-lg  py-16 sm:py-24 lg:py-32">
	<div class="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
		<h2
			class="text-center text-3xl font-extrabold sm:text-4xl uppercase text-gray-900 tracking-tight"
		>
			Proudly trusted by
		</h2>
		<div class="mt-8 h-32 w-64 relative flex mx-auto">
			<!-- markup (zero or more items) goes here -->
{#each [logos[index]] as { src, alt } (index)}
	<img
		on:click={next}
		in:fade={{ duration: 500, easing: quintIn }}
		{src}
		{alt}
		class="absolute h-40 w-60 object-contain"
	/>
{/each}
		</div>
	</div>
</div>

