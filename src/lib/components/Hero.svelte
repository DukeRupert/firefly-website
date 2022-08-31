<script lang="ts">
	const Hero = {
		title: {
			text: 'A somewhat organized',
			focus: 'community'
		},
		text: `Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
				Elit sunt amet fugiat veniam occaecat fugiat aliqua.`,
		primaryAction: {
			label: 'get started',
			href: '#contact-us'
		},
		secondaryAction: {
			label: 'learn more',
			href: '#services'
		},
		image: {
			src: '/images/beer_flight.jpg',
			alt: 'A flight of five beers on a bar.'
		}
	};
</script>

<div>
	<!-- Hero card -->
	<div class="relative">
		<div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div class="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
				<div class="absolute inset-0">
					<img class="h-full w-full object-cover" src={Hero.image.src} alt={Hero.image.alt} />
					<div class="absolute inset-0 opacity-30 bg-gray-700 mix-blend-multiply" />
				</div>
				<div class="relative px-4 py-24 sm:px-6 sm:py-32 lg:py-40 lg:px-8">
					<h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
						<span class="block text-white">{Hero.title.text}</span>
						<span class="block text-primary-200">{Hero.title.focus}</span>
						<!-- </h1>
					<p class="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
						Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
						commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
					</p> -->
						<!-- <div class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
						<div class="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
							<a
								href="#"
								class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
								>Get started</a
							>
							<a
								href="#"
								class="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
								>Live demo</a
							>
						</div>
					</div> -->
					</h1>
				</div>
			</div>
		</div>
	</div>
</div>
