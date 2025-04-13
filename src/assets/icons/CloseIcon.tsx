import * as React from 'react'
import {FC} from 'react'
import {useTheme} from 'styled-components'
import {IconProps} from '@type/IconProps'

export const CloseIcon: FC<IconProps> = ({height = 21, width = 21, color, className}) => {
  const theme = useTheme()
  const stroke = color ?? theme.colors.white

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth={2}
        d="m1.471 1.99 20.058 20.058M21.529 1.99 1.471 22.048"
      />
    </svg>
  )
}
