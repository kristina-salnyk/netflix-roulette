import React, {FC} from 'react'
import {SelectOption} from '@type/SelectOption'
import {Select} from '@components/elements/Select'
import {SortControlStyled, SortLabel} from './SortControl.styled'

interface SortControlProps {
    options: SelectOption[]
    sortCriterion: string
    onSelect: (value: string) => void
}

export const SortControl: FC<SortControlProps> = ({options, sortCriterion, onSelect}) => {
  return (
    <SortControlStyled data-testid="sort-select">
      <SortLabel>Sort by</SortLabel>
      <Select options={options} selectedValue={sortCriterion} onSelect={onSelect}/>
    </SortControlStyled>
  )
}
