const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#FF6D1F',
					50: '#FFE5D7',
					100: '#FFD7C2',
					200: '#FFBD99',
					300: '#FFA271',
					400: '#FF8848',
					500: '#FF6D1F',
					600: '#E65000',
					700: '#AE3D00',
					800: '#762900',
					900: '#3E1500'
				},
				background: '#fff'
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
