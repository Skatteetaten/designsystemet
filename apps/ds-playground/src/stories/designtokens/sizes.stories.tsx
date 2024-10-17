import { StoryObj } from '@storybook/react';

import { TokensList } from './TokensList';

export default {
  title: 'Designtokens/Sizes',
};

export const Sizes: StoryObj = {
  render: () => <TokensList tokenType={'sizes'} />,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
};
