<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

let allCorrectCount = ref<boolean[]>([])
let count = ref(0)
const emojiStack = ref<string[][]>([[]])
const emojis = ['😀','😐','😘']
function pickRandomEmoji():string {
  return emojis[Math.floor(Math.random()*emojis.length)];
}
function addEmoji() :void {
  // console.log(count.value)
  if(emojiStack.value[count.value].length == 5){
    allCorrectCount.value.push(emojiStack.value[count.value].every(value => value === emojiStack.value[count.value][0]));
    count.value++;
    emojiStack.value[count.value] = [];
  }
  emojiStack.value[count.value].push(pickRandomEmoji())
}
</script>

<template>
  <div class="container text-center">
    <h1 class="text-xl font-bold mb-2">{{ msg }}</h1>

    <button class="rounded-full bg-sky-500 px-5 py-3 text-white" type="button" @click="addEmoji()">絵文字を増やす</button>
    <div>
      <!-- <div>{{emojiStack[0].length}}</div> -->
      <div v-for="(row,y) in emojiStack" :key="y">
        <span>{{emojiStack.length - (y+1)}}</span>
        <span v-if="allCorrectCount[emojiStack.length - (y+1)]!==undefined">{{allCorrectCount[emojiStack.length - (y+1)]===true ? '⭕' : '❌'}}</span>
        <span v-for="(emoji, index) in emojiStack[emojiStack.length - (y+1)]" :key="`${row}-${index}`" class="text-xl">{{emoji}}</span>
      </div>
    </div>
  </div>
</template>
