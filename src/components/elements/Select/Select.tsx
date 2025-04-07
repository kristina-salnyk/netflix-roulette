import React, {FC, useEffect, useState} from 'react'
import {SelectOption} from '@type/SelectOption'
import {Option, SelectButton, SelectIcon, SelectOptions, SelectStyled} from './Select.styled'

interface SelectProps {
    options: SelectOption[]
    selectedValue: string
    onSelect: (value: string) => void
}

export const Select: FC<SelectProps> = ({options, selectedValue, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | KeyboardEvent) => {
      if (event instanceof MouseEvent) {
        setIsOpen(false)
      } else if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleClickOutside)
    }
  }, [])

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setIsOpen((prevState) => !prevState)
  }

  const handleSelect = (event: React.MouseEvent<HTMLDivElement>, value: string) => {
    event.stopPropagation()
    onSelect(value)
    setIsOpen(false)
  }

  const option = options.find(option => option.value === selectedValue)

  return (
    <SelectStyled>
      <SelectButton type='button' onClick={handleToggle} data-testid='select-button'>
        <span data-testid='select-value'>{option?.label}</span>
        <SelectIcon>&#9660;</SelectIcon>
      </SelectButton>
      {isOpen && <SelectOptions data-testid='select-options'>
        {options.map(option => (
          <li key={option.value}>
            <Option
              onClick={(event: React.MouseEvent<HTMLDivElement>) => handleSelect(event, option.value)}
              data-testid='select-option'>
              {option.label}
            </Option>
          </li>
        ))}
      </SelectOptions>
      }
    </SelectStyled>
  )
}
