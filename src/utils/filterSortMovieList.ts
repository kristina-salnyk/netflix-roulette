import {Movie} from '@type/Movie'
import {DEFAULT_GENRE, SORT_VALUES} from '@constants'

export const filterSortMovieList = (movies: Movie[], searchQuery: string, selectedGenre: string, sortCriterion: string) => {
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
    switch (sortCriterion) {
      case SORT_VALUES.RELEASE_YEAR: {
        const dateA = new Date(a.releaseDate).getTime()
        const dateB = new Date(b.releaseDate).getTime()
        return (isNaN(dateB) ? 0 : dateB) - (isNaN(dateA) ? 0 : dateA)
      }
      case SORT_VALUES.TITLE:
        return a.title.localeCompare(b.title)
      case SORT_VALUES.VOTE_AVERAGE:
        return b.voteAverage - a.voteAverage
    }
    return 0
  })
}
