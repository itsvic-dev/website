import Fallback from '@/components/Fallback'
import { Suspense } from 'preact/compat'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@/styles/app.scss'
import Index from '@/pages/Index'

const App = () => (
	<>
		<BrowserRouter>
			<Suspense fallback={<Fallback />}>
				<Routes>
					<Route path="/" element={<Index />} />
					<Route
						path="*"
						element={
							<div class="bg-gradient-to-b from-transparent to-rose-800/20 w-screen h-screen flex flex-col justify-center items-center gap-4 p-4">
								<h1 class="font-bold text-4xl">¯\_(ツ)_/¯</h1>
								<p>
									Couldn't find that for ya. Did you spell the URL correctly?
								</p>
							</div>
						}
					/>
				</Routes>
			</Suspense>
		</BrowserRouter>
	</>
)

export default App
