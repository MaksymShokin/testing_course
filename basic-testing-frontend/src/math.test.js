import { add } from './math';
import { it, expect } from 'vitest';

it('should summarize all values', () => {
  const values = [2, 5];
  const result = add(values);
  expect(result).toEqual(7);
});

it('should return NaN if invalid values are provided', () => {
  const values = ['invalid', 2];

  const result = add(values);
  expect(result).toBeNaN();
});

it('should return 0 if empty array is provided', () => {
  const values = [];

  const result = add(values);
  expect(result).toBe(0);
});
