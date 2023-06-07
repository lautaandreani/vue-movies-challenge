import { defineStore } from 'pinia'
import { Movie } from '../models/movies'

export const useFavorites = defineStore('favorites', {
  state: () => {
    return {
      favorites: [] as Movie[],
    }
  },
  actions: {
    handleMovie(movie: Movie) {
      if (this.isSaved(movie)) {
        this.favorites = this.favorites.filter((favorite) => favorite.id !== movie.id)
        this.handleStorage(true)
        return
      }
      this.favorites = [...this.favorites, movie]
      this.handleStorage(true)
      return this.favorites
    },
    isSaved(movie: Movie) {
      const isSaved = this.favorites.some((favorite) => favorite.id === movie.id)
      return isSaved
    },
    handleStorage(saved?: boolean) {
      if (saved) localStorage.setItem('movies', JSON.stringify(this.favorites))

      if (localStorage.getItem('movies')) {
        this.favorites = JSON.parse(localStorage.getItem('movies') as string)
      }
    },
  },
})
