<template>
  <div class="flex w-full">
    <Nav />
    <div class="overflow-hidden w-full flex flex-col justify-between">
      <router-view></router-view>
      <footer class="w-full p-4 pt-6 bg-black">
        <h3>Vue Movies</h3>

        <p class="font-medium">Made with <span class="text-brand-green">Vue 3</span> by Lautaro</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import Nav from './components/Nav.vue'
</script>

<style scoped></style>
