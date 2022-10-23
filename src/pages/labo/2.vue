<script setup lang='ts'>
import {User} from '../../models/User'
import {ref, computed} from 'vue'
import UserCard from '../../components/UserCard.vue'

const strArray = ref<string[]>(['🌹','🐶','🐱'])
const emoji = ref<string>('🌹')
const name = ref<string>('佐藤')
const old = ref<number>(10)
const users = ref<User[]>([])
const count = ref<number>(0);

function addEmoji() :void {
  strArray.value.push('😍')
}

function addUser() :void {
  count.value++;
  users.value.unshift(new User(count.value, emoji.value, name.value, old.value))
}
</script>

<template>
<div class="container">
  <h1 class="text-xl font-bold mb-2">Typescriptについて勉強しよう</h1>

  <button class="rounded-full bg-sky-500 px-5 py-3 mb-3 text-white touch-manipulation" type="button" @click="addEmoji()">絵文字追加</button>
  <span v-for="(str,y) in strArray" :key="y">
    {{str}}
  </span>

  <fieldset>
    <legend class="text-xl mb-2">Userモデルを追加しよう</legend>
    <fieldset>
      <legend>絵文字</legend>
      <span v-for="(emojiText, i) in strArray" :key="`${emoji}-${i}`" class="m-1 text-2xl">
        <input :id="`${emojiText}-${i}`" type="radio" name="emoji" :value="emojiText" v-model="emoji"/>
        <label :for="`${emojiText}-${i}`" class="peer-checked/draft:text-sky-500">{{emojiText}}</label>
      </span>
    </fieldset>
    <label class="block mb-2">
      <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">名前</span>
      <input type="text" v-model="name" class="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:ring-1 " placeholder="佐藤">
    </label>
    <label class="block mb-2">
      <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">年齢</span>
      <input type="number" v-model="old" class="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:ring-1">
    </label>
    <button class="rounded-full bg-violet-500 hover:bg-violet-600 active:bg-violet-700 px-3 py-1 mb-3 text-white touch-manipulation" type="button" @click="addUser()">User追加</button>
  </fieldset>
  <div class="grid grid-cols-auto-fit gap-4">
    <transition-group name="userList">
      <div v-for="user in users" :key="user.id" class="transition ease-in-out">
        <UserCard :user="user" />
      </div>
    </transition-group>
  </div>
</div>
</template>

<style scoped>
.userList-item {
  display: inline-block;
  margin-right: 10px;
}
.userList-enter-active,
.userList-leave-active {
  transition: all 0.3s ease;
}
.userList-enter-from,
.userList-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
