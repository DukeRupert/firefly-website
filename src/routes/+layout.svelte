<script>
	import Fab from '$lib/components/FAB.svelte';

	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-background overflow-hidden">
	<div class="max-w-7xl mx-auto">
		<Fab />
		<Navbar />
		<slot />
	</div>
</div>
