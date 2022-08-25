<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-background overflow-hidden">
	<div class="max-w-7xl mx-auto">
		<Navbar />
		<slot />
	</div>
</div>
