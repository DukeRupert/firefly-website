export const LOGO = {
	label: 'The Brewhouse',
	href: '/',
	img: {
		src: '/images/brewhouselogo.webp',
		alt: 'The Brewhouse'
	}
};

export const LINKS = [
	{ label: 'Downstairs', href: '/downstairs-menu' },
	{ label: 'Upstairs', href: '/upstairs-menu' },
	{ label: 'Events', href: '/events' },
	{ label: 'Contact', href: '/#contact' }
];

export const CONTACT = {
	phone: {
		string: '406-457-9390',
		href: 'tel:4064579390'
	},
	location: {
		address: '939 Getchell St',
		city: 'Helena',
		state: 'MT',
		zip: '59601'
	},
	email: 'rachel@helenabrewhouse.com'
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
	{ type: 'facebook', href: 'https://www.facebook.com/BrewhousePubGrille/' },
	{ type: 'yelp', href: 'https://www.yelp.com/biz/brewhouse-pub-and-grille-helena' },
	{
		type: 'tripadvisor',
		href: 'https://www.tripadvisor.com/Restaurant_Review-g45212-d583243-Reviews-Brewhouse_Pub_Grill-Helena_Montana.html'
	},
	{
		type: 'foursquare',
		href: 'https://foursquare.com/v/downstairs--the-brewhouse/50ee0054e4b01c4a87109474'
	},
	{
		type: 'zomato',
		href: 'https://www.zomato.com/helena-mt/brewhouse-pub-and-grille-helena'
	}
];

export const COMPANY = {
	name: 'The Brewhouse',
	logo: LOGO,
	contact: CONTACT,
	social: SOCIAL,
	year: 2022,
	mapEmbed:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2741.470610347729!2d-112.03955468440422!3d46.5977018791307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x534354e245c20b0f%3A0xb058c8076543ee3f!2sBrewhouse!5e0!3m2!1sen!2sus!4v1662295887062!5m2!1sen!2sus'
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
