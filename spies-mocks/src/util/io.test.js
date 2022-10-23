import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';

import writeData from './io';

vi.mock('fs');

it('should execute the write file method', () => {
  const data = 'Super test data';
  const fileName = 'test.txt';

  writeData(data, fileName);
  expect(fs.writeFile).toHaveBeenCalled();
});
