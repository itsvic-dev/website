// const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'"JetBrains MonoVariable"',
					'"JetBrains Mono"',
					'Consolas',
					'monospace',
				],
			},
			animation: {
				fadein: 'fadein 1s cubic-bezier(0, 0, 0.2, 1)',
			},
			keyframes: {
				fadein: {
					'0%': { transform: 'translateY(5rem)', opacity: 0 },
					'100%': { transform: 'translateY(0%)', opacity: 1 },
				},
			},
		},
	},
}
