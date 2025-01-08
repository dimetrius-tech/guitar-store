<script setup lang="ts">
import {filename} from "pathe/utils";
const glob = import.meta.glob('/assets/img/accessories/*', {eager: true});
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
const accessories = [
  {
    title: 'Strings',
    name: 'Strings',
    image: images['strings'],
    type: '12-53 Light',
    description: 'The 12-53 Light guitar strings are designed for acoustic guitars and are perfect for a balanced combination of playability and tone. These strings offer: сomfortable playability, rich tone.',
    price: '999.00'
  },
  {
    title: 'Mediators',
    name: 'Mediators Guitar Master Picks',
    image: images['mediators'],
    type: 'Set of 3',
    description: 'This set of pickups provides excellent control and excellent sound quality. Made of durable material, they are suitable for any playing style, from gentle arpeggios to powerful riffs.',
    price: '999.00'
  },
  {
    title: 'Cases',
    name: 'Cases',
    image: images['cases'],
    type: 'Wooden',
    description: 'Soft covers: Light and comfortable, ideal for everyday transport. With our protection, you can be sure that your guitar will always be safe.',
    price: '10,158.00'
  }
];
</script>

<template>
  <div class="px-16">
    <v-row v-for="(accessory, index) in accessories" :key="index">
      <v-col cols="6">
        <h3 class="text-h3 !font-heading font-weight-bold text-additionalGray">{{accessory.title}}</h3>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-card class="d-flex flex-row-reverse justify-lg-space-between mb-10">
              <div class="px-4" :class="{'order-2': index % 2 === 0}">
                <img :src="accessory.image" width="358" height="263" :alt="accessory.name" />
              </div>
              <div>
                <div class="d-flex justify-space-between mb-10">
                  <span class="text-uppercase font-weight-bold">{{accessory.name}}</span>
                  <span>{{accessory.type}}</span>
                </div>
                <p>{{accessory.description}}</p>
                <div class="d-flex justify-space-between mt-16">
                  <span>${{accessory.price}}</span>
                  <v-btn variant="outlined">buy</v-btn>
                </div>
              </div>
            </v-card>
          <div class="d-flex justify-space-between w-100">
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