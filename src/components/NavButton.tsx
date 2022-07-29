import { Link, LinkProps } from 'react-router-dom'

const NavButton = (props: LinkProps) => {
	return (
		<Link
			{...props}
			class="flex-1 min-w-[10rem] text-blue-400 font-bold underline py-4 bg-zinc-50/5 hover:bg-zinc-50/20 transition-colors duration-200 text-center"
		/>
	)
}

export default NavButton
