<template>
  <router-link :to="`/${type}/${movie.id}`">
    <div class="min-w-[250px] min-h-[200px] max-h-[600px] flex flex-col gap-2 card">
      <Poster :poster="{ posterLink: movie.poster, title: movie.title }" />
      <label class="truncate max-w-[250px]">{{ movie.title }}</label>
      <div class="flex justify-between items-center px-2">
        <div class="flex gap-2">
          <span class="text-brand-green">★</span>
          <p>
            {{ movie.rating }}
          </p>
        </div>
        <button @click.prevent="favorites.handleMovie(movie)">
          <Favorite :is-saved="favorites.isSaved(movie)" />
        </button>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Favorite } from '../assets/icons'

import Poster from './Poster.vue'
import { useFavorites } from '../stores/favorites.store'

const favorites = useFavorites()

defineProps({
  movie: {
    type: Object as PropType<any>,
    required: true,
  },
  type: {
    type: String as PropType<'tv' | 'movies'>,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
