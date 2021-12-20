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

import styled from 'styled-components'
import tw from 'twin.macro'

const ButtonLinkContainer = styled.div`
	${tw`text-xl flex flex-wrap gap-4 justify-center`};

	& > a {
		${tw`inline-block px-6 py-4 bg-bgcolor-tertiary border border-gray-600 rounded-lg transition-all duration-200 ease-in-out`};
		${tw`hover:(bg-bgcolor-primary border-gray-500 shadow-xl)`};
	}
`

export default ButtonLinkContainer
