import React, {FC} from 'react'
import {SelectOption} from '@type/SelectOption'
import {Select} from '@components/elements/Select'
import {SortControlStyled, SortLabel} from './SortControl.styled'

interface SortControlProps {
    options: SelectOption[]
    sortBy: string
    onSelect: (value: string) => void
}

export const SortControl: FC<SortControlProps> = ({options, sortBy, onSelect}) => {
  return (
    <SortControlStyled>
      <SortLabel>Sort by</SortLabel>
      <Select options={options} selectedValue={sortBy} onSelect={onSelect}/>
    </SortControlStyled>
  )
}
