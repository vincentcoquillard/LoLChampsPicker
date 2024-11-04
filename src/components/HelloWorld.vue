<script setup lang="ts">
import { useRouter } from 'vue-router';
defineProps<{
  msg: string
}>()

const router = useRouter();

function goToWheelView() {
  router.push('/wheel');
}
</script>

<template>
  <div class="greetings">
    <h1 class="green" style="text-transform: uppercase; font-size: 2rem; font-weight: 900;">{{ msg }}</h1>
    <h3>
      Welcome to a random Lol champion picker
    </h3>
    <button @click="goToWheelView" class="start">Random pick</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  color: blanchedalmond;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
