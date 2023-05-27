<template>
  <div class="p-4 rounded-lg flex gap-2 w-1/2">
    <Search />
    <input type="text" placeholder="Super Mario Bros, Avatar" class="bg-transparent w-full outline-none" v-model="inputValue" autofocus />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import { Search } from '../assets/icons'

const emits = defineEmits(['input-value'])

const inputValue = ref('')

watch(inputValue, () => {
  emits('input-value', inputValue.value)
})
</script>

<style scoped></style>
