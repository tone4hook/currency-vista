<template>
  <section class="py-3">
    <dictionary-jumbotron />
    <word-definitions word="federation" />
  </section>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import DictionaryJumbotron from '@/components/DictionaryJumbotron.vue';
const WordDefinitions = defineAsyncComponent(
  () => import('vista_dictionary/WordDefinitions'),
);
</script>
