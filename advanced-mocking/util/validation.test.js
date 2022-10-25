import { validateNotEmpty } from './validation';
import { expect, it, describe } from 'vitest';

const errorMessage = 'super-error-message';

describe('validateNotEmpty()', () => {
  it('should throw if empty string is passed', () => {
    const resultFn = () => validateNotEmpty('', errorMessage);
    expect(resultFn).toThrow();
  });

  it('should throw if spaces are passed', () => {
    const resultFn = () => validateNotEmpty('  ', errorMessage);
    expect(resultFn).toThrow();
  });

  it('should not throw if valid string is passed', () => {
    const resultFn = () => validateNotEmpty('Some string', errorMessage);
    expect(resultFn).not.toThrow();
  });

  it('should throw correct error message', () => {
    const resultFn = () => validateNotEmpty('  ', errorMessage);
    expect(resultFn).toThrow(errorMessage);
  });
});
