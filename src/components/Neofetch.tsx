import { ComponentChildren } from 'preact'

type NeofetchProps = {
	image: string
	content: Record<string, string | ComponentChildren>
	title: string | ComponentChildren | number
	titleLength?: number
}

const Neofetch = (props: NeofetchProps) => (
	<div class="flex gap-8 flex-col md:flex-row items-center md:items-start text-center md:text-left">
		<img src={props.image} class="w-64 h-64" />
		<div>
			{typeof props.title === 'string' ? (
				<p class="text-rose-400 font-bold">{props.title}</p>
			) : (
				props.title
			)}
			<p>
				{'-'.repeat(
					props.title === 'string' ? props.title.length : props.titleLength || 0
				)}
			</p>
			{Object.keys(props.content).map((key) => (
				<p key={key}>
					<span class="text-rose-400 font-semibold">{key}</span>:{' '}
					{props.content[key]}
				</p>
			))}
		</div>
	</div>
)

export default Neofetch
