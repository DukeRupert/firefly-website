<script lang="ts">
	import List from './List.svelte';

	const EVENTS = {
		title: '',
		image: {
			src: '/images/upcoming_events.jpg',
			alt: 'Ten Mile Creek Brewery taproom'
		},
		events: [
			{
				title: 'Growler Tuesday & Thursday',
				slug: 'growler-tuesday-and-thursday',
				description: `Tunes in the taproom every Thursday  5:00-8:00pm join us at the taproom for some killer tunes!`,
				date: new Date('2022-06-12'),
				image: {
					src: '/images/FINAL-SQUACH-SHIRT.jpg',
					alt: 'A sasquatch carrying a growler and goblet.'
				}
			},
			{
				title: 'Tunes in the Taproom',
				slug: 'tunes-in-the-taproom',
				description: `Each and every Tuesday and Thursday we like to thank our patrons by giving you a FREE pint when you fill a growler.   So, come on, what are you waiting for? Grab your growlers and join us for a pint and a fill this Tuesday or Thursday.`,
				date: new Date('2022-08-04'),
				image: {
					src: '/images/1659368031682.jpg',
					alt: 'A poster for live at ten mile creek brewery live music in august.'
				}
			},
			{
				title: 'Live on the Gulch',
				slug: 'live-on-the-gulch',
				description: `Live music on the walking mall! Join Ten Mile Creek, The Hawthorn and The Rialto for summer music and some good times! The music will start at 5:00pm and go until 8:00pm. So grab a drink and enjoy the show. Follow this event for more information on performances.`,
				date: new Date('2022-08-06'),
				image: {
					src: '/images/FINAL-SQUACH-SHIRT.jpg',
					alt: 'A sasquatch carrying a growler and goblet.'
				}
			},
			{
				title: 'Downdogs and Draughts',
				slug: 'downdogs-and-draughts',
				description: `YOGA in the TAPROOM?!?! You bet! The cost is $12 for the class and this comes with a pint of your choice. Please bring a mat if possible and join Loft Studio at Ten Mile Creek Brewery for Downdogs and Draughts!  Plus $2 of each participant goes to our sponsored non-profit of the month! This month we are supporting The Continental Divide Trail Coalition.`,
				date: new Date('2022-08-07'),
				image: {
					src: '/images/DRINKBEERDOYOGA.jpg',
					alt: 'A sasquatch carrying a growler and goblet.'
				}
			}
		]
	};
</script>

<div class="relative mt-8 sm:mt-16">
	<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
			<div class="flex-shrink-0">
				<img class="h-60 w-full object-cover" src={EVENTS.image.src} alt={EVENTS.image.alt} />
			</div>
			<div class="flex flex-1 flex-col justify-between bg-white p-6">
				<div class="flex-1">
					<p class="text-sm font-medium text-primary-600">
						<a href="#" class="hover:underline">Upcoming</a>
					</p>
					<a href="#" class="mt-2 block">
						<h1 class="text-xl font-semibold text-gray-900 uppercase">Events</h1>
						<List items={EVENTS.events} />
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
