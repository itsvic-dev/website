/*  omame's website
 *  Copyright (C) 2022 omame <me@omame.xyz>
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import LoadingFallback from '@/components/LoadingFallback'
import NotFound from '@/components/pages/NotFound'
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('@/components/pages/Home'))
const AboutMe = lazy(() => import('@/components/pages/AboutMe'))
const Projects = lazy(() => import('@/components/pages/Projects'))

const App = (): JSX.Element => {
	return (
		<Suspense fallback={<LoadingFallback />}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<AboutMe />} />
					<Route path="projects/*" element={<Projects />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	)
}

export default App
