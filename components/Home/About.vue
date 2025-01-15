<script setup lang="ts">
import {filename} from "pathe/utils";
import {computed} from "vue";
import {useDisplay} from "vuetify";

const glob = import.meta.glob('/assets/img/*', {eager: true});
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
const display = computed(() => useDisplay());
const bannerWidth = computed(() => !display.value.mobile.value ? '590' : '320');
const bannerHeight = computed(() => !display.value.mobile.value ? '266' : '159');
const bannerSrc = computed(() => !display.value.mobile.value ? images['about'] : images['about-mobile']);
</script>

<template>
<v-row class="mt-8">
  <v-col
    cols="12"
    md="6"
    :order="$vuetify.display.mobile ? 'last' : 'first'"
    :class="{'text-center': $vuetify.display.mobile, 'text-left': $vuetify.display.mdAndUp}"
  >
    <img :src="bannerSrc" alt="about" :width="bannerWidth" :height="bannerHeight" />
  </v-col>
  <v-col cols="12" md="6">
    <p class="pb-6">At Sick Fretboards , we live for music and share this passion with each of our customers.</p>
    <p class="pb-6">Our goal is to help you find the perfect instrument to inspire you to make great music.</p>
    <p>Join our family of musicians and discover the world of guitars with us!</p>
  </v-col>
</v-row>
</template>

<style scoped>
p {
  font-size: 24px;
}
@media (max-width: 768px) {
  p {
    font-size: 18px;
  }
}
</style>