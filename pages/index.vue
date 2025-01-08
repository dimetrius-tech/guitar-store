<script setup>

import GuitarAccessories from "../components/Home/GuitarAccessories.vue";
import OrderForm from "../components/Home/OrderForm.vue";
import TopSales from "../components/Home/TopSales.vue";
</script>

<template>
  <div class="mx-5">
    <v-divider class="border-opacity-100" />
    <v-row class="py-5 px-12">
      <v-col cols="10">
        <h1 class="text-h1 !font-heading font-extrabold text-uppercase">
          Emotion in every note - <span class="text-accent">the best guitars</span> for you
        </h1>
      </v-col>
      <v-col class="m-auto text-center">
        <v-btn variant="outlined">Shop now</v-btn>
      </v-col>
    </v-row>
    <v-divider class="border-opacity-100" />
    <v-row class="py-5">
      <v-col class="d-flex justify-center" cols="12">
        <img width="1240" height="449" src="images/home-banner.png" alt="home-banner" />
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <img class="m-auto" src="images/HomePageLogo.png" alt="HomePageLogo" />
      </v-col>
      <v-col>
        <h2 class="text-h2 font-extrabold">500+</h2>
        <p>thousands of instrumenst sold</p>
      </v-col>
      <v-col>
        <h2 class="text-h2 font-extrabold">15</h2>
        <p>years of work on the market</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <h3 class="text-h3 font-bold m-auto">Create Your Music: Choose <span class="text-accent">Your Guitar</span></h3>
      </v-col>
      <v-col>
        <HomeGuitarTabs />
      </v-col>
    </v-row>
    <v-row class="py-5 px-12">
      <v-col cols="7">
        <h3 class="text-h3 !font-heading font-bold text-uppercase">
          Complete Your Sound: Choose <span class="text-accent">Guitar Accessories</span>
        </h3>
      </v-col>
    </v-row>
    <GuitarAccessories />
    <v-row class="py-5 px-12">
      <v-col class="d-flex justify-center" cols="12">
        <h3 class="text-h3 !font-heading text-bold text-uppercase">
          Frequently Asked <span class="text-accent">Questions</span>
        </h3>
      </v-col>
    </v-row>
    <HomeFAQ />
    <v-row class="py-5 px-12">
      <v-col cols="7">
        <h3 class="text-h3 !font-heading text-bold w-75">
          "<span class="text-accent">About Us:</span> Passion for Guitars and Music"
        </h3>
      </v-col>
    </v-row>
    <HomeAbout />
    <OrderForm />
    <TopSales />
  </div>
</template>

<style scoped>
</style>