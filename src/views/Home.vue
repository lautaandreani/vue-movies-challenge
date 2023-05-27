<template>
  <aside class="w-full overflow-hidden">
    <MainMovie v-if="mainMovie" :main-movie="mainMovie" />
    <div class="w-full overflow-x-auto flex bg-soft_gray p-6 gap-10">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>

    <div class="w-full overflow-x-auto flex bg-soft_gray p-6 gap-10">
      <MovieCard v-for="tvShow in tvShows" :key="tvShow.id" :movie="tvShow" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import { MovieCard, MainMovie } from '../components'

import useMovies from '../composables/useMovies'

const { movies, tvShows, mainMovie, getMoviesList, getTvShowList, getPopularMovie } = useMovies()

onMounted(async () => {
  await getMoviesList()
  await getTvShowList()
  await getPopularMovie()
})
</script>

<style scoped></style>
