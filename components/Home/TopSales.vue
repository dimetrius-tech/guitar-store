<script setup lang="ts">
import {filename} from "pathe/utils";

const glob = import.meta.glob('/assets/img/top-sales/*', {eager: true});
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
const topGuitars = [
  {
    image: images['fender'],
    name: 'Fender Strat DLX USA',
    price: 1400,
    inStock: true,
    stars: 5
  },
  {
    image: images['gibson'],
    name: 'Gibson LP ST',
    price: 1100,
    inStock: true,
    stars: 5
  },
  {
    image: images['bacchus'],
    name: 'Bacchus BPB-1R(CAR)',
    price: 1100,
    inStock: true,
    stars: 5
  },
  {
    image: images['hofner'],
    name: '1960 Hofner 500/5 bass',
    price: 1900,
    inStock: true,
    stars: 5
  },
]
</script>

<template>
  <v-row>
    <v-col class="d-flex justify-center">
      <h3 class="h3-text-extra-bold !font-heading text-bold text-uppercase">
        <span class="text-accent h3-text-extra-bold">Top</span> Sales
      </h3>
    </v-col>
    <v-col cols="12" class="mt-0">
      <CardDesktop
          v-if="$vuetify.display.mdAndUp"
          :cards="topGuitars"
      />
      <CardMobile
          v-else
          :cards="topGuitars"
      />
    </v-col>
  </v-row>
</template>

<style scoped>

</style>