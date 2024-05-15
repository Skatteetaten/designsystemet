import { StoryObj } from '@storybook/react';

import { TokensList } from './TokensList';

export default {
  title: 'Designtokens/Palette',
};

export const Palette: StoryObj = {
  render: () => <TokensList tokenType={'palette'} />,
  name: 'Palette',

  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },

    viewMode: 'docs',
  },
};
