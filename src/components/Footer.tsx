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

import React from 'react'
import tw from 'twin.macro'

const Footer = (): JSX.Element => {
	return (
		<footer css={tw`w-full`}>
			<p css={tw`text-center p-4 text-lg text-gray-300`}>&copy; 2021 | omame. <a css={tw`text-link hover:underline`} href="https://github.com/omaemae/website">Some Rights Reserved.</a></p>
		</footer>
	)
}

export default Footer
