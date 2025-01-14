<template>
  <v-app class="rounded-md">
    <Header />

    <v-main class="d-flex" style="min-height: 300px;">
      <slot></slot>
    </v-main>
    <v-footer class="px-md-16">
      <FooterDesktop v-if="$vuetify.display.mdAndUp" />
      <FooterMobile v-else />
    </v-footer>
  </v-app>
</template>

<style scoped>

</style>
<script setup>
</script>