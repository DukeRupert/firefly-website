<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';

	interface Event {
		title: string;
		slug: string;
		description: string;
		date: Date;
		image: {
			src: string;
			alt: string;
		};
	}

	export let items: Event[];

	let active = '';

	function openEvent(e: MouseEvent) {
		active = e.currentTarget.id;
	}
</script>

<div class="mt-6 flow-root">
	<ul role="list" class="-my-5 divide-y divide-gray-200">
		{#each items as item}
			<li class="py-4">
				<button id={item.slug} on:click|preventDefault={openEvent} class="block w-full">
					<div class="flex items-center space-x-4 text-left">
						<div class="flex-shrink-0">
							<img
								class="h-16 w-12 rounded-sm object-contain"
								src={item.image.src}
								alt={item.image.alt}
							/>
						</div>
						<div class="min-w-0 flex-1">
							<p class="truncate text-base md:text-lg font-medium text-gray-900">{item.title}</p>
							<p class="truncate text-sm text-gray-500">{item.date.toLocaleDateString()}</p>
						</div>
						<div>
							<button
								id={item.slug}
								on:click={openEvent}
								class="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-primary-400 shadow-sm hover:bg-gray-50"
								>View</button
							>
						</div>
					</div>
					{#if active === item.slug}
						<div in:slide|local={{ duration: 500, easing: quartOut }}>
							<p class="text-left">
								{item.description}
							</p>
						</div>
					{/if}
				</button>
			</li>
		{/each}
	</ul>
</div>
<div class="mt-6">
	<a
		href="#"
		class="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-primary-500 shadow-sm hover:bg-gray-50"
		>View all</a
	>
</div>
