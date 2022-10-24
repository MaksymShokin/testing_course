import { validateNotEmpty } from './validation';
import { expect, it, describe } from 'vitest';

describe('validateNotEmpty()', () => {
  it('should throw if empty string is passed', () => {
    const resultFn = () => validateNotEmpty('', 'super-error-message');
    expect(resultFn).toThrow();
  });

  it('should throw if spaces are passed', () => {
    const resultFn = () => validateNotEmpty('  ', 'super-error-message');
    expect(resultFn).toThrow();
  });

  it('should not throw if valid string is passed', () => {
    const resultFn = () =>
      validateNotEmpty('Some string', 'super-error-message');
    expect(resultFn).not.toThrow();
  });

  it('should throw correct error message', () => {
    const resultFn = () => validateNotEmpty('  ', 'super-error-message');
    expect(resultFn).toThrow('super-error-message');
  });
});
