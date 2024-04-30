import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ErrorStore, IError } from './types';

export const useErrorStore = defineStore<'error', ErrorStore>('error', () => {
  const error = ref<IError>({ hasError: false, message: '' });

  function setError(hasError = true, message = 'Something went wrong!') {
    console.log('From: @host | setError action called.');
    error.value = { hasError, message };
  }

  function clearError() {
    console.log('From: @host | clearError action called.');
    error.value = { hasError: false, message: '' };
  }

  return {
    error,
    setError,
    clearError,
  };
});
