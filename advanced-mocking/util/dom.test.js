import { beforeEach, expect, it, vi } from 'vitest';
import fs from 'fs';
import path from 'path';

import { showError } from './dom';
import { Window } from 'happy-dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

// reset document
beforeEach(() => {
  document.body.innerHTML = '';
  document.write(htmlDocumentContent);
});

it('should not be null after setting error', () => {
  const errorText = 'super-error-text';
  showError(errorText);

  expect(document.getElementById('errors').innerHTML).not.toBeNull();
});

it('should have the correct message text content', () => {
  const errorText = 'super-error-text';
  showError(errorText);

  expect(document.getElementById('errors').innerHTML).toContain(errorText);
});

it('should have correct message text content in the first child of error paragraphs', () => {
  const errorText = 'super-error-text';
  showError(errorText);

  expect(
    document.getElementById('errors').firstElementChild.textContent
  ).toEqual(errorText);
});
