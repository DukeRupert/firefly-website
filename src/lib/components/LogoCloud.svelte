<script lang="ts">
	import Carousel from './Carousel.svelte';

	const BEERS = [
		{ src: 'images/Wakina-Wheat_ten-mile-creek_V1-01.png', alt: 'Wakina-Wheat beer' },
		{
			src: 'images/Twenty-Hour-Blueberry-Kettle-Sour_ten-mile-creek_1-01.png',
			alt: 'Twenty hour blueberry beer'
		},
		{ src: 'images/Last-Chance-Porter_ten-mile-creek_2-01.png', alt: 'Last Chance Porter' },
		{ src: 'images/The-Creek_ten-mile-creek_texture_1.png', alt: 'The Creek beer' },
		{
			src: 'images/Goodkind-American-Light-Ale_ten-mile-creek_1-1.png',
			alt: 'Goodkind American Light Ale'
		},
		{ src: 'images/Wood-Knocker_ten-mile-creek_2-01.png', alt: 'Wood Knocker beer' },
		{
			src: 'images/Betelgeuse-India-Pale-Ale_ten-mile-creek_pog_1.png',
			alt: 'Betelgeuse India Pale Ale'
		},
		{ src: 'images/The-Grass_Wheat-Ale_ten-mile-creek_1-01.png', alt: 'The Grass Wheat Ale' },
		{ src: 'images/Reginalds-Red_ten-mile-creek_4_pog-version_3.png', alt: 'Reginalds Red beer' }
	];
</script>

<!-- Logo cloud -->
<div class="bg-gray-100">
	<div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
		<h2 class="text-center text-xl font-semibold text-gray-500 uppercase">Beers on Tap</h2>
		<div class="relative mt-8 w-40 h-40  sm:w-60 sm:h-60 mx-auto">
			<Carousel logos={BEERS} />
		</div>
	</div>
</div>
