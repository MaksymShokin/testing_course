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

it('should throw an error when no arguments provided', () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});

it('should throw an error when provided with multiple arguments instead of an array', () => {
  const resultFn = () => {
    add(1, 2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
