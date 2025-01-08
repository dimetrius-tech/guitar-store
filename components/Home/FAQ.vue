<script setup lang="ts">
import {filename} from "pathe/utils";

const glob = import.meta.glob('/assets/img/faq/*', {eager: true});
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
const questions = [
  {
    question: 'How to take care of your guitar?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },{
    question: 'How to choose the right guitar for a beginner?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },{
    question: 'Is it possible to test the guitar before buying it in the store?',
    answer: 'Yes, in our store you can test the guitar before buying. This allows you to evaluate its comfort, sound quality and general feeling during the game. It is always recommended to try several models to find the one that best suits your needs and preferences.',
  },
];
</script>

<template>
<div>
  <v-row class="py-5 px-12">
    <v-expansion-panels>
      <v-expansion-panel v-for="(question, index) in questions" :key="index">
        <v-expansion-panel-title>
          {{question.question}}
          <template v-slot:actions="{ expanded }">
            <img width="40" height="40" :src="!expanded ? images['plus']: images['minus']" alt="expanded" />
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="w-75">{{question.answer}}</v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</div>
</template>

<style scoped>

</style>