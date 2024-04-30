<template>
  <div v-if="isLoading" class="text-center">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  isLoading: boolean;
}

const { isLoading } = defineProps<Props>();
</script>
