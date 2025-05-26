import * as yup from 'yup'
import {ObjectSchema} from 'yup'
import {MovieFormInputs} from '@type/MovieFormInputs'

export const schema: ObjectSchema<MovieFormInputs> = yup.object({
  title: yup
    .string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters')
    .max(200, 'Title must be at most 200 characters'),
  posterPath: yup
    .string()
    .required('Poster URL is required')
    .url('Must be a valid URL')
    .max(500, 'URL must be at most 500 characters'),
  voteAverage: yup
    .number()
    .typeError('Rating must be a number (0-10)')
    .required('Rating is required')
    .min(0, 'Rating must be at least 0')
    .max(10, 'Rating must be at most 10'),
  runtime: yup
    .number()
    .typeError('Duration must be a number (0-1000)')
    .required('Runtime is required')
    .min(0, 'Runtime must be at least 0')
    .max(1000, 'Runtime must be at most 1000'),
  releaseDate: yup
    .string()
    .required('Release date is required')
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
  overview: yup
    .string()
    .required('Overview is required')
    .max(1000, 'Overview must be at most 1000 characters'),
  genres: yup
    .array()
    .of(yup.string().required('Genre is required'))
})
