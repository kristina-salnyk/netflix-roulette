import {renderWithThemeProvider} from '@utils/renderWithThemeProvider'
import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {MovieForm} from '@components/elements/MovieForm'

const mockMovie =
    {
      id: '1',
      title: 'Inception',
      releaseDate: '2010-01-01',
      imageUrl: 'https://m.media-amazon.com/images/S/pv-target-images/cc72ff2193c0f7a85322aee988d6fe1ae2cd9f8800b6ff6e8462790fe2aacaf3.jpg',
      genres: ['Action', 'Sci-Fi'],
      rating: 7.8,
      duration: 148,
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
    }

describe('MovieForm', () => {
  test('should render component', () => {
    renderWithThemeProvider(MovieForm, {onSubmit: jest.fn()})
    expect(screen.getByTestId('movie-form')).toBeInTheDocument()
  })

  test('should render title input', () => {
    renderWithThemeProvider(MovieForm, {onSubmit: jest.fn()})
    const titleInput = screen.getByTestId('movie-title')
    expect(titleInput).toBeInTheDocument()
  })

  test('should render image URL input', () => {
    renderWithThemeProvider(MovieForm, {onSubmit: jest.fn()})
    const imageUrlInput = screen.getByTestId('movie-image-url')
    expect(imageUrlInput).toBeInTheDocument()
  })

  test('should render release date input', () => {
    renderWithThemeProvider(MovieForm, {onSubmit: jest.fn()})
    const releaseDateInput = screen.getByTestId('movie-release-date')
    expect(releaseDateInput).toBeInTheDocument()
  })

  test('should render rating input', () => {
    renderWithThemeProvider(MovieForm, {onSubmit: jest.fn()})
    const ratingInput = screen.getByTestId('movie-rating')
    expect(ratingInput).toBeInTheDocument()
  })

  test('should render duration input', () => {
    renderWithThemeProvider(MovieForm, {onSubmit: jest.fn()})
    const durationInput = screen.getByTestId('movie-duration')
    expect(durationInput).toBeInTheDocument()
  })

  test('should render description input', () => {
    renderWithThemeProvider(MovieForm, {onSubmit: jest.fn()})
    const descriptionInput = screen.getByTestId('movie-description')
    expect(descriptionInput).toBeInTheDocument()
  })

  test('should render form with initial movie data', () => {
    renderWithThemeProvider(MovieForm, {initialMovie: mockMovie, onSubmit: jest.fn()})

    const movieTitleInput = screen.getByTestId('movie-title')
    expect(movieTitleInput).toHaveValue('Inception')

    const movieImageUrlInput = screen.getByTestId('movie-image-url')
    expect(movieImageUrlInput).toHaveValue('https://m.media-amazon.com/images/S/pv-target-images/cc72ff2193c0f7a85322aee988d6fe1ae2cd9f8800b6ff6e8462790fe2aacaf3.jpg')

    const movieReleaseDateInput = screen.getByTestId('movie-release-date')
    expect(movieReleaseDateInput).toHaveValue('2010-01-01')

    const movieRatingInput = screen.getByTestId('movie-rating')
    expect(movieRatingInput).toHaveValue(7.8)

    const movieDurationInput = screen.getByTestId('movie-duration')
    expect(movieDurationInput).toHaveValue(148)

    const movieDescriptionInput = screen.getByTestId('movie-description')
    expect(movieDescriptionInput).toHaveValue(mockMovie.description)
  })

  test('should call onSubmit with form data', () => {
    const onSubmitMock = jest.fn()
    renderWithThemeProvider(MovieForm, {onSubmit: onSubmitMock})

    const titleInput = screen.getByTestId('movie-title')
    userEvent.type(titleInput, 'Inception')

    const imageUrlInput = screen.getByTestId('movie-image-url')
    userEvent.type(imageUrlInput, 'https://example.com/image.jpg')

    const releaseDateInput = screen.getByTestId('movie-release-date')
    userEvent.type(releaseDateInput, '2010-01-01')

    const ratingInput = screen.getByTestId('movie-rating')
    userEvent.type(ratingInput, '8.5')

    const durationInput = screen.getByTestId('movie-duration')
    userEvent.type(durationInput, '120')

    const descriptionInput = screen.getByTestId('movie-description')
    userEvent.type(descriptionInput, 'A mind-bending thriller')

    const submitButton = screen.getByTestId('form-submit-button')
    userEvent.click(submitButton)

    expect(onSubmitMock).toHaveBeenCalledWith({
      id: '',
      title: 'Inception',
      imageUrl: 'https://example.com/image.jpg',
      releaseDate: '2010-01-01',
      rating: 8.5,
      duration: 120,
      description: 'A mind-bending thriller',
      genres: []
    })
  })
})
