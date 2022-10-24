import { vi } from 'vitest';

// this global mock for promises fs
export const promises = {
  writeFile: vi.fn((path, data) => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  })
};
