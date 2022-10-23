import { it, expect } from 'vitest';
import writeData from './io';

it('should execute the write file method', async () => {
  const data = 'Super test data';
  const fileName = 'test.txt';

  const result = await writeData(data, fileName);
  expect(result).toBeUndefined();
});
