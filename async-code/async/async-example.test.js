import { describe, expect, it, vitest } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

describe('generateToken()', () => {
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
  it('should return a string if promise resolved', async () => {
    const userEmail = 'test@a.com';

    // another way
    // expect(generateTokenPromise(userEmail)).resolves.toBeTypeOf('string');
    const result = await generateTokenPromise(userEmail);

    expect(result).toBeTypeOf('string');
  });
});
