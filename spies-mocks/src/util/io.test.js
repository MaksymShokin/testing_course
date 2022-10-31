import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';

import writeData from './io';

vi.mock('fs');
vi.mock('path', () => {
  return {
    // mock default function
    default: {
      join: (...args) => {
        return args[args.length - 1];
      }
    }
  };
});

it('should execute the write file method', () => {
  const data = 'Super test data';
  const fileName = 'test.txt';

  writeData(data, fileName);
  expect(fs.writeFile).toHaveBeenCalledWith(fileName, data);
});
