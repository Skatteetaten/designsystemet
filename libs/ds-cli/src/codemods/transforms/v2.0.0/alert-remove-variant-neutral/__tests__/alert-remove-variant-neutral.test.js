import { defineTest } from 'jscodeshift/dist/testUtils';

const tests = ['alert-remove-variant-neutral', 'alert-keep-other-variants'];

describe('remove variant neutral from alert and replace with "info"', () => {
  tests.forEach((test) =>
    defineTest(__dirname, 'alert-remove-variant-neutral', null, test)
  );
});
