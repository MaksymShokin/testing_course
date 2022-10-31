import { describe, expect, it, vitest } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

describe('generateToken()', () => {
  // for callbacks
  it('should return a string', done => {
    const userEmail = 'test@a.com';

    generateToken(userEmail, (_, token) => {
      try {
        expect(token).toBeTypeOf('string');
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});

describe('generateTokenPromise()', () => {
  // 2 ways for async await
  it('should return a string if promise resolved', async () => {
    const userEmail = 'test@a.com';

    // another way
    // return expect(generateTokenPromise(userEmail)).resolves.toBeTypeOf('string');
    const result = await generateTokenPromise(userEmail);

    expect(result).toBeTypeOf('string');
  });
});
