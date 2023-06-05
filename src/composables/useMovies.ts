import { ref } from 'vue'
import { getMovies, getTvShows, getMainMovie, getMovieById, getTvShowById } from '../services/api'

import type { Movie, MovieInfo } from '../models/movies'
import { TvShow } from '../models/tv'

const useMovies = () => {
  const movies = ref<Movie[] | undefined>([])
  const tvShows = ref<TvShow[] | undefined>([])
  const tvShow = ref<TvShow | undefined>()
  const mainMovie = ref<Movie | undefined>()
  const movieById = ref<MovieInfo | undefined>()
  const loading = ref(false)
  const error = ref(false)

  const getMoviesList = async () => {
    try {
      loading.value = true
      const responseMovies = await getMovies()
      movies.value = responseMovies
      return movies.value
    } catch (err) {
      console.error(err)
      error.value = true
    }finally {
      loading.value = false
    }
  }

  const getTvShowList = async () => {
    tvShows.value = await getTvShows()
  }  
  
  const getTvShowByIdData = async (id: number) => {
    tvShow.value = await getTvShowById(id)
  }

  const getPopularMovie = async () => {
      mainMovie.value = await getMainMovie()
  }

  const getMovieByIdData = async (id: number) => {
    movieById.value = await getMovieById(id)
  }

  const getMoviesByPage = () => {
    return movies.value?.concat(movies.value)
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
    tvShow,
    loading, 
    error,
    getMoviesList,
    getTvShowList,
    getTvShowByIdData,
    getPopularMovie,
    getMovieByIdData,
    filterMovies,
    getMoviesByPage
  }
}

export default useMovies
