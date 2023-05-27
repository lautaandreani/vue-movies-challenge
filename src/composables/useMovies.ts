import { ref } from 'vue'
import { getMovies, getTvShows, getMainMovie, getMovieById } from '../services/api'

import type { Movie, MovieInfo } from '../models/movies'

const useMovies = () => {
  const movies = ref<Movie[] | undefined>([])
  const tvShows = ref<Movie[] | undefined>([])
  const mainMovie = ref<Movie | undefined>()
  const movieById = ref<MovieInfo | undefined>()

  const getMoviesList = async () => {
    movies.value = await getMovies()
    return movies.value
  }

  const getTvShowList = async () => {
    tvShows.value = await getTvShows()
  }

  const getPopularMovie = async () => {
    mainMovie.value = await getMainMovie()
  }

  const getMovieByIdData = async (id: number) => {
    movieById.value = await getMovieById(id)
  }

  const filterMovies = (input: string) => {
    const filteredMovies = [...movies.value!].filter((movie) => movie.title.toLowerCase().includes(input.toLowerCase()))
    return filteredMovies
  }

  return {
    movies,
    tvShows,
    mainMovie,
    movieById,
    getMoviesList,
    getTvShowList,
    getPopularMovie,
    getMovieByIdData,
    filterMovies,
  }
}

export default useMovies
