import { expect, it, describe } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('HttpError', () => {
  it('should correctly create new object with statusCode, message and data', () => {
    const httpError = new HttpError(404, 'Not found', 'Some string data');

    expect(httpError).toEqual({
      statusCode: 404,
      message: 'Not found',
      data: 'Some string data'
    });
  });
});

describe('ValidationError', () => {
  it('should correctly create new object with message', () => {
    const validationError = new ValidationError('Some super message');

    expect(validationError).toEqual({
      message: 'Some super message'
    });
  });
});
