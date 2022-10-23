<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebaseConfig'

const data = ref()
const isLoading = ref(false)
const error = ref()

const getUsers = async () => {
    console.log("getUsers")
    isLoading.value = true
    try {
        const usersCollection = collection(db, 'users');
        const usersSnapshot = await getDocs(usersCollection);
        data.value = usersSnapshot.docs.map(doc => doc.data());
        console.log(data.value)
    } catch (e) {
        error.value = e
    } finally {
        isLoading.value = false
    }
}
onMounted(() => {
    getUsers()
})
</script>

<template>
  <h1>Home</h1>
  <div>
    <h1>test</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>{{ data }}</div>
  </div>
</template>
