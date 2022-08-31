<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quadOut, quadIn } from 'svelte/easing';

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
		in:fly={{ x: 200, delay: 200, duration: 500, easing: quadOut }}
		out:fly={{ x: -200, duration: 300, easing: quadIn }}
		{src}
		{alt}
		class="absolute h-25 w-auto md:h-60 object-contain"
	/>
{/each}
