import { describe, expect, it } from 'vitest';
import { generateResultText } from './output';

describe('generateResultText()', () => {
  it('should return Invalid input. You must enter valid numbers. text if calculationResult equals invalid', () => {
    const calculationResult = 'invalid';

    expect(generateResultText(calculationResult)).toEqual(
      'Invalid input. You must enter valid numbers.'
    );
  });

  it('should return correct result is calculationResult is a number', () => {
    const calculationResult = 55;

    expect(generateResultText(calculationResult)).toEqual(
      `Result: ${calculationResult}`
    );
  });

  it('should contain calculationResult in result string', () => {
    const calculationResult = 55;

    expect(generateResultText(calculationResult)).toContain(calculationResult);
  });
});
