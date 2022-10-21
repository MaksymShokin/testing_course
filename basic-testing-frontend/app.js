import { extractEnteredNumberValues } from './src/parser.js';
import { generateResultText, outputResult } from './src/output.js';

import { calculateResult } from './src/math.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();

  const numberInputs = extractEnteredNumberValues(form);
  const result = calculateResult(numberInputs);
  const resultText = generateResultText(result);
  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
