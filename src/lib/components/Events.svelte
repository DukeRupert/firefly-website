<script lang="ts">
	import List from './List.svelte';

	export let Events;
</script>

<div class="relative">
	<div class="absolute inset-x-0 top-0 h-1/2 bg-secondary-500" />
	<div class="relative  py-8 sm:py-16">
		<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
				<div class="flex-shrink-0">
					<img
						class="h-60 w-full object-cover"
						src={Events.image.src}
						alt={Events.image.alt}
						width="1200"
						height="666"
					/>
				</div>
				<div class="flex flex-1 flex-col justify-between bg-white p-6">
					<div class="flex-1">
						<p class="text-sm font-medium text-primary-600">
							<a href="#" class="hover:underline">Upcoming</a>
						</p>
						<a href="#" class="mt-2 block">
							<h1 class="text-xl font-semibold text-gray-900 uppercase">Events</h1>
							<List items={Events.events} />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
