export const LOGO = {
	label: 'Ten Mile Creek Brewing',
	href: '/',
	img: {
		src: '/images/Ten-Mile-Creek-Brewing-No-Circle.webp',
		alt: 'Ten Mile Creek Brewing'
	}
};

export const LINKS = [
	{ label: 'Beer', href: '/#beer' },
	{ label: 'Events', href: '/#events' },
	{ label: 'About', href: '/#about' },
	{ label: 'Contact', href: '/#contact' },
	{ label: 'Shop', href: '/#shop' }
];

export const CONTACT = {
	phone: {
		string: '406-502-1382',
		href: 'tel:4065021382'
	},
	location: {
		address: '48 N Last Chance Gulch',
		city: 'Helena',
		state: 'MT',
		zip: '59601'
	},
	email: 'info@companyname.com'
};

export const SOCIAL = [
	{ type: 'facebook', href: 'https://www.facebook.com/TenMileCreekBrewery/' },
	{ type: 'instagram', href: 'https://www.instagram.com/explore/locations/1019701299/' }
];

export const COMPANY = {
	name: 'Ten Mile Creek Brewing',
	logo: LOGO,
	contact: CONTACT,
	social: SOCIAL,
	year: 2022
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
