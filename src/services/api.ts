import { TMDB_URL, options } from './config'

import { mainMovie, movies, tv, mainTv, genres as genresMock } from '../mock'

import { Genre, MainMovie, Movie, MovieInfo } from '../models/movies'
import { ITVshow, TvShow } from '../models/tv'

export const getMainMovie = async (id: string): Promise<Movie | undefined> => {
  try {
    const movie: any = import.meta.env.DEV ? mainMovie : await fetch(`${TMDB_URL}/movie/${id}?language=en-US`, options)
    const response = import.meta.env.DEV ? mainMovie : await movie.json()

    return new Movie(response)
  } catch (error) {
    if (error instanceof Error) throw new Error(`Error getting main movie ${error}`)
  }
}

export const getMovieById = async (id: number): Promise<MovieInfo | undefined> => {
  try {
    const movie: any = import.meta.env.DEV ? mainMovie : await fetch(`${TMDB_URL}/movie/${id}?language=en-US`, options)
    const response = import.meta.env.DEV ? mainMovie : await movie.json()

    return new MovieInfo(response)
  } catch (error) {
    if (error instanceof Error) throw new Error(`Error getting movie by id ${error}`)
  }
}

export const getMovies = async (): Promise<Movie[] | undefined> => {
  try {
    const movie: any = import.meta.env.DEV ? movies : await fetch(`${TMDB_URL}/movie/popular?language=en-US`, options)
    const response = import.meta.env.DEV ? movies : await movie.json()

    return response.results.map((movie: MainMovie) => new Movie(movie))
  } catch (error) {
    if (error instanceof Error) throw new Error(`Error getting all movies ${error}`)
  }
}

export const getTvShows = async (): Promise<TvShow[] | undefined> => {
  try {
    const shows: any = import.meta.env.DEV ? tv : await fetch(`${TMDB_URL}/tv/popular?language=en-US`, options)
    const response = import.meta.env.DEV ? tv : await shows.json()

    return response.results.map((tvShow: ITVshow) => new TvShow(tvShow))
  } catch (error) {
    if (error instanceof Error) throw new Error(`Error getting tv shows ${error}`)
  }
}

export const getTvShowById = async (id: number): Promise<TvShow | undefined> => {
  try {
    const show: any = import.meta.env.DEV ? mainTv : await fetch(`${TMDB_URL}/tv/${id}?language=en-US`, options)
    const response = import.meta.env.DEV ? mainTv : await show.json()

    return new TvShow(response)
  } catch (error) {
    if (error instanceof Error) throw new Error(`Error getting tv show by id ${error}`)
  }
}

export const getGenres = async (): Promise<Genre[] | undefined> => {
  try {
    const response: any = import.meta.env.DEV ? genresMock : await fetch(`${TMDB_URL}/genre/movie/list`, options)
    const { genres } = import.meta.env.DEV ? genresMock : await response.json()

    return import.meta.env.DEV ? genresMock.genres : genres
  } catch (error) {
    if (error instanceof Error) throw new Error(`Error getting tv show by id ${error}`)
  }
}
