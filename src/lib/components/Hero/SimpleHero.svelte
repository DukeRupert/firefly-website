<script lang="ts">
	export let Hero = {
		title: {
			text: 'Data to enrich your',
			focus: 'online business'
		},
		text: `Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.`,
		primaryAction: {
			label: 'Get started',
			href: '#'
		},
		secondaryAction: {
			label: 'Live demo',
			href: '#'
		},
		image: {
			src: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80',
			alt: 'Todo'
		}
	};
</script>

<div class="lg:relative">
	<div class="mx-auto w-full max-w-7xl pt-16 pb-20 z-[1] text-center lg:py-48 lg:text-left">
		<div class="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
			<h1
				class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
			>
				<span class="block text-gray-900 dark:text-gray-100 xl:inline">{Hero.title.text}</span>
				<span class="block text-primary-200 darK:text-white xl:inline">{Hero.title.focus}</span>
			</h1>
			<p class="mx-auto mt-3 max-w-md text-lg text-gray-600 dark:text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
				{Hero.text}
			</p>
			<div class="mt-10 sm:flex sm:justify-center lg:justify-start">
				<div class="rounded-md shadow">
					<a
						href={Hero.primaryAction.href}
						class="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-200 px-8 py-3 text-base font-medium text-white hover:bg-primary-300 md:py-4 md:px-10 md:text-lg"
						>{Hero.primaryAction.label}</a
					>
				</div>
				<div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
					<a
						href={Hero.secondaryAction.href}
						class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-primary-200 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
						>{Hero.secondaryAction.label}</a
					>
				</div>
			</div>
		</div>
	</div>

	<div
		class="relative flex items-center justify-center h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
	>
		<img
			id="laptop"
			class="flex items-center justify-center max-h-[400px] h-[90%] md:h-full w-auto object-contain"
			src={Hero.image.src}
			alt={Hero.image.src}
		/>
	</div>
</div>

<style>
	#laptop {
		animation-name: slidein;
		animation-delay: 1s;
		animation-timing-function: ease-in-out;
		animation-duration: 2s;
		animation-iteration-count: infinite;
	}

	@keyframes slidein {
		from {
			transform: translateY(0);
		}

		50% {
			transform: translateY(10px);
		}

		to {
			transform: translateY(0);
		}
	}
</style>
