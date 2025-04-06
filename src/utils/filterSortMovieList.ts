import {Movie} from '@type/Movie'

export const filterSortMovieList = (movies: Movie[], searchQuery: string, selectedGenre: string, sortBy: string) => {
  const filteredMovies = movies.filter((movie: Movie) => {
    const filteredByGenre = (selectedGenre === 'All') ? true : movie.genres.includes(selectedGenre)

    const title = movie.title.toLowerCase()
    const query = searchQuery.toLowerCase().trim()
    if (filteredByGenre && searchQuery) {
      return title.includes(query)
    }
    return filteredByGenre
  })

  return filteredMovies.sort((a, b) => {
    switch (sortBy) {
      case 'releaseYear':
        return b.releaseYear - a.releaseYear
      case 'duration':
        return parseInt(b.duration) - parseInt(a.duration)
      case 'title':
        return a.title.localeCompare(b.title)
      case 'rating':
        return b.rating - a.rating
    }
    return 0
  })
}
