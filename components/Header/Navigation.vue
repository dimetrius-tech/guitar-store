<script setup lang="ts">
import {computed} from "vue";
import SocialLinks from "../SocialLinks.vue";

const {drawer} = defineProps({
  drawer: Boolean,
})
const localDrawer = computed(() => drawer);
const search = ref('');
const performSearch = () => {
  console.log('Search value:', search.value);
};
const items = [
  {
    name: 'Home',
    destination: 'home,'
  },
  {
    name: 'Guitars',
    destination: 'guitars'
  },
  {
    name: 'Guitar Equipment',
    destination: 'guitar-equipment',
  },
  {
    name: 'About us',
    destination: 'about',
  },
  {
    name: 'Support',
    destination: 'support',
  }
];
</script>

<template>
  <v-navigation-drawer app location="top" class="text-center" v-model="localDrawer">
    <v-list class="text-center">
      <v-list-item>
        <v-text-field
            v-model="search"
            label=""
            class="bg-dark border-0 w-50 ma-auto opacity-100"
            prepend-inner-icon="mdi-magnify"
            outlined
            clearable
            @click:append="performSearch"
            @keydown.enter="performSearch"
        />
      </v-list-item>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-nav-mobile-btn>{{item.name}}</v-nav-mobile-btn>
      </v-list-item>
    </v-list>
    <SocialLinks />
  </v-navigation-drawer>
</template>

<style scoped>

</style>