<script setup lang="ts">
const activeTab = ref(null);

const guitarImages = import.meta.glob('/assets/img/guitars', {eager: true});

const guitars = [
  {
    image: '@images/guitars/Admiral_Alba.png',
    name: 'Admiral Alba',
    price: 500,
    inStock: true,
    stars: 5,
  },
  {
    image: '@images/guitars/Fender_Strat_Ultra_MN.png',
    name: 'Fender Strat_Ultra_MN',
    price: 1200,
    inStock: true,
    stars: 5,
  },
  {
    image: '@images/guitars/Cort_GB24jj.png',
    name: 'Cort_GB24jj (2 tone burst)',
    price: 800,
    inStock: true,
    stars: 5,
  },
  {
    image: '@images/guitars/Cort_ad810e.png',
    name: 'Cort_ad810e (white satin)',
    price: 800,
    isStock: true,
    stars: 5,
  }
];
</script>

<template>
  <v-tabs v-model="activeTab" align-tabs="center">
    <v-tab value="all">All guitars</v-tab>
    <v-tab value="electric">Electric guitars</v-tab>
    <v-tab value="bass">Bass guitars</v-tab>
    <v-tab value="classical">Classical guitars</v-tab>
  </v-tabs>
  <v-tabs-window v-model="activeTab">
    <v-tabs-window-item value="all">
      <v-card v-for="(guitar, index) in guitars" :key="index">
        <v-img width="237" :src="guitar.image" />
        <v-card-text>{{guitar.name}}</v-card-text>
      </v-card>
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<style scoped>

</style>