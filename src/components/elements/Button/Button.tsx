import React, {FC} from 'react'

interface ButtonProps {
    label: string;
    type: 'filled' | 'outline';
}

export const Button: FC<ButtonProps> = ({label}) => {
  return <button type='button'>{label}</button>
}
