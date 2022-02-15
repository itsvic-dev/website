import tw from 'twin.macro'

const Footer = () => (
	<footer
		css={tw`w-full p-4 text-center border-t bg-zinc-200 border-zinc-400 dark:(bg-zinc-800 border-zinc-600)`}
	>
		<p css={tw`text-lg`}>&copy; {new Date().getFullYear()} | omame.</p>
		<p css={tw`mt-2`}>
			<a
				css={tw`text-zinc-600 hover:(underline text-zinc-800) dark:(text-zinc-400 hover:text-zinc-200)
						transition-colors duration-200 ease-in-out`}
				href="https://github.com/omaemae/website"
				target="_blank"
				rel="noreferrer"
			>
				Some Rights Reserved.
			</a>
		</p>
	</footer>
)

export default Footer
