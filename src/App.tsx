import Fallback from '@/components/Fallback'
import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import tw, { GlobalStyles as TailwindGlobalStyles } from 'twin.macro'
import '@fontsource/rubik'
import GlobalStylesheet from '@/assets/GlobalStylesheet'
import NavigationBar from '@/components/NavigationBar'
import Footer from '@/components/Footer'

const Index = lazy(() => import('@/pages/Index'))
const Blog = lazy(() => import('@/pages/Blog'))

const App = () => (
	<>
		<BrowserRouter>
			<TailwindGlobalStyles />
			<GlobalStylesheet />
			<NavigationBar />
			<div css={tw`mx-auto w-full max-w-5xl px-6 py-6 flex-1`}>
				<Suspense fallback={<Fallback />}>
					<Routes>
						<Route path="/" element={<Index />} />
						<Route path="blog/*" element={<Blog />} />
					</Routes>
				</Suspense>
			</div>
			<Footer />
		</BrowserRouter>
	</>
)

export default App
