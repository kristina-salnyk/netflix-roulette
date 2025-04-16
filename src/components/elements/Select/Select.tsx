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
    const handleOutsideClick = (event: MouseEvent | KeyboardEvent) => {
      if (event instanceof MouseEvent) {
        setIsOpen(false)
      } else if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('keydown', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('keydown', handleOutsideClick)
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
