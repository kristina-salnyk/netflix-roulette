import React, {FC} from 'react'
import {SelectOption} from '@type/SelectOption'
import {useSelect} from '@hooks/useSelect'
import {Option, SelectButton, SelectIcon, SelectOptions, SelectStyled} from './Select.styled'

interface SelectProps {
    options: SelectOption[]
    selectedValue: string
    onSelect: (value: string) => void
}

export const Select: FC<SelectProps> = ({options, selectedValue, onSelect}) => {
  const {isOpen, handleToggle, handleClose} = useSelect()

  const handleSelect = (event: React.MouseEvent<HTMLDivElement>, value: string) => {
    event.stopPropagation()
    onSelect(value)
    handleClose()
  }

  const option = options.find(option => option.value === selectedValue)

  return (
    <SelectStyled>
      <SelectButton type='button' onClick={handleToggle}>
        <span>{option?.label}</span>
        <SelectIcon>&#9660;</SelectIcon>
      </SelectButton>
      {isOpen && <SelectOptions>
        {options.map(option => (
          <li key={option.value}>
            <Option role='option'
              onClick={(event: React.MouseEvent<HTMLDivElement>) => handleSelect(event, option.value)}>
              {option.label}
            </Option>
          </li>
        ))}
      </SelectOptions>
      }
    </SelectStyled>
  )
}
