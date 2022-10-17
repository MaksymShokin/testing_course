import { transformToNumber } from './numbers';
import { it, expect } from 'vitest';

it('should turn string to number if it is numeric string', () => {
  const value = '7';
  const result = transformToNumber(value);
  expect(result).toBe(Number(value));
});

it('should turn string to NaN if it is no numeric string', () => {
  const value = 'test';
  const result = transformToNumber(value);
  expect(result).toBeNaN();
});

it('should return 0 if argument is null', () => {
  const value = null;
  const result = transformToNumber(value);
  expect(result).toBe(0);
});

it('should return NaN if no argument is passed', () => {
  const result = transformToNumber();
  expect(result).toBeNaN();
});
