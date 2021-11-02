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

import React from 'react'
import tw from 'twin.macro'
import omame from '@/assets/icon.webp'
import zzz from '@/assets/1f4a4.svg'
import CyberOS from '@/assets/cyberos.webp'
import PlugifyWeb from '@/assets/plugify-web.webp'
import '@fontsource/rubik/300.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGitAlt, faGithub, faGitlab, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import Project from '@/components/Project'
import { faEnvelope, faFolder, faGlobe } from '@fortawesome/free-solid-svg-icons'
import Available from '@/components/Available'

const SocialLink = styled.a`
	${tw`m-2 hover:text-gray-400 transition-colors duration-200 ease-in-out`};
`

const App = (): JSX.Element => {
	return (
		<div css={tw`w-full flex flex-col items-center`}>
			<div css={tw`w-full flex flex-col items-center p-8 max-w-container`}>
				<div css={tw`w-full flex justify-between flex-col lg:flex-row pt-16`}>
					<div css={tw`flex flex-col lg:flex-row items-center`}>
						<img src={omame} css={tw`rounded-full w-64 h-auto shadow-lg`} alt="my avatar" />
						<div css={tw`lg:ml-16 text-center lg:text-left`}>
							<h1 css={tw`text-6xl font-light pt-8 lg:pt-0`}>omame</h1>
							<p css={tw`text-2xl pt-4`}>programmer by day, sleepy kot by night <img src={zzz} css={tw`inline-block w-8 ml-2 h-auto`} alt="sleeping emoji"/></p>
						</div>
					</div>

					<div css={tw`flex flex-col lg:flex-row text-3xl justify-center items-center pt-4 lg:pt-0`}>
						<div css={tw`flex lg:flex-col text-3xl justify-center items-center`}>
							<SocialLink rel="noreferrer" target="_blank" href="https://gitlab.com/omaemae">
								<FontAwesomeIcon icon={faGitlab} />
							</SocialLink>
							<SocialLink rel="noreferrer" target="_blank" href="https://dir.omame.xyz">
								<FontAwesomeIcon icon={faFolder} />
							</SocialLink>
						</div>
						<div css={tw`flex lg:flex-col text-3xl justify-center items-center lg:ml-4`}>
							<SocialLink rel="noreferrer" target="_blank" href="https://twitter.com/omametech">
								<FontAwesomeIcon icon={faTwitter} />
							</SocialLink>
							<SocialLink rel="noreferrer" target="_blank" href="https://discord.gg/WSMyh5fdUg">
								<FontAwesomeIcon icon={faDiscord} />
							</SocialLink>
							<SocialLink rel="noreferrer" target="_blank" href="https://github.com/omaemae">
								<FontAwesomeIcon icon={faGithub} />
							</SocialLink>
							<SocialLink rel="noreferrer" target="_blank" href="https://youtube.com/omame">
								<FontAwesomeIcon icon={faYoutube} />
							</SocialLink>
							<SocialLink rel="noreferrer" target="_blank" href="mailto:me@omame.xyz">
								<FontAwesomeIcon icon={faEnvelope} />
							</SocialLink>
						</div>
					</div>
				</div>

				<h2 css={tw`text-5xl pt-16 font-light`}>projects</h2>

				<Project
					name="Plugify"
					image={PlugifyWeb}
					description="Plugify is a chat app designed with usability in mind. I'm the creator, designer and maintainer of the project."
					links={{
						'https://plugify.cf': faGlobe,
						'https://twitter.com/PlugifyChat': faTwitter,
						'https://gitlab.com/plugify-tf': faGitlab
					}}
				/>

				<Project
					name="CyberOS"
					image={CyberOS}
					description="CyberOS is a Linux distribution based on Arch Linux and Qt Quick. I'm a maintainer of the project."
					links={{
						'https://getcyberos.org': faGlobe,
						'https://twitter.com/CyberOS_Linux': faTwitter,
						'https://git.omame.xyz/CyberOS': faGitAlt
					}}
				/>

				<Available available={true}/>
			</div>
			<div css={tw`w-full bg-bgcolor-tertiary`}>
				<p css={tw`text-center p-4 text-lg text-gray-300`}>&copy; 2021 | omame. <a css={tw`text-link hover:underline`} href="https://github.com/omaemae/website">Some Rights Reserved.</a></p>
			</div>
		</div>
	)
}

export default App
