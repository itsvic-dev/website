import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

export default createGlobalStyle`
	body {
		${tw`w-full overflow-hidden dark:bg-gray-900 dark:text-white`};
		height: 100vh;
	}

	#root {
		${tw`w-full h-full`};
	}
`
