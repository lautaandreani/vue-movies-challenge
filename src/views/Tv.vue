<template>
  <div class="flex flex-col" v-if="tvShow">
    <MainTv :tv="tvShow" disableOverview />
    <main class="min-h-[50vh] bg-soft_gray w-full flex justify-center items-center p-4">
      <section class="w-full lg:w-1/2 flex gap-3">
        <div class="h-[30rem] hidden lg:flex">
          <Poster :poster="{ posterLink: tvShow.poster, title: tvShow.name }" />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-4xl">Storyline</h3>
          <p class="max-w-[40rem]" v-show="tvShow.description">{{ tvShow.description }}</p>
          <hr class="border-brand-green" />
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <small>
              Rating
              <span class="text-brand-green">★</span> {{ tvShow.rating }}
            </small>
            <small v-show="tvShow.date">
              Released
              {{ tvShow.date }}
            </small>
            <small class="flex flex-wrap gap-2 items-center">
              Genres
              <span v-for="genre in tvShow.genres" :key="genre.id" class="bg-brand-green p-[2px] rounded-md">
                {{ genre.name }}
              </span>
            </small>
            <small>
              Production
              <span v-for="production in tvShow.production" :key="production.id" class="mr-2"> {{ production.name }} </span>
            </small>
          </div>
        </div>
      </section>
    </main>
  </div>
  <div v-else>
    <p>Ocurrio un error al buscar la película</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import useMovies from '../composables/useMovies'
import { Poster, MainTv } from '../components'

const route = useRoute()

const { getTvShowByIdData, tvShow } = useMovies()

onMounted(async () => {
  await getTvShowByIdData(Number(route.params.id))
})
</script>

<style scoped></style>
