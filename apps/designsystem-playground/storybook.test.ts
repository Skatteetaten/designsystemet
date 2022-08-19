import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import { render } from '@testing-library/react';

import { resolve } from 'path';

const storybookUrl =
  process.env['STORYSHOTS_MODE'] === 'static'
    ? `file://${resolve(
        __dirname,
        '../../dist/storybook/designsystem-playground'
      )}`
    : 'http://localhost:4400';

initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl,
  }),
  configPath: resolve(__dirname, './.storybook'),
  framework: 'react',
  renderer: render,
});
