import React, {FC} from 'react'
import {GenreSelectStyled} from './GenreSelect.styled'
import {TabButton} from '../TabButton/TabButton'

interface GenreSelectProps {
    genres: string[];
    selectedGenre: string;
    onSelect: (genre: string) => void;
}

export const GenreSelect: FC<GenreSelectProps> = ({genres, selectedGenre, onSelect}) => {
  const handleSelect = (genre: string) => {
    onSelect(genre)
  }

  return <GenreSelectStyled>
    {genres.map((genre) => <li key={genre}>
      <TabButton text={genre}
        mode='outlined'
        onClick={() => handleSelect(genre)}
        selected={genre === selectedGenre}/>
    </li>)}
  </GenreSelectStyled>
}
