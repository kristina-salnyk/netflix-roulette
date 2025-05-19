export interface MovieData {
    id: number
    title: string
    poster_path: string
    vote_average: number
    runtime: number
    release_date: string
    overview: string
    genres: string[]
}

export type NewMovieData = Omit<MovieData, 'id'>

