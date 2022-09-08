<script lang="ts">
	import Stars from './Stars.svelte';
	import { fade } from 'svelte/transition';
	import { quartIn, quartOut } from 'svelte/easing';

	export let testimonials = [
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

	let index = 0;

	const next = () => {
		index = (index + 1) % testimonials.length;
	};

	setInterval(next, 3000);
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<section class="overflow-hidden bg-background py-12 md:py-20">
	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		
		{#each [testimonials[index]] as item (index)}
	<div
		on:click={next}
		in:fade={{ delay: 200, duration: 500, easing: quartIn }}
		class="relative max-h-[500px] h-[25vh]"
	>
		<div class="relative">
			<blockquote class="mt-10">
				<div
					class="mx-auto max-w-3xl text-center text-sm md:text-3xl font-medium leading-9 text-gray-700 dark:text-gray-200"
				>
					<p class="line-clamp-3">
						&ldquo;{item.review}&rdquo;
					</p>
					<Stars rating={item.rating} />
				</div>
				<footer class="mt-8">
					<div class="md:flex md:items-center md:justify-center">
						<div class="md:flex-shrink-0">
							<img
								class="mx-auto h-10 w-10 object-contain"
								src={item.image.src}
								alt={item.image.alt}
							/>
						</div>
						<div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
							<div class="text-base font-medium text-gray-600 dark:text-gray-300">
								{item.firstName}
								{item.lastName}
							</div>
							<svg class="mx-1 hidden h-5 w-5 text-gray-600 dark:text-gray-300 md:block" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 0h3L9 20H6l5-20z" />
              </svg>

              <div class="text-base font-medium text-gray-600 dark:text-gray-300 capitalize">{item.title}, {item.company}</div>
						</div>
					</div>
				</footer>
			</blockquote>
		</div>
	</div>
{/each}
	</div>
</section>
