<script setup lang="ts">

const valid= ref(true);
const firstname = ref('');
const lastname = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');
const requiredValidation = (value) => {
    if (value) return true

    return 'Field is required.';
}
const nameRule = (value) => {
  if (value?.length <= 10) {
    valid.value = true;
    return true
  }
  valid.value = false;
  return 'Name must be less than 10 characters.'
}
const emailRules = (value) => {
  if (/.+@.+\..+/.test(value)) {
    valid.value = true;
    return true
  }

  valid.value = false;

  return 'E-mail must be valid.'
};
const phoneRules = (value) => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format: Optional "+" followed by 1-15 digits
  if (!value) {
    valid.value = false;
    return "Phone number is required.";
  }
  if(phoneRegex.test(value)) {
    valid.value = true;
    return true;
  }
  valid.value = false;
  return "Invalid phone number. Example: +1234567890";
}
const textRule = (value) => {
  const htmlTagRegex = /<\/?[^>]+(>|$)/g; // Matches HTML and script tags
  if (!value) {
    valid.value = false;
    return "Text is required.";
  }
  if(htmlTagRegex.test(value)) {
    valid.value = false;
    return "HTML tags are not allowed."
  }
  valid.value = true;
  return true;
}
const submit = (e) => {
  e.preventDefault();
  if(valid.value) {
    alert('Form is valid')
  }
};
</script>

<template>
<v-row class="py-5 px-12">
  <v-col cols="4">
    <h3 class="text-h3 font-bold m-auto w-66 pb-8">Placing the <span class="text-accent">Guitar Order</span></h3>
    <p>You can get advice / place an order directly on the website through the feedback form or contact our manager (phone / telegram).</p>
  </v-col>
  <v-col cols="8">
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="firstname" :rules="[requiredValidation, nameRule]" label="First name" required></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="lastname" :rules="[requiredValidation, nameRule]" label="Last name" required></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="email" :rules="[requiredValidation, emailRules]" label="E-mail" required></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="phone" :rules="[requiredValidation, phoneRules]" label="Phone number" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="message" :rules="[requiredValidation, textRule]" label="Your message" required></v-text-field>
          </v-col>
          <v-col cols="12" class="d-flex justify-center">
            <v-btn class="w-33" type="submit" variant="outlined" @click="submit">Send</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-col>
</v-row>
</template>

<style scoped>

</style>