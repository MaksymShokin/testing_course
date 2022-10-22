import { transformToNumber, cleanNumbers } from './numbers';
import { it, expect, describe } from 'vitest';

describe('transformToNumber()', () => {
  it('should turn string to number if it is numeric string', () => {
    const value = '7';
    const result = transformToNumber(value);

    expect(result).toBe(Number(value));
    expect(result).toBeTypeOf('number');
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
});

describe('cleanNumbers()', () => {
  it('should return same array if all numbers are correct', () => {
    const numbers = ['1', '2', '3'];

    expect(cleanNumbers(numbers)).toEqual([1, 2, 3]);
  });

  it('should throw an error if one of the inputs is an empty string', () => {
    const numbers = ['1', '', '3'];

    const resultFn = () => cleanNumbers(numbers);

    expect(resultFn).toThrow('Invalid input - must not be empty.');
  });

  it('should throw an error if one of the inputs is a string', () => {
    const numbers = ['1', 'invalid', '3'];

    const resultFn = () => cleanNumbers(numbers);

    expect(resultFn).toThrow('Invalid number input.');
  });
});
