<template>
  <aside class="w-full overflow-hidden">
    <div class="min-h-[40rem]">
      <MainMovie v-if="mainMovie" :main-movie="mainMovie" />
    </div>
    <div class="w-full overflow-x-auto flex bg-soft_gray p-6 gap-10 min-h-[35rem]">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" type="movies" />
    </div>

    <div class="w-full overflow-x-auto flex bg-soft_gray p-6 gap-10 min-h-[35rem]">
      <MovieCard v-for="tvShow in tvShows" :key="tvShow.id" :movie="tvShow" type="tv" />
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
