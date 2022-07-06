import { useEffect, useState } from 'preact/hooks'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import '@/styles/rollingText.scss'

const texts: readonly string[] = [
	'a programmer',
	'a UI/UX designer',
	'a freelancer',
	'a FOSS enthusiast',
	'a full-stack Node developer',
	'an artist, sorta',
	'an idiot',
	'a sleepy cat',
]

type VisibleText = {
	main: boolean
	text: string
}

const RollingText = () => {
	const [index, setIndex] = useState(0)
	useEffect(() => {
		setTimeout(() => setIndex((index + 1) % texts.length), 2500)
	}, [index])

	const visibleText: readonly VisibleText[] = [
		{ main: false, text: texts[(index + texts.length - 1) % texts.length] },
		{ main: true, text: texts[index] },
		{ main: false, text: texts[(index + 1) % texts.length] },
	]

	return (
		<TransitionGroup className="h-[116px]">
			{visibleText.map((obj) => (
				<CSSTransition key={obj.text} timeout={500} classNames="rolling-text">
					<h2 className={`rolling-text ${obj.main ? 'main' : ''}`}>
						{obj.text}
					</h2>
				</CSSTransition>
			))}
		</TransitionGroup>
	)
}

export default RollingText
