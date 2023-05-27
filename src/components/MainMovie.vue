<template>
  <main class="w-full min-h-[30rem] h-[40rem] relative overflow-hidden flex justify-between" v-if="mainMovie">
    <div class="flex flex-col gap-4 justify-center z-20 min-h-full h-full w-full lg:w-1/2 px-4 lg:px-12">
      <h1 class="text-4xl">{{ mainMovie.title }}</h1>
      <section class="flex gap-2">
        <small>
          <span class="text-brand-green">★</span>
          {{ mainMovie.rating }}
        </small>
        <small>{{ mainMovie.date }}</small>
        <small>{{ mainMovie.duration }}</small>
      </section>
      <p>{{ mainMovie.description }}</p>
      <router-link :to="`movies/${mainMovie.id}`" class="w-fit" v-if="!disableOverview">
        <button class="px-4 py-[6px] bg-brand-green rounded-md w-fit hover:bg-green-600 transition">Overview →</button>
      </router-link>
    </div>
    <picture class="absolute md:relative right-0 object-cover z-10 w-full md:w-1/2 h-full md:blur-none blur-md transition hover:scale-105">
      <div class="bg-gradient-to-l from-transparent to-black w-full h-full absolute right-0 top-0"></div>
      <img :src="`${mainMovie.backdrop}`" :alt="mainMovie.title" class="object-cover w-full h-full" />
    </picture>
  </main>
</template>

<script setup lang="ts">
import { Movie } from '../models/movies'

defineProps({
  mainMovie: {
    type: Movie,
    required: true,
  },
  disableOverview: Boolean,
})
</script>

<style scoped></style>
