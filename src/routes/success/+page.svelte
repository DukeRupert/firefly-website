<script lang="ts">
	import { client } from '$lib/stores/App';
</script>

<main
	class="h-[80vh]"
>
	<div
		class="w-full h-full flex flex-col justify-center items-center px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48"
	>
		<p class="text-sm font-semibold text-black text-opacity-75 uppercase tracking-wide">Success!</p>
		<h1 class="mt-2 text-4xl font-extrabold text-primary-300 tracking-tight sm:text-5xl">
			Thank you, {$client.first}
			{$client.last}
		</h1>
		<p class="mt-2 text-lg font-medium text-gray-700">
			This is exciting! We will contact you as soon as possible.
		</p>
		<div class="mt-6">
			<a
				href="/"
				class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-300 hover:bg-primary-400"
			>
				Return home
			</a>
		</div>
	</div>
</main>
