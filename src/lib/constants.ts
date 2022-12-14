import { dev } from '$app/environment'

export const LOGO = {
	label: 'Firefly Software',
	href: '/',
	image: {
		src: '/images/firefly_icon.webp',
		alt: 'Firefly Software LLC logo'
	}
};

export const LINKS = [
	
	
];

export const CONTACT = {
	phone: {
		string: '406-871-9875',
		href: 'tel:4068719875'
	},
	location: {
		address: '652 Jena Loop',
		city: 'Helena',
		state: 'MT',
		zip: '59602'
	},
	email: 'logan@firefly.llc'
};

type Socials =
	| 'facebook'
	| 'instagram'
	| 'twitter'
	| 'yelp'
	| 'github'
	| 'tripadvisor'
	| 'foursquare'
	| 'zomato'
	| 'dribbble';

interface Social {
	type: Socials;
	href: string;
}

export const SOCIAL: Social[] = [
	
];

export const COMPANY = {
	name: 'Firefly Software, LLC',
	logo: LOGO,
	contact: CONTACT,
	social: SOCIAL,
	year: 2022,
	mapEmbed:
		''
};

export const EVENTS = {
	title: 'Events',
	image: {
		src: '/images/upcoming_events.webp',
		alt: 'Ten Mile Creek Brewery taproom'
	},
	events: [
		{
			title: 'Growler Tuesday & Thursday',
			slug: 'growler-tuesday-and-thursday',
			description: `Tunes in the taproom every Thursday  5:00-8:00pm join us at the taproom for some killer tunes!`,
			date: new Date('2022-06-12'),
			image: {
				src: '/images/FINAL-SQUACH-SHIRT.webp',
				alt: 'A sasquatch carrying a growler and goblet.'
			}
		},
		{
			title: 'Tunes in the Taproom',
			slug: 'tunes-in-the-taproom',
			description: `Each and every Tuesday and Thursday we like to thank our patrons by giving you a FREE pint when you fill a growler.   So, come on, what are you waiting for? Grab your growlers and join us for a pint and a fill this Tuesday or Thursday.`,
			date: new Date('2022-08-04'),
			image: {
				src: '/images/1659368031682.webp',
				alt: 'A poster for live at ten mile creek brewery live music in august.'
			}
		},
		{
			title: 'Live on the Gulch',
			slug: 'live-on-the-gulch',
			description: `Live music on the walking mall! Join Ten Mile Creek, The Hawthorn and The Rialto for summer music and some good times! The music will start at 5:00pm and go until 8:00pm. So grab a drink and enjoy the show. Follow this event for more information on performances.`,
			date: new Date('2022-08-06'),
			image: {
				src: '/images/FINAL-SQUACH-SHIRT.webp',
				alt: 'A sasquatch carrying a growler and goblet.'
			}
		},
		{
			title: 'Downdogs and Draughts',
			slug: 'downdogs-and-draughts',
			description: `YOGA in the TAPROOM?!?! You bet! The cost is $12 for the class and this comes with a pint of your choice. Please bring a mat if possible and join Loft Studio at Ten Mile Creek Brewery for Downdogs and Draughts!  Plus $2 of each participant goes to our sponsored non-profit of the month! This month we are supporting The Continental Divide Trail Coalition.`,
			date: new Date('2022-08-07'),
			image: {
				src: '/images/DRINKBEERDOYOGA.webp',
				alt: 'A sasquatch carrying a growler and goblet.'
			}
		}
	]
};

export const POSTMARK_API_KEY = dev ? import.meta.env.VITE_POSTMARK_API_KEY : process.env.POSTMARK_API_KEY;
