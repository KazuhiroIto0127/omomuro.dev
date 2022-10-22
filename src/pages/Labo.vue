<script setup lang='ts'>
  import { ref } from 'vue'
  import LaboLink from '../components/LaboLink.vue'

  const laboLinks = ref([
    {title: 'カウントアップ', id: 1, emoji: '😀'},
    {title: 'ほげ', id: 2, emoji: '🌴'},
    {title: 'ほげ', id: 2, emoji: '💼'},
    {title: 'ほげ', id: 2, emoji: '🦶'},
    {title: 'ほげ', id: 2, emoji: '🤖'},
    {title: 'ほげ', id: 2, emoji: '🐥'},
  ])
</script>

<template>
  <h1 class="text-2xl p-3">
    <font-awesome-icon icon="fa-solid fa-flask" />
    Labo
  </h1>

  <div class="grid grid-cols-auto-fit gap-4">
    <div v-for="link in laboLinks" :key="link.id">
      <LaboLink :title="link.title" :id="link.id" :emoji="link.emoji" />
    </div>
  </div>
</template>
