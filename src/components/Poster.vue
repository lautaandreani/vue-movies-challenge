<template>
  <img
    :src="`${poster?.posterLink}`"
    :alt="poster?.title"
    class="rounded-md bg-card_gray border-card_gray border-4 border-spacing-10 min-w-[300px] max-w-[300px] h-full hover:scale-105 transition object-cover"
    loading="lazy"
  />
</template>

<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
  poster: {
    type: Object as PropType<{ title: string; posterLink: string }>,
    required: true,
  },
})
</script>
