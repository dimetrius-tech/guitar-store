<script setup>

import GuitarAccessories from "../components/Home/GuitarAccessories.vue";
import OrderForm from "../components/Home/OrderForm.vue";
import TopSales from "../components/Home/TopSales.vue";
</script>

<template>
  <v-container class="mx-0 w-100 px-14" fluid>
    <HomeBanner />
    <v-row class="text-center">
      <v-col>
        <img class="m-auto" src="images/HomePageLogo.png" alt="HomePageLogo" />
      </v-col>
      <v-col :class="{
        'text-left': $vuetify.display.mobile,
        'text-center': $vuetify.display.mdAndUp
      }">
        <h2 class="h2-text-extra-bold">500+</h2>
        <p>thousands of instruments sold</p>
      </v-col>
      <v-col :class="{
        'text-left': $vuetify.display.mobile,
        'text-center': $vuetify.display.mdAndUp
      }">
        <h2 class="h2-text-extra-bold">15</h2>
        <p>years of work on the market</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <h3
        :class="{
          'h2-text-extra-bold': $vuetify.display.mobile,
          'h3-text-extra-bold': $vuetify.display.mdAndUp
        }"
          class="font-bold m-auto"
        >
          Create Your Music: Choose <span class="h3-text-extra-bold text-accent">Your Guitar</span>
        </h3>
      </v-col>
      <v-col>
        <HomeGuitarTabs />
      </v-col>
    </v-row>
    <v-row class="px-md-12">
      <v-col cols="12" md="7">
        <h3
          class="h3-text-extra-bold !font-heading text-capitalize font-bold"
        >
          Complete Your Sound: Choose <span class="h3-text-extra-bold text-accent">Guitar Accessories</span>
        </h3>
      </v-col>
    </v-row>
    <GuitarAccessories />
    <v-row class="px-md-12">
      <v-col class="d-flex justify-center" cols="12">
        <h3 class="h3-text-extra-bold ">
          Frequently Asked <span class="h3-text-extra-bold text-accent">Questions</span>
        </h3>
      </v-col>
    </v-row>
    <HomeFAQ />
    <v-row class="px-md-12">
      <v-col cols="12" md="7">
        <h3 class="h3-text-extra-bold w-75">
          "<span class="h3-text-extra-bold text-accent">About Us:</span> Passion for Guitars and Music"
        </h3>
      </v-col>
    </v-row>
    <HomeAbout />
    <OrderForm />
    <TopSales />
  </v-container>
</template>

<style scoped>
</style>