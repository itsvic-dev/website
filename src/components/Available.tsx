import React from 'react'
import tw from 'twin.macro'

export type AvailableProps = {
    available: boolean
}

const Available = (props: AvailableProps): JSX.Element | null => {
	if (!props.available) return null

	return (
		<div css={tw`shadow-xl m-8 p-8 bg-bgcolor-primary rounded-2xl flex flex-col w-full justify-start`}>
			<p css={tw`text-5xl font-light text-center`}>currently available for hire!</p>
			<div css={tw`text-lg`}>
				<p css={tw`pt-8`}>if you are interested in my work and would like to offer me something to work with, 
				please <a css={tw`text-link hover:underline`} href="mailto:me@omame.xyz">email me</a> or DM me on Guilded.</p>

				<p css={tw`pt-4`}>i am a frontend and backend developer, and I am fluent in Python and TypeScript.</p>
			</div>
		</div>
	)
}

export default Available
