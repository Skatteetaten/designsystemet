import { defineTest } from 'jscodeshift/dist/testUtils';

// Define the path to the codemod
const codemodPath = '../update-textarea/update-textarea.js';

// Define a test case
defineTest(__dirname, codemodPath, null, 'update-textarea');
