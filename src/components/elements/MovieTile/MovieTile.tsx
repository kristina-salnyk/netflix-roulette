import React, {FC} from 'react'

interface MovieTileProps {
    movie: {
        name: string;
        releaseYear: number;
        imageUrl: string;
        genres: string[];
    },
    onClick: () => void;
}

export const MovieTile: FC<MovieTileProps> = () => {
  return (
    <div>
      <h1>MovieTile</h1>
    </div>
  )
}
