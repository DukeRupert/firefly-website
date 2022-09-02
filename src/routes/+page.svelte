<script lang="ts">
	import Cta from '$lib/components/CTA.svelte';
	import Events from '$lib/components/Events.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import LogoCloud from '$lib/components/LogoCloud.svelte';
	import Card from '$lib/components/Card.svelte';
	import { EVENTS } from '$lib/constants';

	const title = 'Ten Mile Creek Brewing | A somewhat organized community';
	const description = `A somewhat organized community. Bringing you the best beer in Helena, MT.`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<Hero />
<LogoCloud />
<Events Events={EVENTS} />
<Card />
