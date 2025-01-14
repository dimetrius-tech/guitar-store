<script setup lang="ts">
const drawer = ref(false);
const drawerValue = computed(() => drawer.value);
const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<template>
  <v-app-bar class="px-12 mb-6">
    <v-app-bar-title>
      <img src="images/Logo.png" alt="logo" />
    </v-app-bar-title>
    <template v-if="$vuetify.display.mdAndUp">
      <v-spacer />
      <v-nav-btn class="lg-text-bold" to="/">Home</v-nav-btn>
      <v-nav-btn variant="plain" to="/">Guitars</v-nav-btn>
      <v-nav-btn variant="plain" to="/">Guitar equipment</v-nav-btn>
      <v-nav-btn variant="plain" to="/">About us</v-nav-btn>
      <v-nav-btn variant="plain" to="/">Support</v-nav-btn>
      <v-spacer />
      <v-btn icon="mdi-magnify"/>
      <v-btn icon="mdi-cart-outline"/>
    </template>
    <template v-else>
      <v-app-bar-nav-icon variant="text" @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-btn icon="mdi-cart-outline"/>
    </template>
  </v-app-bar>
  <HeaderNavigation :drawer="drawerValue" />
</template>

<style scoped>

</style>