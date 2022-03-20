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

import React, { useState } from 'react'
import PageWrapper from '@/components/PageWrapper'
import tw from 'twin.macro'
import Switch from '@/components/Switch'

import DesktopLightAccount from '@/assets/themes/professional/desktop/light/account.webp'
import DesktopLightBackups from '@/assets/themes/professional/desktop/light/backups.webp'
import DesktopLightConsole from '@/assets/themes/professional/desktop/light/console.webp'
import DesktopLightDashboard from '@/assets/themes/professional/desktop/light/dashboard.webp'
import DesktopLightDatabases from '@/assets/themes/professional/desktop/light/databases.webp'
import DesktopLightFiles from '@/assets/themes/professional/desktop/light/files.webp'
import DesktopLightLogin from '@/assets/themes/professional/desktop/light/login.webp'
import DesktopLightNetwork from '@/assets/themes/professional/desktop/light/network.webp'
import DesktopLightPassword from '@/assets/themes/professional/desktop/light/password.webp'
import DesktopLightRegister from '@/assets/themes/professional/desktop/light/register.webp'
import DesktopLightSchedules from '@/assets/themes/professional/desktop/light/schedules.webp'
import DesktopLightScheduleTasks from '@/assets/themes/professional/desktop/light/schedule_tasks.webp'
import DesktopLightSettings from '@/assets/themes/professional/desktop/light/settings.webp'
import DesktopLightStartup from '@/assets/themes/professional/desktop/light/startup.webp'
import DesktopLightUsers from '@/assets/themes/professional/desktop/light/users.webp'

import DesktopDarkAccount from '@/assets/themes/professional/desktop/dark/account.webp'
import DesktopDarkBackups from '@/assets/themes/professional/desktop/dark/backups.webp'
import DesktopDarkConsole from '@/assets/themes/professional/desktop/dark/console.webp'
import DesktopDarkDashboard from '@/assets/themes/professional/desktop/dark/dashboard.webp'
import DesktopDarkDatabases from '@/assets/themes/professional/desktop/dark/databases.webp'
import DesktopDarkFiles from '@/assets/themes/professional/desktop/dark/files.webp'
import DesktopDarkLogin from '@/assets/themes/professional/desktop/dark/login.webp'
import DesktopDarkNetwork from '@/assets/themes/professional/desktop/dark/network.webp'
import DesktopDarkPassword from '@/assets/themes/professional/desktop/dark/password.webp'
import DesktopDarkRegister from '@/assets/themes/professional/desktop/dark/register.webp'
import DesktopDarkSchedules from '@/assets/themes/professional/desktop/dark/schedules.webp'
import DesktopDarkScheduleTasks from '@/assets/themes/professional/desktop/dark/schedule_tasks.webp'
import DesktopDarkSettings from '@/assets/themes/professional/desktop/dark/settings.webp'
import DesktopDarkStartup from '@/assets/themes/professional/desktop/dark/startup.webp'
import DesktopDarkUsers from '@/assets/themes/professional/desktop/dark/users.webp'

import DesktopAdminTheme from '@/assets/themes/professional/desktop/theme.webp'

import '@fontsource/rubik/700.css'
import PteroMarketButton from '@/components/PteroMarketButton'

const getImagesAndLabels = (darkMode: boolean): { [label: string]: string } => ({
	'Login': darkMode ? DesktopDarkLogin : DesktopLightLogin,
	'Forgot Password': darkMode ? DesktopDarkPassword : DesktopLightPassword,
	'Register': darkMode ? DesktopDarkRegister : DesktopLightRegister,
	'Dashboard': darkMode ? DesktopDarkDashboard : DesktopLightDashboard,
	'Account Settings': darkMode ? DesktopDarkAccount : DesktopLightAccount,
	'Server Console': darkMode ? DesktopDarkConsole : DesktopLightConsole,
	'Server File Manager': darkMode ? DesktopDarkFiles : DesktopLightFiles,
	'Server Databases': darkMode ? DesktopDarkDatabases : DesktopLightDatabases,
	'Server Schedules': darkMode ? DesktopDarkSchedules : DesktopLightSchedules,
	'Server Schedule View': darkMode ? DesktopDarkScheduleTasks : DesktopLightScheduleTasks,
	'Server Users (empty)': darkMode ? DesktopDarkUsers : DesktopLightUsers,
	'Server Backups': darkMode ? DesktopDarkBackups : DesktopLightBackups,
	'Server Network': darkMode ? DesktopDarkNetwork : DesktopLightNetwork,
	'Server Startup': darkMode ? DesktopDarkStartup : DesktopLightStartup,
	'Server Settings': darkMode ? DesktopDarkSettings : DesktopLightSettings,
	'Theme Settings in Admin Panel': DesktopAdminTheme,
})

const Professional = (): JSX.Element => {
	const [darkMode, setDarkMode] = useState(false)
	const imagesAndLabels = getImagesAndLabels(darkMode)

	return (
		<PageWrapper title={
			<div css={tw`flex flex-wrap gap-6 items-center`}>
				<span>Professional</span>
				<PteroMarketButton id="350" />
			</div>
		}>
			<div css={tw`flex justify-between items-center`}>
				<h2 css={tw`pb-0!`}>Theme Preview</h2>
				<Switch label="View dark mode" onChange={state => setDarkMode(state)} />
			</div>
			<div css={tw`flex flex-wrap justify-center mt-4 gap-4`}>
				{Object.keys(imagesAndLabels).map(
					label => <span key={label} css={tw`w-60 flex flex-col gap-2`}>
						<a href={imagesAndLabels[label]} target="_blank" rel="noreferrer">
							<img src={imagesAndLabels[label]} alt={label} css={tw`w-full shadow-md rounded-lg`} />
						</a>
						<span css={tw`text-sm text-center text-gray-300`}>{label}</span>
					</span>
				)}
			</div>
		</PageWrapper>
	)
}

export default Professional
