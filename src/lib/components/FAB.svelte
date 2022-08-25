<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintIn, quintOut } from 'svelte/easing';
	import { CONTACT } from '$lib/constants';
	const duration = 150;
	const delay = 150;
	const x = 75;
	let showActions = false;
</script>

<div class="fixed w-16 h-auto right-0 bottom-0 z-20 flex flex-col mr-2 mb-4">
	<div class="flex flex-col-reverse items-center justify-between">
		<button
			on:click={() => (showActions = !showActions)}
			class="text-background bg-gradient-to-r {showActions
				? ' from-red-400 to-red-600 hover:from-red-300 hover:to-red-500'
				: ' from-primary-400 to-primary-600 hover:from-primary-300 hover:to-primary-500'} w-12 h-12 rounded-full flex items-center justify-center hover:animate-pulse hover:scale-105 transition-all duration-150 ease-out"
		>
			{#if showActions}
				<svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			{:else}
				<svg
					class="h-8 w-8"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" />
					<path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
					<line x1="12" y1="12" x2="12" y2="12.01" /> <line x1="8" y1="12" x2="8" y2="12.01" />
					<line x1="16" y1="12" x2="16" y2="12.01" /></svg
				>
			{/if}
		</button>
		{#if showActions}
			<a
				in:fly={{ duration: duration, x: x, easing: quintOut }}
				out:fly={{ delay: delay, duration: duration, x: x, easing: quintIn }}
				href={'tel:' + CONTACT.phone.string}
				class="mb-4 text-background bg-gradient-to-r from-green-400 to-green-600 hover:from-green-300 hover:to-green-500 w-12 h-12 rounded-full flex items-center justify-center hover:animate-pulse hover:scale-105"
				><svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
					/>
				</svg></a
			>
			<a
				in:fly={{ delay: delay, duration: duration, x: x, easing: quintOut }}
				out:fly={{ duration: duration, x: x, easing: quintIn }}
				href={'mailto:' + CONTACT.email}
				class="mb-4 text-background bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-300 hover:to-blue-500 w-12 h-12 rounded-full flex items-center justify-center hover:animate-pulse hover:scale-105"
				><svg
					class="h-8 w-8"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" />
					<rect x="3" y="5" width="18" height="14" rx="2" />
					<polyline points="3 7 12 13 21 7" /></svg
				></a
			>
		{/if}
	</div>
</div>
