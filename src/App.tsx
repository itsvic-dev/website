import React from 'react'
import tw from 'twin.macro'
import omame from '@/assets/icon.jpg'

const App = (): JSX.Element => {
	return (
		<div css={tw`w-full h-full flex justify-center items-center`}>
			<div>
				<img src={omame} css={tw`rounded-full w-1/2 h-auto shadow-lg mx-auto mb-16`}/>
				<p css={tw`text-2xl`}>welcome to <span css={tw`font-mono`}>omame&apos;s React boilerplate</span></p>
			</div>
		</div>
	)
}

export default App
