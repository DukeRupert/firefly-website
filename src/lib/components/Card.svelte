<script lang="ts">
	export let data = {
		href: 'https://www.facebook.com/events/1223914174745622/?ref=newsfeed',
		image: {
			src: '/images/Band-Scheduling-Facebook-Mobile-Header.jpg',
			alt: 'Live music banner and schedule'
		},
		title: 'Live on the Gulch',
		body: 'Live music on the walking mall! Join Ten Mile Creek, The Hawthorn and The Rialto for summer music and some good times! The music will start at 5:00pm and go until 8:00pm. So grab a drink and enjoy the show.'
	};
</script>

<div class="relative w-full mt-8 sm:mt-16 py-8">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div
			class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-7xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
		>
			<img
				class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
				src={data.image.src}
				alt={data.image.alt}
			/>
			<div class="flex flex-col justify-between p-4 leading-normal">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{data.title}
				</h5>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{data.body}
				</p>
				<div
					class="hidden md:block ml-auto flex items-end justify-center align-middle space-x-2 mb-3 px-2 transform-gpu duration-150 ease-out-expo hover:-translate-x-2 hover:scale-105"
				>
					<a class="text-xs text-primary-500" href={data.href}> Follow event </a>
					<svg
						class="inline-block h-4 w-4 text-red-500"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" /> <line x1="5" y1="12" x2="19" y2="12" />
						<line x1="15" y1="16" x2="19" y2="12" /> <line x1="15" y1="8" x2="19" y2="12" /></svg
					>
				</div>
			</div>
			<div
				class="md:hidden ml-auto flex items-end justify-center align-middle space-x-2 mb-3 px-2 transform-gpu duration-150 ease-out-expo hover:-translate-x-2 hover:scale-105"
			>
				<a class="text-xs text-primary-500" href={data.href}> Follow event </a>
				<svg
					class="inline-block h-4 w-4 text-red-500"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" /> <line x1="5" y1="12" x2="19" y2="12" />
					<line x1="15" y1="16" x2="19" y2="12" /> <line x1="15" y1="8" x2="19" y2="12" /></svg
				>
			</div>
		</div>
	</div>
</div>
