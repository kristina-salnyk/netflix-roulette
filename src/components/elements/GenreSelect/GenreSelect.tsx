import React, {FC} from 'react'
import clsx from 'clsx'
import {TabButton} from '@components/elements/TabButton'
import {GenreSelectStyled} from './GenreSelect.styled'

interface GenreSelectProps {
    genres: string[];
    activeGenre: string;
    onSelect: (genre: string) => void;
    className?: string;
}

export const GenreSelect: FC<GenreSelectProps> = ({genres, activeGenre, onSelect, className}) => {
  return (
    <GenreSelectStyled className={className} data-testid="genre-select">
      {genres.map((genre) => (
        <li key={genre}>
          <TabButton onClick={() => onSelect(genre)}
            className={clsx({'selected': genre === activeGenre})}>{genre}</TabButton>
        </li>
      ))}
    </GenreSelectStyled>
  )
}
