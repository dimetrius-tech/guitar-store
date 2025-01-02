<script setup>

</script>

<template>
  <div class="mt-5">
    <v-row class="border-y-2 py-5 px-12">
      <v-col cols="10">
        <h1 class="text-h1 !font-heading font-extrabold text-uppercase">
          Emotion in every note - <span class="text-accent">the best guitars</span> for you
        </h1>
      </v-col>
      <v-col class="m-auto text-center">
        <v-btn variant="outlined">Shop now</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <img class="m-auto" src="@images/home-banner.png" alt="home-banner" />
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <img class="m-auto" src="@images/HomePageLogo.png" alt="HomePageLogo" />
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
  </div>
</template>

<style scoped>
.text-accent {
  color: #CFC934;
}
</style>