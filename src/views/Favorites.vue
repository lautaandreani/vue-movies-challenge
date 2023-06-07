<template>
  <section class="min-w-full bg-soft_gray flex flex-col gap-4 items-center p-4 h-full">
    <h3 class="text-3xl text-left">Your Favorites 🎬️</h3>
    <div class="flex flex-wrap justify-center gap-10 pl-10 pb-10" v-if="favorites.length">
      <MovieCard v-for="movie in favorites" :movie="movie" :type="'movies'" />
    </div>
    <div v-else class="text-center text-gray-400">Here you can see your favorites</div>
  </section>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useFavorites } from '../stores/favorites.store'
import { MovieCard } from '../components'

const { favorites } = storeToRefs(useFavorites())
</script>
