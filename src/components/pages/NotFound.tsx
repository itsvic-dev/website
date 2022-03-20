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
import { Link } from 'react-router-dom'
import Footer from '@/components/Footer'
import ButtonLinkContainer from '@/components/ButtonLinkContainer'

const NotFound = (): JSX.Element => {
	return (
		<div css={tw`flex flex-col h-screen`}>
			<div css={tw`flex flex-col justify-center items-center p-8 gap-8 text-center h-full pt-24`}>
				<h1 css={tw`text-6xl font-light`}>404 Not Found</h1>
				<h2 css={tw`text-2xl font-light`}>what you are looking for doesn&apos;t exist. are you sure you typed the URL correctly?</h2>
				<ButtonLinkContainer>
					<Link to="/">go to the home page</Link>
				</ButtonLinkContainer>
			</div>
			<Footer css={tw`flex-none`} />
		</div>
	)
}

export default NotFound
