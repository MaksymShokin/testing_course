import { it, describe, expect, vi } from 'vitest';
import { generateReportData } from './data';

describe('generateReportData()', () => {
  it('should call logFn it is passed', () => {
    const logFn = vi.fn();

    generateReportData(logFn)

    expect(logFn).toHaveBeenCalled()
  });
});
