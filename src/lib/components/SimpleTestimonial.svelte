<script lang="ts">
	import Carousel from './Carousel.svelte';
	import Stars from './Stars.svelte';

	export let testimonials = [
		{
			firstName: 'Emilee',
			lastName: 'Scott',
			rating: 5,
			review:
				'We had amazing service!  The food was exceptional and the beer was good too.  We would definitely be frequent customers if we lived in the area.',
			image: { src: '/images/profile/emileeScott.png', alt: 'profile image for Emilee Scott' }
		},
		{
			firstName: 'Roz',
			lastName: 'Rushing',
			rating: 5,
			review:
				'Best food on our roadtrip! I’d drive another 25 hours for those sautéed mushrooms!! Yummy! Great staff and quick service. Don’t miss the opportunity to eat here! Tyler is an amazing server!',
			image: { src: '/images/profile/scottRushing.png', alt: 'profile image for Roz Rushing' }
		},
		{
			firstName: 'Jamie',
			lastName: 'Janicke',
			rating: 5,
			review:
				'Come to Helena often and this was our first time at the Brewhouse and WE WILL be back!! Great food and service with local beers. Freeking fantastic 👍🤩🤩🤩',
			image: { src: '/images/profile/jamieJanicke.png', alt: 'profile image for Jamie Janicke' }
		}
	];
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<section class="overflow-hidden bg-background py-12 md:py-20 lg:py-24">
	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- {#each testimonials as t}
			<div class="relative">
				<blockquote class="mt-10">
					<div class="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-200">
						<p>
							&ldquo;{t.review}&rdquo;
						</p>
						<Stars rating={t.rating} />
					</div>
					<footer class="mt-8">
						<div class="md:flex md:items-center md:justify-center">
							<div class="md:flex-shrink-0">
								<img class="mx-auto h-10 w-10 object-contain" src={t.image.src} alt={t.image.alt} />
							</div>
							<div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
								<div class="text-base font-medium text-gray-300">{t.firstName} {t.lastName}</div>
							</div>
						</div>
					</footer>
				</blockquote>
			</div>
		{/each} -->
		<Carousel items={testimonials} />
	</div>
</section>
