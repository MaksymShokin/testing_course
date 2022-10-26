import { expect, it, vi } from 'vitest';
import fs from 'fs';
import path from 'path';

import { showError } from './dom';
import { Window } from 'happy-dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);
vi.stubGlobal('document', document);

it('should to have message text content', () => {
  const errorText = 'super-error-text';
  showError(errorText);

  expect(document.getElementById('errors').innerHTML).toContain(errorText);
});
