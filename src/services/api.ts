import { TMDB_URL, options } from './config'
import { MainMovie, Movie, MovieInfo } from '../models/movies'

import { mainMovie, movies, tv } from '../mock'

export const getMainMovie = async (): Promise<Movie | undefined> => {
  try {
    const movie: any = import.meta.env.DEV ? mainMovie : await fetch(`${TMDB_URL}/movie/502356?language=en-US`, options)
    const response = import.meta.env.DEV ? mainMovie : await movie.json()

    return new Movie(response)
  } catch (error) {
    if (error instanceof Error) throw new Error('Error getting main movie')
  }
}

export const getMovieById = async (id: number): Promise<MovieInfo | undefined> => {
  try {
    const movie: any = import.meta.env.DEV ? mainMovie : await fetch(`${TMDB_URL}/movie/${id}?language=en-US`, options)
    const response = import.meta.env.DEV ? mainMovie : await movie.json()

    return new MovieInfo(response)
  } catch (error) {
    if (error instanceof Error) throw new Error('Error getting main movie')
  }
}

export const getMovies = async (): Promise<Movie[] | undefined> => {
  try {
    const movie: any = import.meta.env.DEV ? movies : await fetch(`${TMDB_URL}/movie/popular?language=en-US`, options)
    const response = import.meta.env.DEV ? movies : await movie.json()

    return response.results.map((movie: MainMovie ) => new Movie(movie))
  } catch (error) {
    if (error instanceof Error) throw new Error('Error getting main movie')
  }
}

export const getTvShows = async (): Promise<Movie[] | undefined> => {
  try {
    const shows: any = import.meta.env.DEV ? tv : await fetch(`${TMDB_URL}/tv/popular?language=en-US`, options)
    const response = import.meta.env.DEV ? tv : await shows.json()

    return response.results.map((tvShow: MainMovie ) => new Movie(tvShow))
  } catch (error) {
    if (error instanceof Error) throw new Error('Error getting main movie')
  }
}
