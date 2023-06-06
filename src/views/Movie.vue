<template>
  <div v-if="loading">
    <p class="text-center">Loading...</p>
  </div>
  <div class="flex flex-col" v-if="movieById">
    <MainMovie :main-movie="movieById" disableOverview />
    <main class="min-h-[50vh] bg-soft_gray w-full flex justify-center items-center p-4">
      <section class="w-full lg:w-1/2 flex gap-3">
        <div class="h-[30rem] hidden lg:flex">
          <Poster :poster="{ posterLink: movieById.poster, title: movieById.title }" />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-4xl">Storyline</h3>
          <p class="max-w-[40rem]">{{ movieById.description }}</p>
          <hr class="border-brand-green" />
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <small>
              Rating
              <span class="text-brand-green">★</span> {{ movieById.rating }}
            </small>
            <small>
              Released
              {{ movieById.date }}
            </small>
            <small>
              Budget
              {{ movieById.budget }}
            </small>
            <small>
              Duration
              {{ movieById.duration }}
            </small>
            <small class="flex flex-wrap gap-2 items-center">
              Genres
              <span v-for="genre in movieById.genres" :key="genre.id" class="bg-brand-green p-[2px] rounded-md">
                {{ genre.name }}
              </span>
            </small>
            <small>
              Production
              <span v-for="production in movieById.production" :key="production.id" class="mr-2"> {{ production.name }} </span>
            </small>
          </div>
        </div>
      </section>
    </main>
  </div>
  <div v-if="error">
    <p>Ocurrio un error al buscar la película</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import useMovies from '../composables/useMovies'
import { MainMovie } from '../components'
import Poster from '../components/Poster.vue'

const route = useRoute()

const { getMovieByIdData, movieById, error, loading } = useMovies()

onMounted(async () => {
  await getMovieByIdData(Number(route.params.id))
})
</script>

<style scoped></style>
