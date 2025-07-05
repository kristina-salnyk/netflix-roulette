import React, {useEffect} from 'react'
import {useParams} from 'react-router'
import {Movie} from '@type/Movie'
import moviePlaceholder from '@images/movie-placeholder.png'
import {getFormattedRuntime} from '@utils/getFormattedRuntime'
import {getYearFromDate} from '@utils/getYearFromDate'
import {Container} from '@components/elements/Container'
import {Loader} from '@components/elements/Loader'
import {InlineMessage} from '@components/elements/InlineMessage'
import {useMoviePoster} from '@hooks/useMoviePoster'
import {useMovieData} from '@hooks/useMovieData'
import {
  MovieDetailsContent,
  MovieDetailsStyled,
  MovieGenres,
  MovieHeading,
  MovieInfo,
  MovieMeta,
  MovieOverview,
  MoviePoster,
  MovieRating,
  MovieTitle
} from './MovieDetails.styled'
import {useMovies} from '@contexts/MoviesContext'

const MovieDetails = () => {
  const params = useParams()
  const movieId = Number.parseInt(params.movieId ?? '')
  const {selectedMovie, setSelectedMovie} = useMovies()
  const {moviePoster, onError} = useMoviePoster(selectedMovie?.posterPath ?? '')
  const {data, isLoading} = useMovieData(movieId)

  useEffect(() => {
    if (data) {
      const movie: Movie = {
        id: data.id,
        title: data.title,
        posterPath: data.poster_path,
        voteAverage: data.vote_average,
        runtime: data.runtime,
        releaseDate: data.release_date,
        overview: data.overview,
        genres: data.genres,
      }

      setSelectedMovie(movie)
    }

    return () => {
      setSelectedMovie(null)
    }
  }, [setSelectedMovie, data])

  const releaseYear = getYearFromDate(selectedMovie?.releaseDate ?? '')
  const runtime = getFormattedRuntime(selectedMovie?.runtime ?? 0)

  return (
    <MovieDetailsStyled data-testid="movie-details">
      <Container>
        {isLoading && <Loader/>}
        {!isLoading && !selectedMovie && <InlineMessage text='Failed to load movie details'/>}
        {!isLoading && selectedMovie && (
          <MovieDetailsContent role="region" aria-label="Movie details">
            <MoviePoster src={moviePoster || moviePlaceholder}
              onError={onError}
              alt={selectedMovie?.title}/>
            <MovieInfo>
              <MovieHeading>
                <MovieTitle data-testid="movie-title">{selectedMovie?.title}</MovieTitle>
                <MovieRating>{selectedMovie?.voteAverage}</MovieRating>
              </MovieHeading>
              <MovieGenres>{selectedMovie?.genres.join(', ')}</MovieGenres>
              <MovieMeta>
                {releaseYear && <span>{releaseYear}</span>}
                {runtime && <span>{runtime}</span>}
              </MovieMeta>
              <MovieOverview>{selectedMovie?.overview}</MovieOverview>
            </MovieInfo>
          </MovieDetailsContent>)}
      </Container>
    </MovieDetailsStyled>
  )
}

export default MovieDetails
