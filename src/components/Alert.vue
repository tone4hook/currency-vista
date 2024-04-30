<template>
  <transition name="fade">
    <div
      v-if="errorStore.error.hasError"
      class="alert alert-danger z-3 position-absolute d-flex justify-content-between align-items-center w-100 mb-0"
      role="alert"
    >
      {{ errorStore.error.message }}
      <button type="button" class="btn btn-dark" @click="errorStore.clearError">
        Dismiss
      </button>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { Transition } from 'vue';
import { useErrorStore } from '@/stores';

const errorStore = useErrorStore();
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
