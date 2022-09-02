<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { quartIn } from 'svelte/easing';

	interface Logo {
		src: string;
		alt: string;
	}

	export let logos: Logo[];

	let index = 0;

	const next = () => {
		index = (index + 1) % logos.length;
	};

	setInterval(next, 3000);
</script>

<!-- markup (zero or more items) goes here -->
{#each [logos[index]] as { src, alt } (index)}
	<img
		on:click={next}
		in:fade={{ duration: 500, easing: quartIn }}
		{src}
		{alt}
		width="400"
		height="400"
		class="absolute h-25 w-auto md:h-60 object-contain"
	/>
{/each}
