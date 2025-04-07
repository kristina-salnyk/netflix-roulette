export const MOVIE_IMAGE_WIDTH = 322
export const MOVIE_IMAGE_HEIGHT = 455

export const RATING_ICON_WIDTH = 48
export const RATING_ICON_HEIGHT = 48

export const MOVIE_TILE_WIDTH = 322
export const MOVIE_TILE_HEIGHT = 455

export const DEFAULT_GENRE = 'All'
export const GENRES = ['All', 'Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller']

export const SORT_VALUES = {
  RELEASE_YEAR: 'releaseYear',
  RATING: 'rating',
  TITLE: 'title',
}

export const SORT_OPTIONS = [
  {label: 'Release date', value: SORT_VALUES.RELEASE_YEAR},
  {label: 'Rating', value: SORT_VALUES.RATING},
  {label: 'Title', value: SORT_VALUES.TITLE},
]

export const MOVIES = [
  {
    id: '1',
    title: 'Inception',
    releaseYear: 2010,
    imageUrl: 'https://m.media-amazon.com/images/S/pv-target-images/cc72ff2193c0f7a85322aee988d6fe1ae2cd9f8800b6ff6e8462790fe2aacaf3.jpg',
    genres: ['Action', 'Sci-Fi'],
    rating: 7.8,
    duration: '2h 28m',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
  },
  {
    id: '2',
    title: 'The Dark Knight',
    releaseYear: 2008,
    imageUrl: 'https://www.screenwritersnetwork.org/beta/wp-content/uploads/2021/02/The-Dark-Knight-Script.jpg',
    genres: ['Action', 'Crime', 'Drama'],
    rating: 9,
    duration: '2h 32m',
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
  },
  {
    id: '3',
    title: 'Interstellar',
    releaseYear: 2014,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg',
    genres: ['Adventure', 'Drama', 'Sci-Fi'],
    rating: 8.9,
    duration: '2h 49m',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
  },
  {
    id: '4',
    title: 'The Shawshank Redemption',
    releaseYear: 1994,
    imageUrl: 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg',
    genres: ['Drama'],
    rating: 9.3,
    duration: '2h 22m',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  },
  {
    id: '5',
    title: 'Parasite',
    releaseYear: 2019,
    imageUrl: 'https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    genres: ['Drama', 'Thriller'],
    rating: 8.6,
    duration: '2h 12m',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
  },
  {
    id: '6',
    title: 'Whiplash',
    releaseYear: 2014,
    imageUrl: 'https://i.ebayimg.com/images/g/5PgAAOSwEKRhZOs7/s-l1200.jpg',
    genres: ['Drama', 'Music'],
    rating: 8.5,
    duration: '1h 47m',
    description: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.',
  },
  {
    id: '7',
    title: 'The Matrix',
    releaseYear: 1999,
    imageUrl: 'https://m.media-amazon.com/images/I/51vpnbwFHrL.jpg',
    genres: ['Action', 'Sci-Fi'],
    rating: 8.7,
    duration: '2h 16m',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
  },
  {
    id: '8',
    title: 'Fight Club',
    releaseYear: 1999,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    genres: ['Drama'],
    rating: 8.8,
    duration: '2h 19m',
    description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.',
  }
]

