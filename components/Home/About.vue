<script setup lang="ts">
import {filename} from "pathe/utils";

const glob = import.meta.glob('/assets/img/*', {eager: true});
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
</script>

<template>
<v-row class=" px-12">
  <v-col cols="6">
    <img :src="images['about']" alt="about" width="590" height="266" />
  </v-col>
  <v-col cols="6" class="text-h5">
    <p class="pb-6">At Sick Fretboards , we live for music and share this passion with each of our customers.</p>
    <p class="pb-6">Our goal is to help you find the perfect instrument to inspire you to make great music.</p>
    <p>Join our family of musicians and discover the world of guitars with us!</p>
  </v-col>
</v-row>
</template>

<style scoped>

</style>