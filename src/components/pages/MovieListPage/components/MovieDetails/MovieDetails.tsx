import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import {useQuery} from 'react-query'
import {Movie} from '@type/Movie'
import moviePlaceholder from '@images/movie-placeholder.png'
import {getFormattedDuration} from '@utils/getFormattedDuration'
import {getYearFromDate} from '@utils/getYearFromDate'
import {Container} from '@components/elements/Container'
import {Loader} from '@components/elements/Loader'
import {InlineMessage} from '@components/elements/InlineMessage'
import {useMovieImage} from '@hooks/useMovieImage'
import {fetchMovie, MovieResponse} from '@services/api/fetchMovie'
import {
  MovieDescription,
  MovieDetailsContent,
  MovieDetailsStyled,
  MovieGenres,
  MovieHeading,
  MovieImage,
  MovieInfo,
  MovieMeta,
  MovieRating,
  MovieTitle
} from './MovieDetails.styled'

const MovieDetails = () => {
  const {movieId} = useParams()
  const [movie, setMovie] = useState<Movie | null>(null)
  const {movieImage, onError} = useMovieImage(movie?.imageUrl ?? '')

  const {data, isLoading, isError} = useQuery<MovieResponse | null>({
    queryKey: ['movie', movieId],
    queryFn: ({signal}) => fetchMovie(movieId, signal),
    keepPreviousData: true,
  })

  useEffect(() => {
    if (data) {
      const movie: Movie = {
        id: data.id.toString(),
        title: data.title,
        releaseDate: data.release_date,
        imageUrl: data.poster_path,
        genres: data.genres,
        rating: data.vote_average,
        duration: data.runtime,
        description: data.overview,
      }

      setMovie(movie)
    }
  }, [setMovie, data])

  const releaseYear = getYearFromDate(movie?.releaseDate ?? '')
  const duration = getFormattedDuration(movie?.duration ?? 0)

  return (
    <MovieDetailsStyled data-testid="movie-details">
      <Container>
        {isLoading && <Loader/>}
        {!isLoading && isError && <InlineMessage text='Something went wrong. Please try again later'/>}
        {!isLoading && !isError && !movie && <InlineMessage text='Movie not found'/>}
        {!isLoading && movie && (
          <MovieDetailsContent role="region" aria-label="Movie details">
            <MovieImage src={movieImage || moviePlaceholder}
              onError={onError}
              alt={movie?.title}/>
            <MovieInfo>
              <MovieHeading>
                <MovieTitle data-testid="movie-title">{movie?.title}</MovieTitle>
                <MovieRating>{movie?.rating}</MovieRating>
              </MovieHeading>
              <MovieGenres>{movie?.genres.join(', ')}</MovieGenres>
              <MovieMeta>
                {releaseYear && <span>{releaseYear}</span>}
                {duration && <span>{duration}</span>}
              </MovieMeta>
              <MovieDescription>{movie?.description}</MovieDescription>
            </MovieInfo>
          </MovieDetailsContent>)}
      </Container>
    </MovieDetailsStyled>
  )
}

export default MovieDetails
