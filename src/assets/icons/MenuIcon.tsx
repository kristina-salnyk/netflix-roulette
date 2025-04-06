import * as React from 'react'
import {FC} from 'react'
import {useTheme} from 'styled-components'
import {IconProps} from '@type/IconProps'

export const MenuIcon: FC<IconProps> = ({height = 36, width = 36, color, className}) => {
  const theme = useTheme()
  const fill = color ?? theme.colors.control

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_0_213)">
        <circle cx={22} cy={22} r={18} fill={fill}/>
      </g>
      <circle cx={22} cy={15} r={2} fill="white"/>
      <circle cx={22} cy={22.5} r={2} fill="white"/>
      <circle cx={22} cy={30} r={2} fill="white"/>
      <defs>
        <filter
          id="filter0_d_0_213"
          x={0}
          y={0}
          width={44}
          height={44}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix"/>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset/>
          <feGaussianBlur stdDeviation={2}/>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196596 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_213"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_213"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
