<script setup lang="ts">
import {filename} from "pathe/utils";

const activeTab = ref(null);

const glob = import.meta.glob('/assets/img/guitars/*', {eager: true});
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
const categories = [
  { name: 'All guitars', value: 'all'},
  {name: 'Electric guitars', value: 'electric'},
  {name: 'Bass guitars', value: 'bass'},
  {name: 'Classical guitars', value: 'classical'}
];
const guitars = [
  {
    image: images['Admiral_Alba'],
    name: 'Admiral Alba',
    price: 500,
    inStock: true,
    stars: 5,
  },
  {
    image: images['Fender_Strat_Ultra_MN'],
    name: 'Fender Strat_Ultra_MN',
    price: 1200,
    inStock: true,
    stars: 5,
  },
  {
    image: images['Cort_GB24jj'],
    name: 'Cort_GB24jj (2 tone burst)',
    price: 800,
    inStock: true,
    stars: 5,
  },
  {
    image: images['Cort_ad810e'],
    name: 'Cort_ad810e (white satin)',
    price: 800,
    isStock: true,
    stars: 5,
  }
];
</script>

<template>
  <v-tabs v-model="activeTab" align-tabs="center" class="border-b-2">
    <v-tab
        v-for="(category, index) in categories"
        :key="index"
        :value="category.value"
        :class="{'lg-text-bold': activeTab === category.value}">
      {{category.name}}
    </v-tab>
  </v-tabs>
  <v-tabs-window v-model="activeTab">
    <v-tabs-window-item
        v-for="(category, index) in categories"
        :key="index"
        :value="category.value"
    >
      <CardDesktop
        v-if="$vuetify.display.mdAndUp"
        :cards="guitars"
      />
      <CardMobile
        v-else
        :cards="guitars"
      />
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<style scoped>
</style>