import {
  it,
  expect,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
  describe
} from 'vitest';

import { User } from './hooks';

const testEmail = 'test@test.com';
let user = new User(testEmail);

beforeAll(() => {
  console.log('beforeAll');
});

beforeEach(() => {
  console.log('beforeEach');
  user = new User(testEmail);
});

afterEach(() => {
  console.log('afterEach');
});

afterAll(() => {
  console.log('afterAll');
});

// Testing concurrency only for individual files. Running tests in different files in concurrent by default
// Add to it
it.concurrent('should update the email', () => {
  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});
// or add to describe
describe.concurrent(() => {
  // all tests
});

it('should update the email', () => {
  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it('should have an email property', () => {
  expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {
  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
  user.clearEmail();

  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
  user.clearEmail();

  expect(user).toHaveProperty('email');
});
