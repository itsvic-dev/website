/*  omame's website
 *  Copyright (C) 2021 omame <me@omame.xyz>
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

module.exports = {
	purge: [],
	darkMode: false,
	theme: {
		fontFamily: {
			sans: ['Rubik', 'sans-serif'],
		},
		extend: {
			colors: {
				bgcolor: {
					primary: '#2c2c39',
					secondary: '#22222c',
					tertiary: '#16161d'
				},
				link: '#2196F3'
			},
			maxWidth: {
				container: '1366px'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
