<script lang="ts">
	const Team = {
		label: 'Our Team',
		text: 'textLibero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse. Vivamus fringilla.',
		staff: [
			{
				name: 'Tom Cook',
				title: 'Owner',
				image: {
					src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=8&w=987&h=987&q=80',
					alt: 'TODO'
				}
			},
			{
				name: 'Floyd Miles',
				title: 'Director, Operations',
				image: {
					src: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=8&w=987&q=80',
					alt: 'TODO'
				}
			},
			{
				name: 'Lindsay Walton',
				title: 'CFO',
				image: {
					src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx88&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
					alt: 'TODO'
				}
			},
			{
				name: 'Leonard Krasner',
				title: 'Marketing',
				image: {
					src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=8&w=987&q=80',
					alt: 'TODO'
				}
			}
		]
	};
</script>

<div id="our-team" class="bg-background">
	<div class="mx-auto py-16 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
		<div class="space-y-12">
			<div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
				<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">{Team.label}</h2>
				<p class="text-xl text-gray-500">
					{Team.text}
				</p>
			</div>
			<ul
				role="list"
				class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
			>
				{#each Team.staff as { name, title, image }}
					<li>
						<div class="space-y-4">
							<div class="aspect-w-3 aspect-h-2">
								<img
									class="object-cover shadow-lg rounded-lg"
									src={image.src}
									alt={image.alt}
									width="450"
									height="300"
								/>
							</div>

							<div class="space-y-2">
								<div class="text-lg leading-6 font-medium space-y-1">
									<h3>{name}</h3>
									<p class="text-primary-600">{title}</p>
								</div>
								<!-- Socials
							<ul role="list" class="flex space-x-5">
								<li>
									<a href="#" class="text-gray-400 hover:text-gray-500">
										<span class="sr-only">Twitter</span>
										<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
											<path
												d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
											/>
										</svg>
									</a>
								</li>
								<li>
									<a href="#" class="text-gray-400 hover:text-gray-500">
										<span class="sr-only">LinkedIn</span>
										<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
											<path
												fill-rule="evenodd"
												d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
												clip-rule="evenodd"
											/>
										</svg>
									</a>
								</li>
							</ul> -->
							</div>
						</div>
					</li>
				{/each}
				<!-- More people... -->
			</ul>
		</div>
	</div>
</div>
