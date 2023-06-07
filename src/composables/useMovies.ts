import { Ref, ref } from 'vue'
import { getMovies, getTvShows, getMainMovie, getMovieById, getTvShowById, getGenres } from '../services/api'

import type { Genre, Movie, MovieInfo } from '../models/movies'
import { TvShow } from '../models/tv'

const useMovies = () => {
  const movies = ref<Movie[] | undefined>([])
  const tvShows = ref<TvShow[] | undefined>([])
  const tvShow = ref<TvShow | undefined>()
  const mainMovie = ref<Movie | undefined>()
  const movieById = ref<MovieInfo | undefined>()
  const loading = ref(false)
  const error = ref(false)
  const genres = ref<Genre[] | undefined>([])
  const filteredMovies = ref<Movie[]>()

  const getMoviesList = async () => {
    try {
      loading.value = true
      movies.value = await getMovies()
      return movies.value
    } catch (err) {
      console.error(err)
      error.value = true
    } finally {
      loading.value = false
    }
  }

  const getTvShowList = async () => {
    tvShows.value = await getTvShows()
  }

  const getTvShowByIdData = async (id: number) => {
    tvShow.value = await getTvShowById(id)
  }

  const getRandomMovie = async (movies: Ref<Movie[] | undefined>) => {
    if (movies.value) {
      const randomMovie = Math.floor(Math.random() * movies.value.length)
      const movieById = movies.value[randomMovie].id
      mainMovie.value = await getMainMovie(movieById)
    }
  }

  const getMovieByIdData = async (id: number) => {
    try {
      loading.value = true
      movieById.value = await getMovieById(id)
    } catch (err) {
      console.error(err)
      error.value = true
    } finally {
      loading.value = false
    }
  }

  const getGenresList = async () => {
    return await getGenres()
  }

  const filterMovies = (input: string | number, type: 'name' | 'genre') => {
    if (type === 'name' && typeof input === 'string') {
      if (input && filteredMovies.value?.length) {
        filteredMovies.value = filteredMovies.value.filter((movie) => movie.title.toLowerCase().includes(input.toLowerCase()))
        return filteredMovies.value
      }
      filteredMovies.value = movies.value?.filter((movie) => movie.title.toLowerCase().includes(input.toLowerCase()))
      return filteredMovies.value
    } else {
      if (!input) return movies.value
      filteredMovies.value = movies.value?.filter((movie) => movie.genres?.includes(Number(input) as any))
      return filteredMovies.value
    }
  }

  return {
    movies,
    tvShows,
    mainMovie,
    movieById,
    tvShow,
    loading,
    error,
    genres,
    getMoviesList,
    getTvShowList,
    getTvShowByIdData,
    getRandomMovie,
    getMovieByIdData,
    filterMovies,
    getGenresList,
  }
}

export default useMovies
