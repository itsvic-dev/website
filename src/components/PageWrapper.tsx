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

import Footer from '@/components/Footer'
import React from 'react'
import tw from 'twin.macro'
import Avatar from '@/assets/icon.webp'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export type PageWrapperProps = {
	title: React.ReactNode,
	children?: React.ReactNode,
	styleChildren?: boolean
}

const ChildStyling = styled.div`
	${tw`p-8 max-w-6xl mx-auto`};

	& h1 {
		${tw`text-5xl font-light pb-4`};
	}

	& h2 {
		${tw`text-3xl font-light pb-4`};
	}

	& ul {
		${tw`list-disc pl-8`};
	}

	& p {
		${tw`my-2`}
	}

	& a {
		${tw`transition-all duration-200 ease-in-out`};
	}

	& a:hover {
		${tw`text-gray-400 underline`};
	}
`

const NavBarNavLink = styled(NavLink)`
	${tw`text-gray-400 text-xl transition-colors duration-200 ease-in-out`};

	&:hover, &.active {
		${tw`text-white`};
	}

	&.active {
		${tw`underline`};
	}
`

const PageWrapper = (props: PageWrapperProps): JSX.Element => {
	let styleChildren = props.styleChildren
	if (props.styleChildren === undefined)
		styleChildren = true
	return (
		<div>
			<nav css={tw`w-full bg-bgcolor-tertiary sticky top-0 z-10`}>
				<div css={tw`max-w-6xl mx-auto flex justify-between px-8 py-4`}>
					<Link to="/" css={tw`text-2xl font-light hover:(font-normal underline)`}>
						<img src={Avatar} alt="omame" css={tw`w-10 h-10 mr-2 rounded-full inline-block justify-center`} />
						omame
					</Link>
					<div css={tw`hidden sm:flex gap-4 items-center`}>
						<NavBarNavLink to="/projects">projects</NavBarNavLink>
						<NavBarNavLink to="/about">about me</NavBarNavLink>
					</div>
				</div>
			</nav>

			<div css={tw`pb-8`}>
				{styleChildren ?
					<ChildStyling>
						<h1>{props.title}</h1>
						{props.children}
					</ChildStyling> :
					<>
						<ChildStyling>
							<h1>{props.title}</h1>
						</ChildStyling>
						{props.children}
					</>}
			</div>
			<Footer />
		</div>
	)
}

export default PageWrapper
