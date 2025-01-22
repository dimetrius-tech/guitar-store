<script setup lang="ts">
import {filename} from "pathe/utils";
import {computed} from "vue";
import {useDisplay} from "vuetify";
const glob = import.meta.glob('/assets/img/accessories/*', {eager: true});
const display = computed(() => useDisplay());
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
const accessories = [
  {
    title: 'Strings',
    name: 'Strings',
    image: display.value.mdAndUp.value ? images['strings'] : images['strings-mobile'],
    type: '12-53 Light',
    description: 'The 12-53 Light guitar strings are designed for acoustic guitars and are perfect for a balanced combination of playability and tone. These strings offer: сomfortable playability, rich tone.',
    price: '999.00'
  },
  {
    title: 'Mediators',
    name: 'Mediators Guitar Master Picks',
    image: display.value.mdAndUp.value ? images['mediators'] : images['mediators-mobile'],
    type: 'Set of 3',
    description: 'This set of pickups provides excellent control and excellent sound quality. Made of durable material, they are suitable for any playing style, from gentle arpeggios to powerful riffs.',
    price: '999.00'
  },
  {
    title: 'Cases',
    name: 'Cases',
    image: display.value.mdAndUp.value ? images['cases'] : images['cases-mobile'],
    type: 'Wooden',
    description: 'Soft covers: Light and comfortable, ideal for everyday transport. With our protection, you can be sure that your guitar will always be safe.',
    price: '10,158.00'
  }
];
</script>

<template>
  <div>
    <v-row v-for="(accessory, index) in accessories" :key="index" class="mt-14">
      <v-col cols="12" md="5">
        <h3 class="h3-text-extra-bold font-weight-bold text-additionalGray">{{accessory.title}}</h3>
      </v-col>
      <v-col cols="12" md="7">
        <v-row class="mt-0">
          <v-card
            :class="{'d-flex': $vuetify.display.mdAndUp}"
            class="flex-row-reverse justify-lg-space-between mb-10 w-100"
          >
            <div
              class="px-4"
              :class="{
              'order-2': index % 2 === 0 && $vuetify.display.mdAndUp,
              'd-inline-block': $vuetify.display.mobile
            }"
            >
              <img
              :src="accessory.image"
              :width="$vuetify.display.mdAndUp ? 358 : 290"
              :height="$vuetify.display.mdAndUp ? 263 : 128"
              :alt="accessory.name"
              />
            </div>
            <div>
              <div class="d-flex justify-space-between mb-10">
                <span class="text-uppercase w-50 lg-text-bold font-weight-bold">{{accessory.name}}</span>
                <span>{{accessory.type}}</span>
              </div>
              <p>{{accessory.description}}</p>
              <div class="d-flex justify-space-between mt-16">
                <span>${{accessory.price}}</span>
                <v-btn variant="outlined">buy</v-btn>
              </div>
            </div>
          </v-card>
          <div v-if="$vuetify.display.mdAndUp" class="d-flex justify-space-between w-100">
            <div class="mt-n8 ml-n8">
              <img width="13" height="24" src="images/arrow-left.png" alt="arrow-left" />
            </div>
            <div class="mt-n8 mr-n8">
              <img width="13" height="24" src="images/arrow-right.png" alt="arrow-left" />
            </div>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>

</style>