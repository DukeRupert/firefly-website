<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-background overflow-hidden">
	<div class="max-w-7xl mx-auto">
		<div
			class="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
		>
			<Navbar />
			<main
				class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
			>
				<slot />
			</main>
		</div>
	</div>
	<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
		<img
			class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
			src="/images/warm_railroad.jpeg"
			alt=""
		/>
	</div>
</div>
