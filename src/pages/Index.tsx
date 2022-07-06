import Icon from '@/assets/icon.webp'
import DesignPreview from '@/components/DesignPreview'
import RollingText from '@/components/RollingText'
import { ChevronDownIcon } from '@heroicons/react/outline'

// Logos and previews
import StellanodeLogo from '@/assets/logos/stellanode.svg'
import StellanodePreview from '@/assets/previews/stellanode.webp'

import PterodactylMarketLogo from '@/assets/logos/pterodactylmarket.webp'

import ProfessionalPreview from '@/assets/previews/professional.webp'

import NoPreview from '@/assets/previews/noPreview.webp'

const Index = () => {
	return (
		<>
			<div class="bg-gradient-to-b from-slate-900 to-slate-800 min-w-screen min-h-screen">
				<div class="absolute top-0 left-0 w-full min-h-screen overflow-hidden flex justify-center items-center pointer-events-none">
					<div class="relative -top-32 -left-20 w-40 h-40 bg-blue-400 shadow-xl shadow-blue-400/20 rounded-xl -rotate-12"></div>
					<div class="relative -top-16 left-16 w-32 h-32 bg-rose-400 shadow-xl shadow-rose-400/20 rounded-full -rotate-12"></div>
				</div>
				<div class="absolute top-0 left-0 w-full min-h-screen flex flex-col justify-center items-center gap-12">
					<div class="flex flex-col gap-6">
						<h2 class="text-3xl text-center">Hi, I&apos;m</h2>
						<div class="relative flex gap-4 items-center p-4 rounded-full backdrop-blur-lg bg-slate-800/50 border border-slate-700 shadow-xl">
							<img
								alt="omame's avatar"
								src={Icon}
								class="w-16 h-16 rounded-full"
							/>
							<h1 class="text-5xl font-semibold">omame</h1>
						</div>
						<h2 class="text-2xl text-center">and I&apos;m...</h2>
					</div>
					<RollingText />
					<button
						onClick={() =>
							document
								.querySelector('#section2')
								?.scrollIntoView({ behavior: 'smooth' })
						}
					>
						Scroll down
						<ChevronDownIcon />
					</button>
				</div>
			</div>
			<div class="bg-slate-800">
				<div id="section2" class="section">
					<h1 class="text-4xl font-semibold">
						Professional-grade software and design.
					</h1>
					<p>
						My software has been trusted and used in production by many
						start-ups, companies, open-source organisations and people.
					</p>
					<div class="flex flex-wrap gap-12 justify-center mt-4">
						<DesignPreview
							thumbnail={StellanodePreview}
							logo={StellanodeLogo}
							text="Stellanode"
							description="Helped with website as well as panel development."
							link="https://stellanode.com"
						/>
						<DesignPreview
							thumbnail={NoPreview}
							logo={PterodactylMarketLogo}
							text="Pterodactyl Market"
							description="Working on the new version of the website and backend."
							link="https://pterodactylmarket.com"
						/>
						<DesignPreview
							thumbnail={ProfessionalPreview}
							text="Professional theme"
							description="Clean, visually attractive yet easy to use theme for Pterodactyl."
							link="https://pterodactylmarket.com/resource/350"
						/>
						<DesignPreview
							thumbnail={NoPreview}
							text="Impulse"
							description="A work-in-progress chat platform, currently developed and tested in private."
							link="https://impulse.chat"
						/>
						<p>
							<strong>todo:</strong> put more projects here
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Index
