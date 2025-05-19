import {renderWithThemeProvider} from '@utils/renderWithThemeProvider'
import {screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {MovieForm} from '@components/elements/MovieForm'

const mockMovie = {
  id: 1,
  title: 'Inception',
  posterPath: 'https://m.media-amazon.com/images/S/pv-target-images/cc72ff2193c0f7a85322aee988d6fe1ae2cd9f8800b6ff6e8462790fe2aacaf3.jpg',
  voteAverage: 7.8,
  runtime: 148,
  releaseDate: '2010-01-01',
  overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
  genres: ['Action', 'Sci-Fi'],
}

describe('MovieForm', () => {
  test('should render component', () => {
    renderWithThemeProvider(MovieForm, {onMovieCreate: jest.fn()})
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  test('should render title input', () => {
    renderWithThemeProvider(MovieForm, {onMovieCreate: jest.fn()})
    expect(screen.getByRole('textbox', {name: /Title/i})).toBeInTheDocument()
  })

  test('should render movie URl input', () => {
    renderWithThemeProvider(MovieForm, {onMovieCreate: jest.fn()})
    expect(screen.getByRole('textbox', {name: /Movie URL/i})).toBeInTheDocument()
  })

  test('should render release date input', () => {
    renderWithThemeProvider(MovieForm, {onMovieCreate: jest.fn()})
    expect(screen.getByLabelText(/Release date/i)).toBeInTheDocument()
  })

  test('should render rating input', () => {
    renderWithThemeProvider(MovieForm, {onMovieCreate: jest.fn()})
    expect(screen.getByRole('spinbutton', {name: /Rating/i})).toBeInTheDocument()
  })

  test('should render runtime input', () => {
    renderWithThemeProvider(MovieForm, {onMovieCreate: jest.fn()})
    expect(screen.getByRole('spinbutton', {name: /Runtime/i})).toBeInTheDocument()
  })

  test('should render overview input', () => {
    renderWithThemeProvider(MovieForm, {onMovieCreate: jest.fn()})
    expect(screen.getByRole('textbox', {name: /Overview/i})).toBeInTheDocument()
  })

  test('should render form with initial movie data', () => {
    renderWithThemeProvider(MovieForm, {initialMovie: mockMovie, onMovieEdit: jest.fn()})

    const movieTitleInput = screen.getByDisplayValue(/Inception/i)
    expect(movieTitleInput).toBeInTheDocument()

    const moviePosterUrlInput = screen.getByDisplayValue(mockMovie.posterPath)
    expect(moviePosterUrlInput).toBeInTheDocument()

    const movieReleaseDateInput = screen.getByDisplayValue(/2010-01-01/i)
    expect(movieReleaseDateInput).toBeInTheDocument()

    const movieRatingInput = screen.getByDisplayValue(7.8)
    expect(movieRatingInput).toBeInTheDocument()

    const movieRuntimeInput = screen.getByDisplayValue(148)
    expect(movieRuntimeInput).toBeInTheDocument()

    const movieOverviewInput = screen.getByDisplayValue(mockMovie.overview)
    expect(movieOverviewInput).toBeInTheDocument()
  })

  test('should call onMovieCreate with form data', async () => {
    const onMovieCreateMock = jest.fn()
    renderWithThemeProvider(MovieForm, {onMovieCreate: onMovieCreateMock})

    const titleInput = screen.getByRole('textbox', {name: /Title/i})
    userEvent.type(titleInput, 'Inception')

    const movieUrlInput = screen.getByRole('textbox', {name: /Movie URL/i})
    userEvent.type(movieUrlInput, 'https://example.com/image.jpg')

    const releaseDateInput = screen.getByLabelText(/Release date/i)
    userEvent.type(releaseDateInput, '2010-01-01')

    const ratingInput = screen.getByRole('spinbutton', {name: /Rating/i})
    userEvent.type(ratingInput, '8.5')

    const runtimeInput = screen.getByRole('spinbutton', {name: /Runtime/i})
    userEvent.type(runtimeInput, '120')

    const overviewInput = screen.getByRole('textbox', {name: /Overview/i})
    userEvent.type(overviewInput, 'A mind-bending thriller')

    const submitButton = screen.getByRole('button', {name: /Submit/i})
    userEvent.click(submitButton)

    await waitFor(() => {
      expect(onMovieCreateMock).toHaveBeenCalledWith({
        title: 'Inception',
        poster_path: 'https://example.com/image.jpg',
        vote_average: 8.5,
        runtime: 120,
        release_date: '2010-01-01',
        overview: 'A mind-bending thriller',
        genres: ['Action', 'Drama']
      })
    })
  })
})
