import { defineTest } from 'jscodeshift/dist/testUtils';

const tests = [
  'textfield-remove-as-input',
  'textfield-as-textarea-change-component',
  'textfield-and-textarea-in-same-file',
];

describe('split textfield and textarea', () => {
  tests.forEach((test) =>
    defineTest(__dirname, 'split-textfield-textarea', null, test)
  );
});
