<script setup lang="ts">
import {} from 'vue'

defineProps<{
  title: string,
  id: number,
  emoji: string,
}>()
</script>

<template>
  <router-link :to="'/labo/'+id">
    <div class="rounded-md bg-white shadow-lg shadow-indigo-500/40 p-3  hover:scale-125 transition ease-in-out">
      <div class="rounded-md h-32 bg-gradient-to-r from-cyan-500 to-blue-500 text-clip overflow-hidden tracking-widest text-center">
        <span class="text-2xl">{{emoji.repeat(60)}}</span>
      </div>
      {{title}}
    </div>
  </router-link>
</template>

