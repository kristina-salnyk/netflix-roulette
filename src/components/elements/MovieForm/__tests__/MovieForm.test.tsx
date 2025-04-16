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
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  test('should render title input', () => {
    renderWithThemeProvider(MovieForm, {onSubmit: jest.fn()})
    expect(screen.getByRole('textbox', {name: /Tilte/i})).toBeInTheDocument()
  })

  test('should render image URL input', () => {
    renderWithThemeProvider(MovieForm, {onSubmit: jest.fn()})
    expect(screen.getByRole('textbox', {name: /Movie URL/i})).toBeInTheDocument()
  })

  test('should render release date input', () => {
    renderWithThemeProvider(MovieForm, {onSubmit: jest.fn()})
    expect(screen.getByLabelText(/Release date/i)).toBeInTheDocument()
  })

  test('should render rating input', () => {
    renderWithThemeProvider(MovieForm, {onSubmit: jest.fn()})
    expect(screen.getByRole('spinbutton', {name: /Rating/i})).toBeInTheDocument()
  })

  test('should render duration input', () => {
    renderWithThemeProvider(MovieForm, {onSubmit: jest.fn()})
    expect(screen.getByRole('spinbutton', {name: /Runtime/i})).toBeInTheDocument()
  })

  test('should render description input', () => {
    renderWithThemeProvider(MovieForm, {onSubmit: jest.fn()})
    expect(screen.getByRole('textbox', {name: /Overview/i})).toBeInTheDocument()
  })

  test('should render form with initial movie data', () => {
    renderWithThemeProvider(MovieForm, {initialMovie: mockMovie, onSubmit: jest.fn()})

    const movieTitleInput = screen.getByDisplayValue(/Inception/i)
    expect(movieTitleInput).toBeInTheDocument()

    const movieImageUrlInput = screen.getByDisplayValue(mockMovie.imageUrl)
    expect(movieImageUrlInput).toBeInTheDocument()

    const movieReleaseDateInput = screen.getByDisplayValue(/2010-01-01/i)
    expect(movieReleaseDateInput).toBeInTheDocument()

    const movieRatingInput = screen.getByDisplayValue(7.8)
    expect(movieRatingInput).toBeInTheDocument()

    const movieDurationInput = screen.getByDisplayValue(148)
    expect(movieDurationInput).toBeInTheDocument()

    const movieDescriptionInput = screen.getByDisplayValue(mockMovie.description)
    expect(movieDescriptionInput).toBeInTheDocument()
  })

  test('should call onSubmit with form data', () => {
    const onSubmitMock = jest.fn()
    renderWithThemeProvider(MovieForm, {onSubmit: onSubmitMock})

    const titleInput = screen.getByRole('textbox', {name: /Tilte/i})
    userEvent.type(titleInput, 'Inception')

    const imageUrlInput = screen.getByRole('textbox', {name: /Movie URL/i})
    userEvent.type(imageUrlInput, 'https://example.com/image.jpg')

    const releaseDateInput = screen.getByLabelText(/Release date/i)
    userEvent.type(releaseDateInput, '2010-01-01')

    const ratingInput = screen.getByRole('spinbutton', {name: /Rating/i})
    userEvent.type(ratingInput, '8.5')

    const durationInput = screen.getByRole('spinbutton', {name: /Runtime/i})
    userEvent.type(durationInput, '120')

    const descriptionInput = screen.getByRole('textbox', {name: /Overview/i})
    userEvent.type(descriptionInput, 'A mind-bending thriller')

    const submitButton = screen.getByRole('button', {name: /Submit/i})
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
