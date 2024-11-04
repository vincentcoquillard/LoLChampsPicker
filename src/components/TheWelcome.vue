<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ChampItem from './ChampItem.vue'

const champions = ref<Record<string, unknown>>({})

onMounted(async () => {
  const response = await fetch(
    'https://ddragon.leagueoflegends.com/cdn/9.18.1/data/en_US/champion.json',
  )
  const data = await response.json()
  champions.value = data.data
})
</script>

<template>
  <div class="champ-grid">
    <ChampItem
      v-for="(champion, key) in champions"
      :key="key"
      :name="champion.name"
      :imageUrl="`https://ddragon.leagueoflegends.com/cdn/9.18.1/img/champion/${champion.image.full}`"
    >
      <template #image>
        <img
          width="100"
          height="100"
          :src="`https://ddragon.leagueoflegends.com/cdn/9.18.1/img/champion/${champion.image.full}`"
          :alt="champion.name"
        />
      </template>
      <template #heading>{{ champion.name }}</template>
    </ChampItem>
  </div>
</template>

<style scoped>
.champ-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  overflow-x: hidden;
  padding: 1rem;
  margin: 2rem auto;
  overflow-y: auto;
  width: 100%;
  position: relative;
}
</style>
