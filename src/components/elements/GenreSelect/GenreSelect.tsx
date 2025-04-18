import React, {FC} from 'react'
import clsx from 'clsx'
import {TabButton} from '@components/elements/TabButton'
import {GenreSelectStyled} from './GenreSelect.styled'

interface GenreSelectProps {
    genres: string[];
    selectedGenre: string;
    onSelect: (genre: string) => void;
    className?: string;
}

export const GenreSelect: FC<GenreSelectProps> = ({genres, selectedGenre, onSelect, className}) => {
  return (
    <GenreSelectStyled className={className}>
      {genres.map((genre) => (
        <li key={genre}>
          <TabButton onClick={() => onSelect(genre)}
            className={clsx({'selected': genre === selectedGenre})}>{genre}</TabButton>
        </li>
      ))}
    </GenreSelectStyled>
  )
}
