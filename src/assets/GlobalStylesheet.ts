import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

const GlobalStylesheet = createGlobalStyle`
	html {
		${tw`bg-zinc-100 text-zinc-900 dark:(bg-zinc-900 text-zinc-100)`}
	}

	#app {
		${tw`h-screen flex flex-col`}
	}
`

export default GlobalStylesheet
