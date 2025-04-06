import React, {FC} from 'react'
import {GENRES} from '@constants'
import {SortControl} from '@components/elements/SortControl'
import {GenreSelect} from '@components/elements/GenreSelect'
import {ListControlsStyled} from './ListControls.styled'

interface ListControls {
    selectedGenre: string
    sortBy: string
    onGenreSelect: (genre: string) => void
    onSortBySelect: (value: string) => void
}

export const ListControls: FC<ListControls> = ({selectedGenre, onGenreSelect, sortBy, onSortBySelect}) => {
  return (
    <ListControlsStyled>
      <GenreSelect genres={GENRES} selectedGenre={selectedGenre} onSelect={onGenreSelect}/>
      <SortControl sortBy={sortBy} onSelect={onSortBySelect}/>
    </ListControlsStyled>
  )
}
