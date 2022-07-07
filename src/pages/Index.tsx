import { useEffect, useState } from 'preact/hooks'
import Icon from '@/assets/icon.webp'
import WebInfo from '@/webinfo.json'

const introString = 'about --me'

const age =
	new Date(
		new Date().getTime() - new Date(2005, 5, 23).getTime()
	).getFullYear() - 1970

const Index = () => {
	const [introProgress, setIntroProgress] = useState(0)
	const [enter, setEnter] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			if (introProgress != introString.length) {
				setIntroProgress(introProgress + 1)
			} else if (introProgress == introString.length) {
				setTimeout(() => setEnter(true), 150)
			}
		}, 75)
	}, [introProgress])

	return (
		<div class="flex flex-col w-full h-screen overflow-hidden">
			<div class="p-4 flex gap-1">
				<p class="whitespace-pre">
					<span class="text-blue-400 font-bold">omame</span>@omame.xyz{' '}
					<strong>~</strong> % {introString.substring(0, introProgress)}
				</p>
				{!enter && (
					<div class="w-[0.75em] h-[1.5em] bg-white/50 animate-pulse"></div>
				)}
			</div>
			{enter && (
				<div class="animate-fadein bg-gradient-to-b from-transparent to-rose-800/20 h-full flex-1 p-4 flex gap-8 flex-col md:flex-row items-center md:items-start text-center md:text-left">
					<img src={Icon} class="w-64 h-64" />
					<div>
						<p>
							<span class="text-rose-400 font-bold">omame</span>@
							<span class="text-rose-400 font-bold">omame.xyz</span>
						</p>
						<p>---------------</p>
						<p>
							<span class="text-rose-400 font-bold">Age</span>: {age} years
						</p>
						<p>
							<span class="text-rose-400 font-bold">Gender</span>: Male (he/him)
						</p>
						<p>
							<span class="text-rose-400 font-bold">Nationality</span>: Poland
						</p>
						<p>
							<span class="text-rose-400 font-bold">Sexuality</span>: Gay
						</p>
						<p>
							<span class="text-rose-400 font-bold">Relationship status</span>:
							Taken
						</p>
						<p>
							<span class="text-rose-400 font-bold">Commissions</span>:{' '}
							{WebInfo.commissions ? 'Open' : 'Closed'}
						</p>
						<p>
							<span class="text-rose-400 font-bold">E-mail</span>:{' '}
							<a
								href="mailto:me@omame.xyz"
								class="text-blue-400 font-bold underline"
							>
								me@omame.xyz
							</a>
						</p>
						<p>
							<span class="text-rose-400 font-bold">Twitter</span>:{' '}
							<a
								class="text-blue-400 font-bold underline"
								href="https://twitter.com/omametech"
								rel="noreferrer noopener"
								target="_blank"
							>
								@omametech
							</a>
						</p>
						<p>
							<span class="text-rose-400 font-bold">Discord</span>:{' '}
							<a
								class="text-blue-400 font-bold underline"
								href="https://discord.gg/WSMyh5fdUg"
								rel="noreferrer noopener"
								target="_blank"
							>
								discord.gg/WSMyh5fdUg
							</a>{' '}
							(omame#7818)
						</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default Index
