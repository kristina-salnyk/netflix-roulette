export const HEADER_HEIGHT = 100

export const MOVIE_IMAGE_WIDTH = 322
export const MOVIE_IMAGE_HEIGHT = 455

export const RATING_ICON_WIDTH = 48
export const RATING_ICON_HEIGHT = 48

export const MOVIE_TILE_WIDTH = 322
export const MOVIE_TILE_HEIGHT = 455

export const DIALOG_WIDTH = 580

export const LOADER_WIDTH = 30
export const LOADER_MARGIN = 10

export const SEARCH_FORM_HEIGHT = 500

export const MOVIE_FORM_LEFT_COLUMN_WIDTH = 480
export const MOVIE_FORM_RIGHT_COLUMN_WIDTH = 300

export const SEARCH_FORM_WIDTH = 800

export const BASE_URL = 'http://localhost:4000'

export const DEFAULT_GENRE = 'All'
export const GENRES = ['All', 'Action', 'Comedy', 'Drama', 'Fantasy', 'Thriller', 'Science Fiction', 'Romance']

export const SORT_VALUES = {
  RELEASE_YEAR: 'release_date',
  VOTE_AVERAGE: 'vote_average',
  TITLE: 'title',
}

export const SORT_OPTIONS = [
  {label: 'Release date', value: SORT_VALUES.RELEASE_YEAR, order: 'desc'},
  {label: 'Rating', value: SORT_VALUES.VOTE_AVERAGE, order: 'desc'},
  {label: 'Title', value: SORT_VALUES.TITLE, order: 'asc'},
]

export const MOVIES = [
  {
    id: 1,
    title: 'Inception',
    posterPath: 'https://m.media-amazon.com/images/S/pv-target-images/cc72ff2193c0f7a85322aee988d6fe1ae2cd9f8800b6ff6e8462790fe2aacaf3.jpg',
    voteAverage: 7.8,
    runtime: 210,
    releaseDate: '2010-01-01',
    overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
    genres: ['Action', 'Sci-Fi'],
  },
  {
    id: 2,
    title: 'The Dark Knight',
    posterPath: 'https://www.screenwritersnetwork.org/beta/wp-content/uploads/2021/02/The-Dark-Knight-Script.jpg',
    voteAverage: 9,
    runtime: 258,
    releaseDate: '2008-01-01',
    overview: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    genres: ['Action', 'Crime', 'Drama'],
  },
  {
    id: 3,
    title: 'Interstellar',
    posterPath: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg',
    voteAverage: 8.9,
    runtime: 269,
    releaseDate: '2014-01-01',
    overview: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    genres: ['Adventure', 'Drama', 'Sci-Fi'],
  },
  {
    id: 4,
    title: 'The Shawshank Redemption',
    posterPath: 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg',
    voteAverage: 9.3,
    runtime: 142,
    releaseDate: '1994-01-01',
    overview: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    genres: ['Drama'],
  },
  {
    id: 5,
    title: 'Parasite',
    posterPath: 'https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    voteAverage: 8.6,
    runtime: 132,
    releaseDate: '2019-01-01',
    overview: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    genres: ['Drama', 'Thriller'],
  },
  {
    id: 6,
    title: 'Whiplash',
    posterPath: 'https://i.ebayimg.com/images/g/5PgAAOSwEKRhZOs7/s-l1200.jpg',
    voteAverage: 8.5,
    runtime: 207,
    releaseDate: '2014-01-01',
    overview: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.',
    genres: ['Drama', 'Music'],
  },
  {
    id: 7,
    title: 'The Matrix',
    posterPath: 'https://m.media-amazon.com/images/I/51vpnbwFHrL.jpg',
    voteAverage: 8.7,
    runtime: 136,
    releaseDate: '1999-01-01',
    overview: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    genres: ['Action', 'Sci-Fi'],
  },
  {
    id: 8,
    title: 'Fight Club',
    posterPath: 'https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    voteAverage: 8.8,
    runtime: 184,
    releaseDate: '1999-01-01',
    overview: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.',
    genres: ['Drama'],
  }
]

