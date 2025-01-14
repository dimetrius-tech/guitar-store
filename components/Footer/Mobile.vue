<script setup lang="ts">
const email = ref('');

const emailRules = [
  (v) => !!v || 'Email is required', // Check if the field is filled
  (v) =>
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v) ||
      'Please enter a valid email address', // Email format validation
];
const submitForm = () => {
  if (email.value && emailRules.every((rule) => rule(email.value) === true)) {
    alert(`Email submitted: ${email.value}`);
  }
};
const currentYear = new Date().getFullYear();
</script>

<template>
<v-row class="mt-4">
  <v-col cols="12" class="text-center">
    <img src="images/Logo.png" alt="logo" />
  </v-col>
  <v-col cols="5">
    <v-list>
      <v-list-item>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Guitars</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>About us</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-col>
  <v-col cols="7">
    <v-list>
      <v-list-item>
        <v-list-item-title>Guitar equipment</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Support</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-col>
  <v-col cols="12">
    <v-form @submit.prevent="submitForm" class="mt-6 w-100">
      <div class="flex-1">
        <label for="email" class="block text-white-700 font-bold mb-2">Newsletter</label>
        <div class="d-flex pt-5">
          <v-text-field
              v-model="email"
              id="email"
              type="email"
              placeholder="Enter your email"
              :rules="emailRules"
              outlined
              class="w-66 mr-6 py-2"
          ></v-text-field>
          <v-btn @click="submitForm" color="black" class="self-center py-2 h-100">
            Ok
          </v-btn>
        </div>
      </div>
    </v-form>
  </v-col>
  <v-col cols="12">
    <v-list class="!float-right">
      <v-list-item>
        <v-list-item-title><v-icon icon="mdi-phone" class="mr-2"/>(277)683-1980x5512</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title><v-icon icon="mdi-email" class="mr-2"/>sickfret113@gitm.com</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title class="w-100 text-break">
          <v-icon class="mr-2"><img src="images/location.png" alt="location" /></v-icon>65632 Thomps Gotorway, West Triston 86626
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-col>
  <v-col cols="12" class="text-center">
    <SocialLinks />
  </v-col>
  <v-col cols="12">
    <div class="mb-4 text-center">
      {{`${currentYear} All rights reserved`}}
    </div>
  </v-col>
</v-row>
</template>

<style scoped>

</style>