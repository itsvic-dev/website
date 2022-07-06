import Fallback from '@/components/Fallback'
import { Suspense } from 'preact/compat'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@/styles/app.scss'
import IndexNew from '@/pages/IndexNew'

const App = () => (
	<>
		<BrowserRouter>
			<Suspense fallback={<Fallback />}>
				<Routes>
					<Route path="/" element={<IndexNew />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	</>
)

export default App
