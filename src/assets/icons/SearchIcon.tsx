import * as React from 'react'
import {FC} from 'react'
import {useTheme} from 'styled-components'
import {IconProps} from '@type/IconProps'

export const SearchIcon: FC<IconProps> = ({height = 29, width = 30, color, className}) => {
  const theme = useTheme()
  const stroke = color ?? theme.colors.accent

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx={18.5} cy={10.5} r={9.5} stroke={stroke} strokeWidth={2}/>
      <path
        d="M10.5 19.5L1.5 28.5"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="square"
      />
    </svg>
  )
}
