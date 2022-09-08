<script lang="ts">
	import CTA from '$lib/components/CTA.svelte';
	import LogoCloud from '$lib/components/LogoCloud.svelte';
	import Card from '$lib/components/Card.svelte';
	import SimpleTestimonial from '$lib/components/SimpleTestimonial.svelte';
	import SimpleHero from '$lib/components/Hero/SimpleHero.svelte';
	import Features from '$lib/components/Features.svelte'
	import ContactForm from '$lib/components/ContactForm.svelte'

	const title = 'The Brewhouse - Way more than just a pub';
	const description = `Welcome! The Brewhouse is one of Helena’s most respected restaurants. We take pride in our friendly`;

	const Hero = {
		title: {
			text: 'Professional',
			focus: 'Web Developers'
		},
		text: `First impressions matter. We create exceptional online experiences to help our client's succeed. Proudly based in Helena, MT.`,
		primaryAction: {
			label: 'Get started',
			href: '#contact-us'
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

	const testimonials = [
		{
			firstName: 'Kagen',
			lastName: 'Cox',
			title: 'owner',
			company: 'Kagen Coffee & Crepes',
			rating: 5,
			review:
				'Firefly is an absolutely must have company working for you in your corner! they are super approachable, helpful and friendly! if you are looking to take your company to the next level I would highly recommend you give Firefly a call!',
			image: { src: '/images/kc_icon.jpg', alt: 'profile image for Kagen Cox' }
		},
		// {
		// 	firstName: 'Roz',
		// 	lastName: 'Rushing',
		// 	rating: 5,
		// 	review:
		// 		'Best food on our roadtrip! I’d drive another 25 hours for those sautéed mushrooms!! Yummy! Great staff and quick service. Don’t miss the opportunity to eat here! Tyler is an amazing server!',
		// 	image: { src: '/images/profile/scottRushing.png', alt: 'profile image for Roz Rushing' }
		// },
		// {
		// 	firstName: 'Jamie',
		// 	lastName: 'Janicke',
		// 	rating: 5,
		// 	review:
		// 		'Come to Helena often and this was our first time at the Brewhouse and WE WILL be back!! Great food and service with local beers. Freeking fantastic 👍🤩🤩🤩',
		// 	image: { src: '/images/profile/jamieJanicke.png', alt: 'profile image for Jamie Janicke' }
		// }
	];

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
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<SimpleHero {Hero} />
<SimpleTestimonial {testimonials} />
<Features />
<LogoCloud {logos} />
<ContactForm />