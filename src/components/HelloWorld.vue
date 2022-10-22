<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="text-3xl font-bold underline">{{ msg }}</h1>

  <button class="rounded-full bg-sky-500 px-5 py-3 text-white" type="button" @click="count++">count is: {{ count }}</button>
</template>
