<script setup lang="ts">
import {filename} from "pathe/utils";

const activeTab = ref(null);

const glob = import.meta.glob('/assets/img/guitars/*', {eager: true});
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
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
    <v-tab value="all" :class="{'lg-text-bold': activeTab === 'all'}">All guitars</v-tab>
    <v-tab value="electric" :class="{'lg-text-bold': activeTab === 'electric'}">Electric guitars</v-tab>
    <v-tab value="bass" :class="{'lg-text-bold': activeTab === 'bass'}">Bass guitars</v-tab>
    <v-tab value="classical" :class="{'lg-text-bold': activeTab === 'classical'}">Classical guitars</v-tab>
  </v-tabs>
  <v-tabs-window v-model="activeTab">
    <v-tabs-window-item value="all">
      <CardDesktop :cards="guitars" />
    </v-tabs-window-item>
    <v-tabs-window-item value="electric">
      <CardDesktop :cards="guitars" />
    </v-tabs-window-item>
    <v-tabs-window-item value="bass">
      <CardDesktop :cards="guitars" />
    </v-tabs-window-item>
    <v-tabs-window-item value="classical">
      <CardDesktop :cards="guitars" />
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<style scoped>
</style>