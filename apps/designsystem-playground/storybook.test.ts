import initStoryshots from '@storybook/addon-storyshots';
import { render } from '@testing-library/react';

import { resolve } from 'path';

initStoryshots({
  configPath: resolve(__dirname, './.storybook'),
  framework: 'react',
  renderer: render,
});
