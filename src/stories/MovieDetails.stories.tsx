import React from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import {http, HttpResponse} from 'msw'
import {QueryClient, QueryClientProvider} from 'react-query'
import {reactRouterParameters, withRouter} from 'storybook-addon-remix-react-router'
import MovieDetails from '@components/pages/MovieListPage/components/MovieDetails/MovieDetails'
import {BASE_URL} from '@constants'

const mockMovieResponse = {
  id: 1,
  title: 'Inception',
  release_date: '2020-05-01',
  poster_path: 'https://m.media-amazon.com/images/S/pv-target-images/cc72ff2193c0f7a85322aee988d6fe1ae2cd9f8800b6ff6e8462790fe2aacaf3.jpg',
  genres: ['Action', 'Sci-Fi'],
  vote_average: 7.8,
  runtime: 210,
  overview: 'A thief who steals corporate secrets through dream-sharing tech...',
}

const meta = {
  title: 'Library/MovieDetails',
  component: MovieDetails,
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({
      location: {pathParams: {movieId: '1'}},
      routing: {path: 'movies/:movieId'}
    }),
    msw: {
      handlers: [
        http.get(`${BASE_URL}/movies/1`, () => {
          return HttpResponse.json(mockMovieResponse)
        }),
      ],
    },
  },
  decorators: [(Story) => (
    <QueryClientProvider client={new QueryClient()}>
      <Story/>
    </QueryClientProvider>
  ), withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof MovieDetails>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {}

export const WithUnavailableImage: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`${BASE_URL}/movies/1`, () => {
          return HttpResponse.json({
            ...mockMovieResponse,
            poster_path: 'https://example.com/invalid-image.jpg',
          })
        }),
      ],
    },
  }
}


