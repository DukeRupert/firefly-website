<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import SimpleFooter from '$lib/components/SimpleFooter.svelte';
	import '../app.postcss';
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative h-full bg-background overflow-x-hidden">
	<Navbar />
	<div class="max-w-7xl h-full mx-auto">
		
		<slot />
		<SimpleFooter />
	</div>
</div>
