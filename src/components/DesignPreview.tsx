type DesignPreviewProps = {
	thumbnail: string
	logo?: string
	text?: string
	description: string
	link: string
}

const DesignPreview = (props: DesignPreviewProps) => (
	<a href={props.link}>
		<div
			class="w-64 h-56 bg-cover bg-center flex items-end rounded-lg border border-slate-600 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
			style={{ backgroundImage: `url(${props.thumbnail})` }}
		>
			<div class="bg-slate-900/50 border-t border-slate-500 w-full backdrop-blur rounded-lg p-4">
				{props.logo && (
					<img
						class="max-w-full max-h-12 mx-auto"
						src={props.logo}
						alt={props.text}
					/>
				)}
				{props.text && !props.logo && (
					<h1 class="font-bold text-xl text-center">{props.text}</h1>
				)}
				<p class="mt-2 text-sm font-medium text-slate-300">
					{props.description}
				</p>
			</div>
		</div>
	</a>
)

export default DesignPreview
