import { expect, it, describe, beforeEach } from 'vitest';
import { extractPostData } from './posts';

const title = 'super-title';
const content = 'super-content';
let formMock;

describe('extractPostData()', () => {
  beforeEach(() => {
    formMock = {
      title,
      content,
      get(key) {
        return this[key];
      }
    };
  });
  it('should return correct data from form', () => {
    expect(extractPostData(formMock)).toEqual({
      title,
      content
    });
  });
});
