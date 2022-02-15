import tw from 'twin.macro'
import omame from '@/assets/icon.webp'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledNavLink = styled(NavLink)`
	${tw`text-zinc-600 hover:text-zinc-800 dark:(text-zinc-400 hover:text-zinc-200) text-xl
	transition-colors duration-200 ease-in-out`}

	&.active {
		${tw`text-zinc-900 dark:text-zinc-100 underline`}
	}
`

const NavigationBar = () => (
	<nav
		css={tw`w-full h-16 py-4 flex justify-center items-center border-b
				bg-zinc-300 bg-opacity-50 border-zinc-400 dark:(bg-zinc-800 bg-opacity-80 border-zinc-600)
				sticky top-0 backdrop-blur-xl shadow`}
	>
		<div css={tw`w-full px-6 max-w-5xl flex items-center justify-between`}>
			<StyledNavLink to="/">
				<img src={omame} css={tw`mr-2 w-8 h-8 rounded-full inline-block`} />
				omame
			</StyledNavLink>
			<div css={tw`flex gap-6`}>
				<StyledNavLink to="/about">about me</StyledNavLink>
				<StyledNavLink to="/blog">blog</StyledNavLink>
				<StyledNavLink to="/projects">projects</StyledNavLink>
			</div>
		</div>
	</nav>
)

export default NavigationBar
