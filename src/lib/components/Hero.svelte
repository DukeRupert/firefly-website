<script lang="ts">
	const Hero = {
		title: {
			text: 'Welcome to',
			focus: 'The Brewhouse'
		},
		text: `Way more than just a pub`,
		primaryAction: {
			label: 'Upstairs',
			href: '#contact-us'
		},
		secondaryAction: {
			label: 'Downstairs',
			href: '#services'
		},
		image: {
			src: '/images/brewhouse_bar.webp',
			alt: 'A flight of five beers on a bar.'
		}
	};
</script>

<div>
	<!-- Hero card -->
	<div class="relative mt-24 sm:mt-0">
		<!-- <div
			class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-r from-secondary-400 to-secondary-700"
		/> -->
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div class="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
				<div class="absolute inset-0">
					<img
						class="h-full w-full object-cover"
						src={Hero.image.src}
						alt={Hero.image.alt}
						width="1200"
						height="800"
					/>
					<div class="absolute inset-0 opacity-50 bg-gray-800 mix-blend-multiply" />
				</div>
				<div class="relative px-4 py-24 sm:px-6 sm:py-32 lg:py-40 lg:px-8">
					<h1 class="mx-auto text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
						<span class="block text-white uppercase">{Hero.title.text}</span>
						<span class="block text-primary-300 uppercase">{Hero.title.focus}</span>
					</h1>
					<p class="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
						{Hero.text}
					</p>
					<div class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
						<div class="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
							<a
								href={Hero.primaryAction.href}
								class="group flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-4 py-3 text-base font-medium text-primary-500 shadow-sm hover:bg-white sm:px-8"
								><svg
									class="h-6 w-6 mr-2 transform duration-150 quint-out group-hover:-translate-y-1"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" /> <line x1="12" y1="5" x2="12" y2="19" />
									<line x1="18" y1="11" x2="12" y2="5" />
									<line x1="6" y1="11" x2="12" y2="5" /></svg
								>{Hero.primaryAction.label}</a
							>
							<a
								href={Hero.secondaryAction.href}
								class="group flex items-center justify-center rounded-md border border-transparent bg-primary-300 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
								><svg
									class="h-6 w-6 mr-2 transform duration-150 quint-out group-hover:translate-y-1"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" /> <line x1="12" y1="5" x2="12" y2="19" />
									<line x1="18" y1="13" x2="12" y2="19" />
									<line x1="6" y1="13" x2="12" y2="19" /></svg
								>{Hero.secondaryAction.label}</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
