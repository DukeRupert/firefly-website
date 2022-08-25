<script lang="ts">
	const Hero = {
		title: {
			text: 'Data to enrich your',
			focus: 'online business'
		},
		text: `Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
				Elit sunt amet fugiat veniam occaecat fugiat aliqua.`,
		primaryAction: {
			label: 'get started',
			href: '#'
		},
		secondaryAction: {
			label: 'live demo',
			href: '#'
		},
		image: {
			src: '/images/train.jpg',
			alt: 'A railroad extending out into the plains and a warm sunset.'
		}
	};
</script>

<main class="lg:relative">
	<div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
		<div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
			<h1
				class="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight lg:text-5xl lg:tracking-tight xl:text-6xl xl:tracking-tight"
			>
				<span class="block xl:inline">{Hero.title.text}</span>
				<span class="block text-primary-600 xl:inline">{Hero.title.focus}</span>
			</h1>
			<p class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl" />
			<div class="mt-10 sm:flex sm:justify-center lg:justify-start">
				<div class="rounded-md shadow">
					<a
						href={Hero.primaryAction.href}
						class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background capitalize bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-400 hover:to-primary-600 md:py-4 md:text-lg md:px-10"
					>
						{Hero.primaryAction.label}
					</a>
				</div>
				<div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
					<a
						href={Hero.secondaryAction.href}
						class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md capitalize text-primary-600 bg-background hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
					>
						{Hero.secondaryAction.label}
					</a>
				</div>
			</div>
		</div>
	</div>
	<div
		class="relative w-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full flex items-center justify-center"
	>
		<img class="object-cover w-full h-auto" src={Hero.image.src} alt={Hero.image.alt} />
	</div>
</main>
