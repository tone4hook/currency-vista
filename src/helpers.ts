import { CurrencyList } from '@/stores/types';

export function chunkObject(
  input: CurrencyList,
  chunkSize: number = 10,
): CurrencyList[] {
  const entries = Object.entries(input);
  const result: CurrencyList[] = [];

  for (let i = 0; i < entries.length; i += chunkSize) {
    const chunk: CurrencyList = {};
    for (let j = i; j < i + chunkSize && j < entries.length; j++) {
      chunk[entries[j][0]] = entries[j][1];
    }
    result.push(chunk);
  }

  return result;
}
