import { validateNumber, validateStringNotEmpty } from './validation';
import { it, expect, describe } from 'vitest';

describe('validateStringNotEmpty()', () => {
  it('should throw if empty string is provided', () => {
    const value = '';
    const resultFn = () => validateStringNotEmpty(value);

    expect(resultFn).toThrow('Invalid input - must not be empty.');
  });

  it('should throw if spaces are provided', () => {
    const value = '   ';
    const resultFn = () => validateStringNotEmpty(value);

    expect(resultFn).toThrow('Invalid input - must not be empty.');
  });

  it('should not throw if valid string is provided', () => {
    const value = 'test';
    const resultFn = () => validateStringNotEmpty(value);

    expect(resultFn).not.toThrow();
  });
});

describe('validateNumber()', () => {
  it('should throw if NaN is provided', () => {
    const value = NaN;
    const resultFn = () => validateNumber(value);

    expect(resultFn).toThrow('Invalid number input.');
  });

  it('should not throw if number is provided', () => {
    const value = 0;
    const resultFn = () => validateNumber(value);

    expect(resultFn).not.toThrow();
  });
});
