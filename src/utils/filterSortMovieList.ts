import {Movie} from '@type/Movie'
import {DEFAULT_GENRE, SORT_VALUES} from '@constants'

export const filterSortMovieList = (movies: Movie[], searchQuery: string, selectedGenre: string, sortBy: string) => {
  const filteredMovies = movies.filter((movie: Movie) => {
    const filteredByGenre = (selectedGenre === DEFAULT_GENRE) || movie.genres.includes(selectedGenre)

    const title = movie.title.toLowerCase()
    const query = searchQuery.toLowerCase().trim()
    if (filteredByGenre && searchQuery) {
      return title.includes(query)
    }
    return filteredByGenre
  })

  return filteredMovies.sort((a, b) => {
    switch (sortBy) {
      case SORT_VALUES.RELEASE_YEAR:
        return b.releaseYear - a.releaseYear
      case SORT_VALUES.TITLE:
        return a.title.localeCompare(b.title)
      case SORT_VALUES.RATING:
        return b.rating - a.rating
    }
    return 0
  })
}
