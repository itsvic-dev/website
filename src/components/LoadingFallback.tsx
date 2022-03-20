/*  omame's website
 *  Copyright (C) 2022 omame <me@omame.xyz>
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

const LoadingFallback = (): JSX.Element => {
	return (
		<div css={tw`absolute top-0 left-0 w-screen h-screen bg-bgcolor-secondary flex flex-col justify-center items-center gap-4`}>
			<h1 css={tw`text-6xl`}>Loading...</h1>
			<h2 css={tw`text-2xl`}>Please wait...</h2>
		</div>
	)
}

export default LoadingFallback
