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
				</Routes>
			</Suspense>
		</BrowserRouter>
	</>
)

export default App
