import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/react-vite';
// @ts-expect-error TODO
import { vis } from 'storybook-addon-vis/vitest-setup';
import { beforeAll } from 'vitest';

import * as projectAnnotations from './preview';

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const project = setProjectAnnotations([
  a11yAddonAnnotations,
  projectAnnotations,
]);
beforeAll(project.beforeAll);

// capture image snapshot at the end of each test
vis.setup({ auto: false });

// capture image snapshot at the end of each test for multiple themes (light and dark in this example).
//
// Note that this changes the theme in the `afterEach` hook.
// If you want to capture manual snapshots in different themes,
// configure Vitest to run the tests in different themes.
// vis.setup({
//   auto: {
//     async light() {
//       document.body.classList.remove('dark');
//     },
//     async dark() {
//       document.body.classList.add('dark');
//     },
//   },
// });
