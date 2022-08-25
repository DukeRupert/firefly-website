const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#FA5B0F',
					50: '#FED6C3',
					100: '#FDC8AF',
					200: '#FCAD87',
					300: '#FC925F',
					400: '#FB7637',
					500: '#FA5B0F',
					600: '#CD4504',
					700: '#963303',
					800: '#5F2002',
					900: '#280D01'
				},
				background: '#fff'
			},
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
			}
		}
	},

	plugins: [require('@tailwindcss/forms')]
};

module.exports = config;
