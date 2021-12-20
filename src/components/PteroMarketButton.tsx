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

const PteroMarketButton = (props: { id: string }): JSX.Element => {
	return (
		<a css={[
			tw`inline-block px-4 py-2 rounded-lg border border-gray-400 hover:text-white! text-base font-normal`,
			{ backgroundImage: 'linear-gradient(to right,#ff6161,#fe6a4e,#f9743b,#f18025,#e68c04)' }
		]} href={`https://pterodactylmarket.com/resource/${props.id}`} target="_blank" rel="noreferrer">
			Get it on <strong css={tw`font-bold`}>Pterodactyl Market</strong>
		</a>
	)
}

export default PteroMarketButton
