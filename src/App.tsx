import React from 'react'
import tw from 'twin.macro'
import omame from '@/assets/icon.webp'
import zzz from '@/assets/1f4a4.svg'
import CyberOS from '@/assets/cyberos.webp'
import StellaNode from '@/assets/stellanode.webp'
import '@fontsource/rubik/300.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGitAlt, faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import Project from '@/components/Project'
import { faFolder, faGlobe } from '@fortawesome/free-solid-svg-icons'

const SocialLink = styled.a`
	${tw`m-2 hover:text-gray-400 transition-colors duration-200 ease-in-out`};
`

const App = (): JSX.Element => {
	return (
		<div css={tw`w-full flex flex-col items-center`}>
			<div css={tw`w-full flex flex-col items-center p-16 max-w-container`}>
				<div css={tw`w-full flex justify-between flex-col lg:flex-row`}>
					<div css={tw`flex flex-col lg:flex-row items-center`}>
						<img src={omame} css={tw`rounded-full w-64 h-auto shadow-lg`}/>
						<div css={tw`lg:ml-16 text-center lg:text-left`}>
							<p css={tw`text-6xl font-light pt-8 lg:pt-0`}>omame</p>
							<p css={tw`text-2xl pt-4`}>just a sleepy kot <img src={zzz} css={tw`inline-block w-8 ml-2 h-auto`}/></p>
						</div>
					</div>

					<div css={tw`flex lg:flex-col text-3xl justify-center items-center pt-4 lg:pt-0`}>
						<SocialLink href="https://twitter.com/omametech">
							<FontAwesomeIcon icon={faTwitter} />
						</SocialLink>
						<SocialLink href="https://discord.gg/WSMyh5fdUg">
							<FontAwesomeIcon icon={faDiscord} />
						</SocialLink>
						<SocialLink href="https://github.com/omaemae">
							<FontAwesomeIcon icon={faGithub} />
						</SocialLink>
						<SocialLink href="https://dir.omame.tech">
							<FontAwesomeIcon icon={faFolder} />
						</SocialLink>
						<SocialLink href="https://youtube.com/omame">
							<FontAwesomeIcon icon={faYoutube} />
						</SocialLink>
					</div>
				</div>

				<p css={tw`text-5xl pt-16 font-light`}>projects</p>

				<Project
					name="CyberOS"
					image={CyberOS}
					description="CyberOS is a Linux distribution based on Arch Linux and Qt Quick. I'm a maintainer of the project."
					links={{
						'https://getcyberos.org': faGlobe,
						'https://twitter.com/CyberOS_Linux': faTwitter,
						'https://git.omame.tech/CyberOS': faGitAlt
					}}
				/>
				<Project
					name="StellaNode"
					image={StellaNode}
					description="I'm a software developer at StellaNode. I've created their unique website and panel. I also do support for some of their products."
					links={{
						'https://stellanode.com': faGlobe,
						'https://twitter.com/stellanode': faTwitter,
					}}
				/>
			</div>
			<div css={tw`w-full bg-bgcolor-tertiary`}>
				<p css={tw`text-center p-4 text-lg text-gray-300`}>&copy; 2021 | omame. <a css={tw`text-link hover:underline`} href="https://github.com/omaemae/website">Some Rights Reserved.</a></p>
			</div>
		</div>
	)
}

export default App
