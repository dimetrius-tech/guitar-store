<script setup lang="ts">
import SocialLinks from "../SocialLinks.vue";
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
  <v-row no-gutters class="!w-full !pb-6">
    <v-col cols="4">
      <img src="images/Logo.png" alt="logo" />
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
                class="w-66 mr-6"
            ></v-text-field>
            <v-btn @click="submitForm" color="black" class="self-center py-5 h-100">
              Ok
            </v-btn>
          </div>
        </div>
      </v-form>
    </v-col>
    <v-col cols="2" offset="1">
      <v-list>
        <v-list-item class="px-0">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item class="px-0">
          <v-list-item-title>Guitars</v-list-item-title>
        </v-list-item>
        <v-list-item class="px-0">
          <v-list-item-title>About us</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col cols="2">
      <v-list>
        <v-list-item>
          <v-list-item-title>Guitar equipment</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Support</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col offset="1" cols="2" class="text-end">
      <v-list>
        <v-list-item class="pr-4">
          <v-list-item-title><v-icon icon="mdi-phone" class="mr-4"/>(277)683-1980x5512</v-list-item-title>
        </v-list-item>
        <v-list-item class="px-0">
          <v-list-item-title><v-icon icon="mdi-email" class="mr-4"/>sickfret113@gitm.com</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col>
      <div class="my-4">
        {{`${currentYear} All rights reserved`}}
      </div>
    </v-col>
    <v-col offset="1">
      <div class="my-4 text-center">
        <v-icon class="pr-4"><img src="images/location.png" alt="location" /></v-icon>65632 Thomps Gotorway, West Triston 86626
      </div>
    </v-col>
    <v-col>
      <div class="text-right">
        <SocialLinks />
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>