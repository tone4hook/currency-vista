import { Ref } from 'vue';

/**
 * Error store types
 * */
export interface IError {
  hasError: boolean;
  message: string;
}

export interface ErrorStoreState {
  error: Ref<IError>;
}

export interface ErrorStoreActions {
  setError: (hasError: boolean, message: string) => void;
  clearError: () => void;
}

export type ErrorStore = ErrorStoreState & ErrorStoreActions;

/**
 * Currency store types
 * */
interface ConversionRates {
  [key: string]: number;
}

export interface ConversionResult {
  date: string;
  [currency: string]: ConversionRates | string;
}

export type CurrencyData = {
  [key: string]: number;
};

export type CurrencyList = {
  [key: string]: string;
};

interface CurrencyStoreState {
  isLoading: Ref<boolean>;
  currencyData: Ref<ConversionResult | undefined>;
  currencyList: Ref<CurrencyList | undefined>;
  conversionResult: Ref<number | undefined>;
}

interface CurrencyStoreActions {
  fetchCurrencyList: () => Promise<void>;
  fetchConversionResult: (
    fromCurrency: string,
    toCurrency: string,
    amount: number,
  ) => Promise<void>;
}

export type CurrencyStore = CurrencyStoreState & CurrencyStoreActions;

/**
 * WordDefinition store types
 * */
export interface Phonetic {
  text: string;
  audio?: string;
}

export interface Definition {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

export interface WordDefinition {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin: string;
  meanings: Meaning[];
}

export type ApiResponse = WordDefinition[];
export interface WordDefinitionStoreState {
  isLoading: Ref<boolean>;
  wordDefinitions: Ref<ApiResponse>;
}

export interface WordDefinitionStoreActions {
  fetchWordDefinition: (word: string) => Promise<void>;
}

export type WordDefinitionStore = WordDefinitionStoreState &
  WordDefinitionStoreActions;
