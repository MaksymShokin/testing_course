import { it, expect, vi } from 'vitest';
import { HttpError } from './errors';
import { sendDataRequest } from './http';

const responseData = 'responseData';
const fetchMock = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      reject('Not a string');
    }

    const response = {
      ok: true,
      json: () => new Promise((resolve, reject) => resolve(responseData))
    };
    resolve(response);
  });
});

// mock global fetch function
vi.stubGlobal('fetch', fetchMock);

it('should get response from calling a function', async () => {
  let result;

  try {
    result = await sendDataRequest({ key: 'test' });
  } catch (error) {
    result = error;
  }

  expect(result).toEqual(responseData);

  // another way
  // return expect(sendDataRequest({ key: 'test' })).resolves.toBe(responseData);
});

it('should convert the data to JSON before sending the request', async () => {
  let errorMessage;

  try {
    await sendDataRequest({ key: 'test' });
  } catch (error) {
    errorMessage = error;
  }

  return expect(errorMessage).not.toBe('Not a string');
});

it('should throw an error if response is not ok', async () => {
  fetchMock.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
      const response = {
        ok: false,
        json: () => new Promise((resolve, reject) => resolve(responseData))
      };
      resolve(response);
    });
  });

  let errorMessage;

  try {
    await sendDataRequest({ key: 'test' });
  } catch (error) {
    errorMessage = error;
  }

  expect(errorMessage).toBeInstanceOf(HttpError);
});
