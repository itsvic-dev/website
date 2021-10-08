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

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import tw from 'twin.macro'

export type ProjectProps = {
	name: string,
	image: string,
	description: string,
	links: Record<string, IconProp>
}

const Project = (props: ProjectProps): JSX.Element => {
	return (
		<div css={tw`shadow-xl m-8 p-8 bg-bgcolor-primary rounded-2xl flex flex-col lg:flex-row w-full justify-start`}>
			<a rel="noreferrer" target="_blank" href={props.image}>
				<img src={props.image} css={tw`w-full lg:w-96 rounded-xl shadow-md`}/>
			</a>
			<div css={tw`text-center lg:text-left pt-8 lg:pt-0 lg:pl-8 flex flex-col justify-between lg:w-2/3`}>
				<div>
					<p css={tw`text-4xl font-light`}>{props.name}</p>
					<p css={tw`text-xl pt-4`}>{props.description}</p>
				</div>
				<p css={tw`pt-8 text-3xl`}>
					{Object.keys(props.links).map((link) => (
						<a key={link} rel="noreferrer" target="_blank" href={link} css={tw`m-2 hover:text-gray-400 transition-colors duration-200 ease-in-out`}>
							<FontAwesomeIcon icon={props.links[link]} />
						</a>
					))}
				</p>
			</div>
		</div>
	)
}

export default Project
