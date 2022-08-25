<script lang="ts">
	const FeatureCloud = {
		subtitle: 'Services',
		title: 'A better way to send money',
		text: `Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
				veritatis in accusamus quisquam.`,
		features: [
			{
				title: 'Competitive exchange rates',
				text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
						suscipit eaque, iste dolor cupiditate blanditiis ratione.`,
				icon: {
					src: '/icons/globe.svg',
					alt: 'todo'
				}
			},
			{
				title: 'Competitive exchange rates',
				text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
						suscipit eaque, iste dolor cupiditate blanditiis ratione.`,
				icon: {
					src: '/icons/globe.svg',
					alt: 'todo'
				}
			},
			{
				title: 'Competitive exchange rates',
				text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
						suscipit eaque, iste dolor cupiditate blanditiis ratione.`,
				icon: {
					src: '/icons/globe.svg',
					alt: 'todo'
				}
			},
			{
				title: 'Competitive exchange rates',
				text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
						suscipit eaque, iste dolor cupiditate blanditiis ratione.`,
				icon: {
					src: '/icons/globe.svg',
					alt: 'todo'
				}
			}
		]
	};
</script>

<div id="services" class="py-12 bg-background">
	<div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
		<div class="lg:text-center">
			<h2 class="text-lg text-primary-600 font-semibold">{FeatureCloud.subtitle}</h2>
			<p
				class="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight"
			>
				{FeatureCloud.title}
			</p>
			<p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
				{FeatureCloud.text}
			</p>
		</div>

		<div class="mt-10">
			<dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
				{#each FeatureCloud.features as { title, text, icon }}
					<div class="relative">
						<dt>
							<div
								class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-background"
							>
								<!-- Heroicon name: outline/globe-alt -->
								<img src={icon.src} alt={icon.alt} class="h-6 w-6" />
							</div>
							<p class="ml-16 text-lg leading-6 font-medium text-gray-900">
								{title}
							</p>
						</dt>
						<dd class="mt-2 ml-16 text-base text-gray-500">
							{text}
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</div>
