import React, {FC, useEffect, useRef, useState} from 'react'
import {SelectOption} from '@type/SelectOption'
import {Option, SelectButton, SelectIcon, SelectOptions, SelectStyled} from './Select.styled'

interface SelectProps {
    options: SelectOption[]
    selectedValue: string
    onSelect: (value: string) => void
}

export const Select: FC<SelectProps> = ({options, selectedValue, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOrEscape = (event: MouseEvent | KeyboardEvent) => {
      if (event instanceof MouseEvent && !ref.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }

      if (event instanceof KeyboardEvent && event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOrEscape)
    document.addEventListener('keydown', handleClickOrEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOrEscape)
      document.removeEventListener('keydown', handleClickOrEscape)
    }
  }, [])

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleSelect = (value: string) => {
    onSelect(value)
    setIsOpen(false)
  }

  const option = options.find(option => option.value === selectedValue)

  return (
    <SelectStyled ref={ref}>
      <SelectButton type='button' onClick={handleToggle}>
        <span>{option?.label}</span>
        <SelectIcon>&#9660;</SelectIcon>
      </SelectButton>
      {isOpen && <SelectOptions>
        {options.map(option => (
          <li key={option.value}>
            <Option onClick={() => handleSelect(option.value)}>
              {option.label}
            </Option>
          </li>
        ))}
      </SelectOptions>
      }
    </SelectStyled>
  )
}
