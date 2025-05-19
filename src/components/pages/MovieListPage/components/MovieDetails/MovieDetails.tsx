import React, {useEffect, useState} from 'react'
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

const MovieDetails = () => {
  const {movieId = ''} = useParams()
  const [movie, setMovie] = useState<Movie | null>(null)
  const {moviePoster, onError} = useMoviePoster(movie?.posterPath ?? '')
  const id = Number.parseInt(movieId)
  const {data, isLoading, isError} = useMovieData(id)

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

      setMovie(movie)
    }
  }, [setMovie, data])

  const releaseYear = getYearFromDate(movie?.releaseDate ?? '')
  const runtime = getFormattedRuntime(movie?.runtime ?? 0)

  return (
    <MovieDetailsStyled data-testid="movie-details">
      <Container>
        {isLoading && <Loader/>}
        {!isLoading && isError && <InlineMessage text='Something went wrong. Please try again later'/>}
        {!isLoading && !isError && !movie && <InlineMessage text='Movie not found'/>}
        {!isLoading && movie && (
          <MovieDetailsContent role="region" aria-label="Movie details">
            <MoviePoster src={moviePoster || moviePlaceholder}
              onError={onError}
              alt={movie?.title}/>
            <MovieInfo>
              <MovieHeading>
                <MovieTitle data-testid="movie-title">{movie?.title}</MovieTitle>
                <MovieRating>{movie?.voteAverage}</MovieRating>
              </MovieHeading>
              <MovieGenres>{movie?.genres.join(', ')}</MovieGenres>
              <MovieMeta>
                {releaseYear && <span>{releaseYear}</span>}
                {runtime && <span>{runtime}</span>}
              </MovieMeta>
              <MovieOverview>{movie?.overview}</MovieOverview>
            </MovieInfo>
          </MovieDetailsContent>)}
      </Container>
    </MovieDetailsStyled>
  )
}

export default MovieDetails
