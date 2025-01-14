<script setup lang="ts">
defineProps({
  cards: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <v-row class="d-flex justify-space-around mt-0">
    <v-carousel
        :continuous="false"
        :show-arrows="false"
        hide-delimiter-background
    >
      <v-carousel-item
          v-for="(card, index) in cards"
          :key="index"
      >
        <v-card class="ma-auto">
          <img width="237" height="197" :src="card.image" :alt="card.name" />
          <v-card-item>
            <v-card-title>{{card.name}}</v-card-title>
            <v-card-subtitle class="opacity-100">{{card.price}}$</v-card-subtitle>
          </v-card-item>
          <v-card-text>
            <div class="d-flex justify-space-between">
              <div class="d-inline-block">
                <img
                  v-for="star in card.stars"
                  src="images/rate-star.png"
                  alt="star"
                  width="9"
                  height="9"
                  class="d-lg-inline-block"
                />
              </div>
              <div>
                <span class="text-success">In stock</span>
              </div>
            </div>
            <div class="d-flex justify-center">
              <v-btn variant="outlined" class="mt-3 card-button">Buy</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-row>
</template>

<style scoped>
</style>