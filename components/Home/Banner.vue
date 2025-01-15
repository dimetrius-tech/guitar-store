<script setup lang="ts">
import {useDisplay} from "vuetify";
import {computed} from "vue";
import {filename} from "pathe/utils";

const glob = import.meta.glob('/assets/img/*', {eager: true});
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
const display = computed(() => useDisplay());
const bannerWidth = computed(() => {
  if(display.value.mdAndUp.value) return '1240';
  return '320';
});
const bannerHeight = computed(() => {
  if(display.value.mdAndUp.value) return '449';
  return '320';
});
const bannerSrc = computed(() => {
  if(display.value.mdAndUp.value) return images['home-banner']
  return images['home-banner-mobile'];
});
</script>

<template>
  <v-divider v-if="$vuetify.display.mdAndUp" />
  <v-row class="pt-5 mt-0">
    <v-col cols="12" md="7">
      <h1 class="h1-text-extra-bold !font-heading font-extrabold text-left">
        Emotion in every note - <span class="text-accent h1-text-extra-bold">the best guitars</span> for you
      </h1>
    </v-col>
    <v-col
        md-offset="2"
        class="my-auto"
        :class="{'text-center': $vuetify.display.mobile, 'text-right': $vuetify.display.mdAndUp}"
    >
      <v-btn class="px-8 ma-auto" variant="outlined">Shop now</v-btn>
    </v-col>
  </v-row>
  <v-divider v-if="$vuetify.display.mdAndUp" />
  <v-row class="pt-5 mt-0">
    <v-col class="d-flex justify-md-center" cols="12">
      <img :width="bannerWidth" :height="bannerHeight" :src="bannerSrc" alt="home-banner" class="ma-auto" />
    </v-col>
  </v-row>
</template>

<style scoped>

</style>