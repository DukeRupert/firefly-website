<script lang="ts">
	import Cta from '$lib/components/CTA.svelte';
	import Events from '$lib/components/Events.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import LogoCloud from '$lib/components/LogoCloud.svelte';
	import Card from '$lib/components/Card.svelte';
	import SimpleTestimonial from '$lib/components/SimpleTestimonial.svelte';

	const title = 'The Brewhouse - Way more than just a pub';
	const description = `Welcome! The Brewhouse is one of Helena’s most respected restaurants. We take pride in our friendly`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<Hero />
<SimpleTestimonial />
