<template>
  <main class="min-w-full bg-soft_gray flex flex-col gap-4 items-center p-4 h-full">
    <Search @input-value="(e) => (search = e)" />
    <div class="flex flex-wrap justify-center gap-10 pl-10 pb-10" v-if="filteredMovies?.length">
      <MovieCard v-for="movie in filteredMovies" :key="movie.id" :movie="movie" />
    </div>
    <div v-else>
      <h3>
        Not found results for: <span class="text-brand-green">{{ search }}</span>
      </h3>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

import useMovies from '../composables/useMovies'

import { Search, MovieCard } from '../components'
import { Movie } from '../models/movies'

const { getMoviesList, filterMovies } = useMovies()

const search = ref()
const filteredMovies = ref<Movie[] | undefined>([])

watch(search, () => {
  filteredMovies.value = filterMovies(search.value)
})

onMounted(async () => {
  filteredMovies.value = await getMoviesList()
})
</script>

<style scoped></style>
