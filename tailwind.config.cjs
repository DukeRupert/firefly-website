const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#A6450D',
					50: '#F4A476',
					100: '#F39863',
					200: '#F07F3E',
					300: '#ED6618',
					400: '#CC5510',
					500: '#A6450D',
					600: '#722F09',
					700: '#3E1A05',
					800: '#0A0401',
					900: '#000000'
				},
				secondary: {
					DEFAULT: '#D9AE89',
					50: '#FFFFFF',
					100: '#FFFFFF',
					200: '#F7EEE6',
					300: '#EDD8C7',
					400: '#E3C3A8',
					500: '#D9AE89',
					600: '#CB915F',
					700: '#B7743B',
					800: '#8C592D',
					900: '#623E20'
				},
				background: '#fff'
			},
			fontFamily: {
				sans: ['Playfair Display', ...defaultTheme.fontFamily.sans]
			},
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
			}
		}
	},

	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')]
};

module.exports = config;
