<template>
  <div class="container py-3">
    <hero />
    <currency-list />
    <federation-definition />
  </div>
</template>

<script setup lang="ts">
import CurrencyList from '@/components/CurrencyList.vue';
import FederationDefinition from '@/components/FederationDefinition.vue';
import Hero from '@/components/Hero.vue';
</script>
