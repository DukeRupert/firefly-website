<script lang="ts">
	import Cta from '$lib/components/CTA.svelte';
	import Events from '$lib/components/Events.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import LogoCloud from '$lib/components/LogoCloud.svelte';
	import Card from '$lib/components/Card.svelte';
	import { EVENTS } from '$lib/constants';
</script>

<Hero />
<LogoCloud />
<Events Events={EVENTS} />
<Card />
