<script setup lang="ts">
import { ref, onMounted } from 'vue';

const champions = ref<string[]>([]);
const selectedChampion = ref<string | null>(null);
const rolling = ref(false);

async function fetchChampions() {
  const response = await fetch('https://ddragon.leagueoflegends.com/cdn/9.18.1/data/en_US/champion.json');
  const data = await response.json();
  champions.value = Object.values(data.data).map(
    (champion: any) => `https://ddragon.leagueoflegends.com/cdn/9.18.1/img/champion/${champion.image.full}`
  );
  startRoll();
}

function startRoll() {
  selectedChampion.value = null;
  rolling.value = true;
  setTimeout(stopRoll, 3000);
}

function stopRoll() {
  rolling.value = false;
  const randomIndex = Math.floor(Math.random() * champions.value.length);
  selectedChampion.value = champions.value[randomIndex];
}

onMounted(fetchChampions);
</script>

<template>
  <div class="wheel">
    <h1 v-if="!selectedChampion">Randomizing...</h1>
    <div v-if="!selectedChampion" class="roulette-container">
      <div class="roulette" :class="{ rolling: rolling }">
        <img
          v-for="(image, index) in champions"
          :key="index"
          :src="image"
          alt="Champion"
          :class="{ hidden: selectedChampion && selectedChampion !== image }"
        />
      </div>
    </div>
    <div v-if="selectedChampion" class="result">
      <h2 style="margin-bottom: 1rem;">Selected Champion</h2>
      <img :src="selectedChampion" alt="Selected Champion" />
      <button @click="startRoll" class="start" style="font-size: 0.8rem;">Pick a New Champion</button>
    </div>
  </div>
</template>

<style scoped>
.wheel {
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.roulette-container {
  position: relative;
  margin: 20px 0;
  overflow: hidden;
  width: 150px;
  height: 150px;
  display: inline-block;
}

.roulette {
  display: flex;
  flex-direction: column;
}

.rolling {
  animation: slowDownScroll 3s ease-out forwards;
}

.roulette img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.hidden {
  display: none;
}

@keyframes slowDownScroll {
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-150px);
  }
  20% {
    transform: translateY(-300px);
  }
  30% {
    transform: translateY(-450px);
  }
  40% {
    transform: translateY(-600px);
  }
  50% {
    transform: translateY(-750px);
  }
  60% {
    transform: translateY(-900px);
  }
  70% {
    transform: translateY(-1050px);
  }
  80% {
    transform: translateY(-1200px);
  }
  90% {
    transform: translateY(-1350px);
  }
  100% {
    transform: translateY(-1500px); /* Arrête lentement sur la dernière image */
  }
}

.result {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.result img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}
</style>
