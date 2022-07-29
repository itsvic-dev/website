import Avatar from '@/assets/avatar_new.webp'
import WebInfo from '@/webinfo.json'
import CommandFadeIn from '@/components/CommandFadeIn'
import Neofetch from '@/components/Neofetch'
import NavButton from '@/components/NavButton'

const age =
	new Date(
		new Date().getTime() - new Date(2005, 5, 23).getTime()
	).getFullYear() - 1970

const Index = () => {
	return (
		<CommandFadeIn intro="about --me">
			<Neofetch
				image={Avatar}
				title={
					<p>
						<span class="text-rose-400 font-bold">omame</span>@
						<span class="text-rose-400 font-bold">omame.xyz</span>
					</p>
				}
				titleLength={'omame@omame.xyz'.length}
				content={{
					Age: age,
					Gender: 'Male (he/him)',
					Nationality: 'Poland',
					Sexuality: 'Gay (taken)',
					Commissions: WebInfo.commissions ? 'Open' : 'Closed',
					'E-mail': (
						<a
							href="mailto:me@omame.xyz"
							class="text-blue-400 font-bold underline"
						>
							me@omame.xyz
						</a>
					),
					Twitter: (
						<a
							href="https://twitter.com/omametech"
							class="text-blue-400 font-bold underline"
							rel="noreferrer noopener"
							target="_blank"
						>
							@omametech
						</a>
					),
					Discord: (
						<>
							<a
								href="https://discord.gg/WSMyh5fdUg"
								class="text-blue-400 font-bold underline"
								rel="noreferrer noopener"
								target="_blank"
							>
								discord.gg/WSMyh5fdUg
							</a>{' '}
							(omame#7818)
						</>
					),
				}}
			/>
			<div class="flex w-full flex-wrap gap-4">
				<NavButton to="projects">Projects</NavButton>
				<NavButton to="projects">Commissions</NavButton>
			</div>
		</CommandFadeIn>
	)
}

export default Index
