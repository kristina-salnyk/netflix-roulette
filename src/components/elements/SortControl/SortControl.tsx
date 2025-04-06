import React, {FC} from 'react'
import {SORT_OPTIONS} from '@constants'
import {Select} from '@components/elements/Select'
import {SortControlStyled, SortLabel} from './SortControl.styled'

interface SortControlProps {
    sortBy: string
    onSelect: (value: string) => void
}

export const SortControl: FC<SortControlProps> = ({sortBy, onSelect}) => {
  return (
    <SortControlStyled>
      <SortLabel>Sort by</SortLabel>
      <Select options={SORT_OPTIONS} selectedValue={sortBy} onSelect={onSelect}/>
    </SortControlStyled>
  )
}
