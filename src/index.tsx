import App from '@/App'
import React from 'react'
import { render } from 'react-dom'
import { GlobalStyles } from 'twin.macro'
import '@fontsource/rubik'
import '@fontsource/jetbrains-mono'
import CustomGlobalStyles from './components/CustomGlobalStyles'

render(
	<>
		<GlobalStyles />
		<CustomGlobalStyles />
		<App />
	</>,
	document.getElementById('root')
)
