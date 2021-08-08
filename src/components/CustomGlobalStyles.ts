import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

export default createGlobalStyle`
	body {
		${tw`w-full text-white bg-bgcolor-secondary`};
	}

	#root {
		${tw`w-full h-full`};
	}
`
