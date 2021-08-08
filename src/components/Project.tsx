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
		<div css={tw`shadow-xl m-8 p-8 bg-bgcolor-primary rounded-2xl flex flex-col lg:flex-row w-full`}>
			<a href={props.image}>
				<img src={props.image} css={tw`w-full lg:w-auto lg:h-72 rounded-xl shadow-md`}/>
			</a>
			<div css={tw`text-center lg:text-left pt-8 lg:pt-0 lg:pl-8 flex flex-col justify-between`}>
				<div>
					<p css={tw`text-4xl font-light`}>{props.name}</p>
					<p css={tw`text-xl pt-4`}>{props.description}</p>
				</div>
				<p css={tw`pt-8 text-3xl`}>
					{Object.keys(props.links).map((link) => (
						<a key={link} href={link} css={tw`m-2`}>
							<FontAwesomeIcon icon={props.links[link]} />
						</a>
					))}
				</p>
			</div>
		</div>
	)
}

export default Project
