<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import { doc, getDoc, updateDoc, increment, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

const error = ref()
const likeCount = ref(0)

const like = async () => {
  try {
    const likeRef = doc(db, 'like', 'Iw9h9c38BiU7WU7yDf2q');
    await updateDoc(likeRef, { count: increment(1) })
  } catch (e) {
    error.value = e
  }
}

const getCurrentLike = async () => {
  try {
    const likeRef = doc(db, 'like', 'Iw9h9c38BiU7WU7yDf2q');
    const docSnap = await getDoc(likeRef);
    likeCount.value = docSnap.data()?.count

    const unsub = onSnapshot(likeRef, (doc) => {
      likeCount.value = doc.data()?.count;
    });
  } catch (e) {
    error.value = e
  }
}

onMounted(() => {
  getCurrentLike()
})
</script>

<template>
<h1 class="text-xl font-bold mb-2">ライクしよう！！❤️</h1>
<div>
  <span class="text-3xl" @click="like()">❤️</span>
  <span>{{likeCount}}</span>
</div>
</template>
