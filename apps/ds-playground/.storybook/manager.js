import { addons } from '@storybook/addons';

import theme from './theme';

import '@skatteetaten/ds-core-designtokens/index.css';

addons.setConfig({
  theme: theme,
  sidebar: {
    filters: {
      patterns: (item) => {
        return !item.tags.includes('isHidden');
      },
    },
  },
});
