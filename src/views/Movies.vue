<template>
  <main class="min-w-full bg-soft_gray flex flex-col gap-4 items-center p-4 h-full">
    <div class="flex w-1/4">
      <Search @input-value="(e) => (search = e)" />
      <div class="flex gap-2 items-center">
        <select
          list="filter-categories"
          id="filterInput"
          name="filterInput"
          placeholder="All"
          class="text-white p-1 rounded-md bg-gray-600 w-fit mb-2 outline-none focus:outline-brand-green focus:ring-brand-green"
          v-model="filterValue">
          <option :value="0" selected>All</option>
          <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
        </select>
      </div>
    </div>
    <div class="flex flex-wrap justify-center gap-10 pl-10 pb-10" v-if="filteredMovies?.length">
      <MovieCard v-for="movie in filteredMovies" :key="movie.id" :movie="movie" type="movies" />
    </div>

    <div v-if="loading">
      <p>Loading...</p>
    </div>

    <div v-if="!filteredMovies?.length">
      <p>No se encontraron películas</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

import useMovies from '../composables/useMovies'

import { Search, MovieCard } from '../components'
import { Movie } from '../models/movies'

const { getMoviesList, filterMovies, getGenresList, loading } = useMovies()

const search = ref()
const filteredMovies = ref<Movie[] | undefined>([])
const genres = ref()
const filterValue = ref<number>(0)

watch(search, () => {
  filteredMovies.value = filterMovies(search.value, 'name')
})

watch(filterValue, () => {
  filteredMovies.value = filterMovies(filterValue.value, 'genre')
})

onMounted(async () => {
  filteredMovies.value = await getMoviesList()
  genres.value = await getGenresList()
})
</script>

<style scoped></style>
