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

interface MovieFormProps {
    initialMovie?: Movie
    onSubmit: (movie: Movie) => void
}

export const MovieForm: FC<MovieFormProps> = ({initialMovie, onSubmit}) => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const movie: Movie = {
      id: initialMovie?.id || '',
      title: formData.get('movie-title')?.toString() || '',
      imageUrl: formData.get('movie-image-url')?.toString() || '',
      rating: Number.parseFloat(formData.get('movie-rating')?.toString() || '0'),
      duration: Number.parseFloat(formData.get('movie-duration')?.toString() || '0'),
      description: formData.get('movie-description')?.toString() || '',
      releaseDate: formData.get('movie-release-date')?.toString() || '',
      genres: [...(initialMovie?.genres || [])]
    }

    onSubmit(movie)
  }

  return (
  //TODO: Add custom multiple select for genres
    <FormStyled role='form' onSubmit={handleFormSubmit}>
      <FormColumns>
        <LeftColumn>
          <Input required
            name='movie-title'
            label='Tilte'
            minLength={3}
            maxLength={200}
            defaultValue={initialMovie?.title}/>
          <Input maxLength={500}
            name='movie-image-url'
            label='Movie URL'
            placeholder='https://'
            defaultValue={initialMovie?.imageUrl}/>
        </LeftColumn>
        <RightColumn>
          <Input required
            name='movie-release-date'
            type='date'
            label='Release date'
            defaultValue={initialMovie?.releaseDate}/>
          <Input required
            name='movie-rating'
            type='number'
            label='Rating'
            min={0}
            max={10}
            step={0.1}
            defaultValue={initialMovie?.rating}/>
          <Input required
            name='movie-duration'
            type='number'
            label='Runtime'
            min={0}
            max={1000}
            placeholder='minutes'
            defaultValue={initialMovie?.duration}/>
        </RightColumn>
      </FormColumns>
      <TextArea required
        name='movie-description'
        label='Overview'
        rows={4}
        maxLength={1000}
        placeholder='Movie description'
        defaultValue={initialMovie?.description}/>
      <FormControls>
        <Button type='reset' mode='outlined'>Reset</Button>
        <Button type='submit' mode='filled'>Submit</Button>
      </FormControls>
    </FormStyled>
  )
}
