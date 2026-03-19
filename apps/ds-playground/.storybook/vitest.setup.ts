import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/react-vite';
import { ConfigData, HtmlValidate } from 'html-validate';
import { afterEach, beforeAll } from 'vitest';

import * as projectAnnotations from './preview';

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const project = setProjectAnnotations([
  a11yAddonAnnotations,
  projectAnnotations,
]);
beforeAll(project.beforeAll);

const baseRules = {
  extends: ['html-validate:recommended', 'html-validate:browser'],
  rules: {
    'void-style': 'off',
    'no-inline-style': 'off',
    'valid-id': ['error', { relaxed: true }],
    'aria-label-misuse': ['error', { allowAnyNamable: true }],
    'prefer-native-element': 'off',
    'no-implicit-input-type': 'off',
    'no-dup-class': 'off', //pga dummyClassName i tester
  },
} satisfies ConfigData;

// HTML Validation Setup
const htmlValidate = new HtmlValidate(baseRules);

// Global afterEach hook to validate HTML for all test stories
afterEach(async (context) => {
  // context.story is set by @storybook/addon-vitest before running the test
  const story = (
    context as unknown as {
      story?: { tags?: string[]; parameters?: Record<string, unknown> };
    }
  ).story;
  if (!story) {
    return;
  }

  const tags = story.tags;
  if (!tags || !Array.isArray(tags) || !tags.includes('test')) {
    return;
  }

  // Check for opt-out via tag
  if (tags.includes('no-html-validation')) {
    return;
  }

  // Check for opt-out via parameters (matches a11y addon pattern)
  const parameters = story.parameters as
    | { htmlValidate?: { test?: string; rules?: Record<string, string> } }
    | undefined;
  if (parameters?.htmlValidate?.test === 'off') {
    return;
  }

  // Get the rendered HTML from the story container
  const container =
    document.querySelector('[data-test-block]') ||
    document.querySelector('#storybook-root');
  if (!container) {
    console.warn('HTML validation: Could not find story container');
    return;
  }

  const html = container.innerHTML;
  if (!html || html.trim() === '') {
    return; // Skip validation if no HTML rendered
  }

  // Use custom rules if provided in story parameters
  const validator = parameters?.htmlValidate?.rules
    ? new HtmlValidate({
        ...baseRules,
        rules: {
          ...baseRules.rules,
          ...parameters.htmlValidate.rules,
        },
      })
    : htmlValidate;

  // Validate the HTML
  const report = await validator.validateString(html);

  // If validation failed, format and throw error
  if (!report.valid) {
    const errors = report.results[0]?.messages || [];
    const errorMessages = errors
      .map(
        (msg) =>
          `  [${msg.severity}] Line ${msg.line}:${msg.column} - ${msg.message} (${msg.ruleId})`
      )
      .join('\n');

    const storyName = context.task.name || 'Unknown story';
    const filePath = context.task.file?.filepath || 'Unknown file';

    throw new Error(
      `HTML validation failed for story "${storyName}" in ${filePath}\n\n${errorMessages}\n\nTo disable validation for this story, add:\n- Tag: 'no-html-validation'\n- OR Parameter: parameters: { htmlValidate: { test: 'off' } }`
    );
  }
});
