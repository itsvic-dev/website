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
import PageWrapper from '@/components/PageWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faGitlab, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import tw from 'twin.macro'

const LinkLi = (props: {icon: IconProp, link: string, text: string}): JSX.Element => <li>
	<a href={props.link} target="_blank" rel="noreferrer">
		<FontAwesomeIcon icon={props.icon} css={tw`mx-auto`} /> {props.text}
	</a>
</li>

const AboutMe = (): JSX.Element => {
	// calc age dynamically bc why not :P
	const bday = new Date(2005, 5, 23)
	const age = new Date(Date.now() - bday.getTime()).getUTCFullYear() - 1970
	const a = age === 18 ? 'an' : 'a' // planning ahead, write 'an 18 year old', 'a X year old' otherwise.
	//                                   theoretically breaks down after 80, but who cares?
	
	return (
		<PageWrapper title="about me">
			<p>I&apos;m omame - {a} {age} year old from Poland.</p>
			<p>I&apos;m a software engineer working on:</p>
			<ul>
				<li>desktop and mobile apps with Qt Quick</li>
				<li>web apps with React</li>
				<li>Node.js web app backends with Express</li>
				<li>Python web app backends with Flask/aiohttp</li>
			</ul>
			<p>You can check out my Projects page and my GitHub profile for examples of my work.</p>

			<h2>social media</h2>
			<ul>
				<LinkLi icon={faTwitter} link="https://twitter.com/omametech" text="Twitter (@omametech)" />
				<LinkLi icon={faDiscord} link="https://discord.gg/WSMyh5fdUg" text="my Discord server" />
				<LinkLi icon={faGithub} link="https://github.com/omaemae" text="GitHub (@omaemae)" />
				<LinkLi icon={faGitlab} link="https://gitlab.com/omaemae" text="GitLab (@omaemae)" />
				<LinkLi icon={faEnvelope} link="mailto:me@omame.xyz" text="me@omame.xyz" />
			</ul>
		</PageWrapper>
	)
}

export default AboutMe
