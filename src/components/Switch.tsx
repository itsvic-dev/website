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

import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

export type SwitchProps = {
	label?: string,
	onChange: (state: boolean) => void
}

const StyledSwitchContainer = styled.label`
	${tw`relative inline-block w-16 h-8 flex-none`};

	& > input[type="checkbox"] {
		${tw`opacity-0 w-0 h-0`};

		& + span {
			${tw`absolute cursor-pointer top-0 left-0 right-0 bottom-0 border bg-gray-700 border-gray-500
			hover:(bg-gray-600 border-gray-400) rounded-full transition-all duration-200 ease-in-out`};
		}

		& + span::before {
			${tw`absolute w-6 h-6 top-0 left-0 m-[3px] bg-white rounded-full transition-all duration-200 ease-in-out`};
			content: "";
		}

		&:checked + span {
			${tw`bg-blue-600 border-blue-400`};
		}

		&:checked + span::before {
			${tw`left-8`};
		}
	}
`

const Switch = (props: SwitchProps): JSX.Element => {
	return (
		<div css={tw`flex items-center`}>
			{props.label && <label css={tw`mr-4 text-sm uppercase text-gray-400 text-right`}>{props.label}</label>}
			<StyledSwitchContainer>
				<input type="checkbox" onChange={event => props.onChange(event.target.checked)} />
				<span />
			</StyledSwitchContainer>
		</div>
	)
}

export default Switch
