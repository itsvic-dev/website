import { ComponentChildren } from 'preact'
import { useEffect, useState } from 'preact/hooks'

const CommandFadeIn = ({
	intro,
	children,
}: {
	intro: string
	children: ComponentChildren
}) => {
	const [introProgress, setIntroProgress] = useState(0)
	const [enter, setEnter] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			if (introProgress != intro.length) {
				setIntroProgress(introProgress + 1)
			} else if (introProgress == intro.length) {
				setTimeout(() => setEnter(true), 150)
			}
		}, 75)
	}, [introProgress])

	return (
		<div class="flex flex-col w-full h-screen overflow-hidden">
			<div class="p-4 flex gap-1">
				<p class="whitespace-pre">
					<span class="text-blue-400 font-bold">omame</span>@omame.xyz{' '}
					<strong>~</strong> % {intro.substring(0, introProgress)}
				</p>
				{!enter && (
					<div class="w-[0.75em] h-[1.5em] bg-white/50 animate-pulse"></div>
				)}
			</div>
			{enter && (
				<div class="animate-fadein bg-gradient-to-b from-transparent to-rose-800/20 h-full flex-1 p-4 flex flex-col gap-4">
					{children}
				</div>
			)}
		</div>
	)
}

export default CommandFadeIn
