<script setup lang="ts">
import {User} from '../models/User'
import {} from 'vue'

defineProps<{
  user: User,
}>()
</script>

<template>
  <div class="flex gap-4 rounded-md border border-slate-300 bg-white shadow-lg shadow-indigo-400/10 p-3 hover:scale-105 transition ease-in-out">
    <div class="flex shrink-0 justify-center items-center rounded-full border border-pink-500 w-12 h-12">
      <span class="text-2xl">{{user.emoji}}</span>
    </div>
    <div>
      <div class="font-medium text-slate-900">{{user.name}}</div>
      <div class="text-slate-500 truncate">{{user.old}}</div>
      <div class="font-light text-slate-500">{{user.greeting()}}</div>
    </div>
  </div>
</template>


