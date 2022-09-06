<script lang="ts">
	import Cta from '$lib/components/CTA.svelte';
	
	import LogoCloud from '$lib/components/LogoCloud.svelte';
	import Card from '$lib/components/Card.svelte';
	import SimpleTestimonial from '$lib/components/SimpleTestimonial.svelte';
	import SimpleHero from '$lib/components/Hero/SimpleHero.svelte';
	import Features from '$lib/components/Features.svelte'

	const title = 'The Brewhouse - Way more than just a pub';
	const description = `Welcome! The Brewhouse is one of Helena’s most respected restaurants. We take pride in our friendly`;

	const Hero = {
		title: {
			text: 'Professional',
			focus: 'Web Developers'
		},
		text: `We create exceptional online experiences that compliment your business. Proudly based in Helena, MT.`,
		primaryAction: {
			label: 'Get started',
			href: '/contact-us'
		},
		secondaryAction: {
			label: 'Learn More',
			href: '#features'
		},
		image: {
			src: '/images/laptop-blue.png',
			alt: 'A blue laptop with abstract code on the screen'
		}
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<SimpleHero {Hero} />
<SimpleTestimonial />
<Features />