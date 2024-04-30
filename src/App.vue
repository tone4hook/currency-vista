<template>
  <navbar />
  <alert />
  <router-view />
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Alert from '@/components/Alert.vue';
</script>
