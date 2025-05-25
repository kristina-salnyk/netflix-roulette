export interface MovieDataRequest {
    id: number
    title: string
    poster_path: string
    vote_average: number
    runtime: number
    release_date: string
    overview: string
    genres: string[]
}

export type MovieDataResponse = MovieDataRequest

