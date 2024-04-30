<template>
  <section>
    <currency-jumbotron />
    <h1 class="text-center my-3">Available Currencies</h1>
    <p class="text-center font-monospace">
      The host application asynchronously retrieves a list by invoking an action
      from a remote module's Pinia store, and subsequently displays the state of
      the store.
    </p>
    <Loading :isLoading="!currencyStore || currencyStore.isLoading" />
    <div
      v-if="chunkedCurrencyList && chunkedCurrencyList.length"
      class="row scrollable"
    >
      <div
        v-for="(chunk, i) in chunkedCurrencyList"
        :key="i"
        class="col-12 col-md-6 col-lg-4 col-xl-3 mb-2"
      >
        <ul class="list-group">
          <li
            v-for="(value, key) in chunk"
            :key="key"
            class="list-group-item border-bottom border-primary border-top-0 border-start-0 border-end-0 bg-dark"
          >
            {{ value }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { CurrencyList, CurrencyStore } from '@/stores/types';
import { chunkObject } from '@/helpers';
import Loading from '@/components/Loading.vue';
import CurrencyJumbotron from '@/components/CurrencyJumbotron.vue';

const currencyStore = ref<CurrencyStore | null>(null);

const currencyList = ref<CurrencyList | null>(null);

const chunkedCurrencyList = ref<CurrencyList[]>([]);

onMounted(async () => {
  const { useCurrencyStore } = await import('currency_converter/CurrencyStore');
  currencyStore.value = useCurrencyStore();
  console.log('From: @host | calling @remote fetchCurrencyList action.');
  currencyStore.value?.fetchCurrencyList();
});

watchEffect(() => {
  if (currencyStore.value && currencyStore.value.currencyList) {
    currencyList.value = currencyStore.value.currencyList;
    chunkedCurrencyList.value = chunkObject(currencyList.value);
  }
});
</script>

<style lang="scss" scoped>
.scrollable {
  max-height: 500px;
  overflow-y: auto;
}
</style>
