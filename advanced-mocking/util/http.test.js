import { it, expect, vi } from 'vitest';
import { sendDataRequest } from './http';

const responseData = 'responseData';
const fetchMock = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    const response = {
      ok: true,
      json: () => new Promise((resolve, reject) => resolve(responseData))
    };
    resolve(response);
  });
});

vi.stubGlobal('fetch', fetchMock);

it('should get response from calling a function', async () => {
  const result = await sendDataRequest({ key: 'test' });
  console.log(result)
  expect(result).toEqual(responseData);
});
