import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import { render } from '@testing-library/react';

import { resolve } from 'path';

initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({ storybookUrl: 'http://localhost:4400' }),
  configPath: resolve(__dirname, './.storybook'),
  framework: 'react',
  renderer: render,
});
