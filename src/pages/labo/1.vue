<script setup lang='ts'>
import { ref, computed } from 'vue'

const bestScore = ref(0)
const allCorrectCount = ref<boolean[]>([])
const count = ref(0)
const gameClear = ref(false)
const emojiStack = ref<string[][]>([[]])
const emojis = ['🌹','🐶','🐱']
const buttonText = computed<string>(() =>
  gameClear.value === false ? `${count.value+1}回目チャレンジ` : '一致おめでとう！！'
)

function pickRandomEmoji():string {
  return emojis[Math.floor(Math.random()*emojis.length)];
}

function isAllSameEmoji(array: string[]): boolean {
 return array.every(value => value === array[0])
}

function addEmoji() :void {
  for (let step = 0; step < 5; step++) {
    emojiStack.value[count.value].push(pickRandomEmoji())
  }
  if(emojiStack.value[count.value].length == 5){
    const result = isAllSameEmoji(emojiStack.value[count.value])
    allCorrectCount.value.push(result);
    count.value++;
    if(result === true){
      if(bestScore.value === 0 || bestScore.value >= count.value) {
        bestScore.value = count.value;
      }
      gameClear.value = true
    }
    emojiStack.value[count.value] = [];
  }
}

function reset() :void {
  gameClear.value = false;
  emojiStack.value = [[]];
  allCorrectCount.value = []
  count.value = 0;
}
</script>

<template>
  <div class="container text-center">
    <h1 class="text-xl font-bold mb-2">絵文字一致チャレンジ！</h1>

    <div v-if="bestScore">ベストスコア：{{bestScore}}回目で成功</div>
    <button class="rounded-full bg-sky-500 px-5 py-3 mb-3 text-white touch-manipulation" type="button" @click="addEmoji()" :disabled="gameClear">{{buttonText}}</button>
    <br>
    <button v-if="gameClear" class="rounded-full bg-red-300 px-5 py-3 mb-3 text-white touch-manipulation" type="button" @click="reset()" :disabled="!gameClear">リセット</button>
    <div>
      <div v-for="(row,y) in emojiStack" :key="y">
        <span v-if="allCorrectCount[emojiStack.length - (y+1)]!==undefined">{{emojiStack.length - (y)}}回目</span>
        <span v-for="(emoji, index) in emojiStack[emojiStack.length - (y+1)]" :key="`${row}-${index}`" class="text-xl">{{emoji}}</span>
        <span v-if="allCorrectCount[emojiStack.length - (y+1)]!==undefined">・・・{{allCorrectCount[emojiStack.length - (y+1)]===true ? '⭕' : '❌'}}</span>
      </div>
    </div>
  </div>
</template>

