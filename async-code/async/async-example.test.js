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
  // it('should call callback on finish', async () => {
  //   const userEmail = 'test@a.com';
  //   const fn = vitest.fn();

  //   await generateToken(userEmail, fn);

  //   expect(fn).toHaveBeenCalled();
  // });
});
