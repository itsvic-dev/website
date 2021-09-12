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
				please <a css={tw`text-link hover:underline`} href="mailto:me@omame.xyz">email me</a> or DM me on Discord.</p>

				<p css={tw`pt-4`}>I am a frontend and backend developer, and I know how to work with Python (Flask/aiohttp) and TypeScript (React Web), but I&apos;m always up to take a challenge.</p>
			</div>
		</div>
	)
}

export default Available
