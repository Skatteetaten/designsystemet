import { addons } from '@storybook/addons';

import theme from './theme';

import '@skatteetaten/ds-core-designtokens/index.css';

addons.setConfig({
  theme: theme,
});
