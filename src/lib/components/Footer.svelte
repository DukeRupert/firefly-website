<script lang="ts">
	import { LOGO } from '$lib/constants';
	const solutions = {
		title: 'Solutions',
		links: [
			{ title: 'Website Development', href: '/coming-soon' },
			{ title: 'eCommerce', href: '/coming-soon' },
			{ title: 'Consulting', href: '/coming-soon' }
		]
	};
	const company = {
		title: 'Company',
		links: [
			{ title: 'Pricing', href: '/coming-soon' },
			{ title: 'About', href: '/coming-soon' },
			{ title: 'Blog', href: '/coming-soon' }
		]
	};
	const legal = {
		title: 'Legal',
		links: [
			{ title: 'Privacy', href: '/coming-soon' },
			{ title: 'Terms', href: '/coming-soon' }
		]
	};
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<footer class="bg-white" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="max-w-7xl mx-auto mt-16 md:mt-24 lg:mt-32 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8 xl:col-span-1">
				<img class="h-20" src="/firefly_logo_black.svg" alt={LOGO.image.alt} />
				<p class="text-gray-500 text-base">
					We are passionate about helping businesses succeed by improving the user experience for
					both our clients and their customers.
				</p>
			</div>
			<div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div class="mt-12 md:mt-0">
						<h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
							{solutions.title}
						</h3>
						<ul class="mt-4 space-y-4">
							{#each solutions.links as { title, href }}<li>
									<a {href} class="text-base text-gray-500 hover:text-gray-900"> {title}</a>
								</li>{/each}
						</ul>
						<div />
					</div>

					<div class="md:grid md:grid-cols-2 md:gap-8">
						<div class="mt-12 md:mt-0">
							<h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
								{company.title}
							</h3>
							<ul class="mt-4 space-y-4">
								{#each company.links as { title, href }}<li>
										<a {href} class="text-base text-gray-500 hover:text-gray-900"> {title}</a>
									</li>{/each}
							</ul>
						</div>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div class="mt-12 md:mt-0">
						<div class="mt-12 md:mt-0">
							<h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
								{legal.title}
							</h3>
							<ul class="mt-4 space-y-4">
								{#each legal.links as { title, href }}<li>
										<a {href} class="text-base text-gray-500 hover:text-gray-900"> {title}</a>
									</li>{/each}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-12 border-t border-gray-200 pt-8">
			<p class="text-base text-gray-400 xl:text-center">
				&copy; 2019 Firefly Software Engineering, LLC. All rights reserved.
			</p>
		</div>
	</div>
</footer>
