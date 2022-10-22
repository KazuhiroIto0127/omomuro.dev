<script setup lang="ts">
import { ref } from 'vue'

const showMenu = ref(false)
</script>

<template>
  <nav class="w-full bg-white bg-white">
    <div class="container mx-auto py-5 flex justify-between items-center">
      <router-link to="/">
        <div class="flex items-center gap-2">
          <img class="w-8" src="../assets/omo_pen.png" alt="logo">
          <span class="text-2xl font-bold text-indigo-900">omomuro.dev</span>
        </div>
      </router-link>
      <ul class="hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase">
        <li class="hover:text-gray-500">
          <router-link to="/">home</router-link>
        </li>
        <li class="hover:text-gray-500">
          <router-link to="/labo">
            <font-awesome-icon icon="fa-solid fa-flask" />
            labo
          </router-link>
        </li>
        <li class="hover:text-gray-500">
          <router-link to="/about">about</router-link>
        </li>
      </ul>
      <svg class="hidden md:block w-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
      </svg>
      <!-- hamburger menu -->
      <div class="space-y-1 md:hidden cursor-pointer z-20" @click="showMenu = !showMenu">
        <div class="w-6 h-0.5" :class="showMenu ? 'bg-white': 'bg-black'"></div>
        <div class="w-6 h-0.5" :class="showMenu ? 'bg-white': 'bg-black'"></div>
        <div class="w-6 h-0.5" :class="showMenu ? 'bg-white': 'bg-black'"></div>
      </div>
      <ul :class="showMenu ? 'block': 'hidden'"
          class="md:hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">works</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
.router-link-active {
  font-weight: bold;
  color: red;
}
</style>
