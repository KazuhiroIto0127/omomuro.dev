<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <div class="container mx-auto px-4 py-2 bg-gray-50">
    <router-view></router-view>
  </div>
</template>
