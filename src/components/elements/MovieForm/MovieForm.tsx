import React, {FC} from 'react'
import {Movie} from '@type/Movie'
import {Input} from '@components/elements/Input'
import {Button} from '@components/elements/Button'
import {TextArea} from '@components/elements/TextArea'
import {
  FormColumns,
  FormControls,
  FormStyled,
  LeftColumn,
  RightColumn
} from '@components/elements/MovieForm/MovieForm.styled'
import {MovieFormInputs} from '@type/MovieFormInputs'
import {SubmitHandler, useForm} from 'react-hook-form'
import {MovieData, NewMovieData} from '@type/MovieData'
import {yupResolver} from '@hookform/resolvers/yup'
import {schema} from '@components/elements/MovieForm/schema'

interface MovieFormProps {
    initialMovie?: Movie
    onMovieCreate?: (movie: NewMovieData) => void
    onMovieEdit?: (movie: MovieData) => void
    onClose?: () => void
}

export const MovieForm: FC<MovieFormProps> = ({initialMovie, onMovieCreate, onMovieEdit}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    clearErrors
  } = useForm<MovieFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: initialMovie?.title,
      posterPath: initialMovie?.posterPath,
      voteAverage: initialMovie?.voteAverage,
      runtime: initialMovie?.runtime,
      releaseDate: initialMovie?.releaseDate,
      overview: initialMovie?.overview,
    }
  })

  const onFormSubmit: SubmitHandler<MovieFormInputs> = (data) => {
    const id = initialMovie?.id

    const movie = {
      title: data.title,
      poster_path: data.posterPath,
      vote_average: data.voteAverage,
      runtime: data.runtime,
      release_date: data.releaseDate,
      overview: data.overview,
      genres: [...(initialMovie?.genres || ['Action', 'Drama'])],
    }

    if (id) {
      return onMovieEdit?.({...movie, id})
    }

    onMovieCreate?.(movie)
  }

  const {ref: releaseDateRef, ...rest} = register('releaseDate')

  return (
  //TODO: Add custom multiple select for genres
    <FormStyled role='form' onSubmit={handleSubmit(onFormSubmit)}>
      <FormColumns>
        <LeftColumn>
          <Input label='Title'
            error={errors.title?.message}
            {...register('title')}/>
          <Input maxLength={500}
            label='Movie URL'
            placeholder='https://'
            error={errors.posterPath?.message}
            {...register('posterPath')}/>
        </LeftColumn>
        <RightColumn>
          <Input type='date'
            label='Release date'
            error={errors.releaseDate?.message}
            {...rest}
            ref={releaseDateRef}/>
          <Input type='number'
            label='Rating'
            step={0.1}
            error={errors.voteAverage?.message}
            {...register('voteAverage')}/>
          <Input type='number'
            label='Runtime'
            placeholder='minutes'
            error={errors.runtime?.message}
            {...register('runtime')}/>
        </RightColumn>
      </FormColumns>
      <TextArea label='Overview'
        rows={4}
        placeholder='Movie overview'
        error={errors.overview?.message}
        {...register('overview')}/>
      <FormControls>
        <Button type='reset' mode='outlined' onClick={() => clearErrors()}>Reset</Button>
        <Button type='submit' mode='filled'>Submit</Button>
      </FormControls>
    </FormStyled>
  )
}
