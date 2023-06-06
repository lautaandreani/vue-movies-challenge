<template>
  <header class="bg-black p-4 border-r border-gray-400 border-opacity-30 h-screen sticky top-0">
    <nav>
      <ul class="flex flex-col justify-evenly h-screen">
        <li>
          <router-link to="/" exact-active-class="is-active">
            <Movie />
          </router-link>
        </li>
        <li>
          <router-link to="/movies" exact-active-class="is-active">
            <Film />
          </router-link>
        </li>
        <li>
          <router-link to="/favorites" exact-active-class="is-active">
            <Favorite />
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { Film, Movie, Favorite } from '../assets/icons/'
</script>

<style scoped>
.is-active {
  color: #41b883;
}
</style>
