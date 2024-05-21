import { StoryObj } from '@storybook/react';

import { TokensList } from './TokensList';

export default {
  title: 'Designtokens/Breakpoints',
};

export const Breakpoints: StoryObj = {
  render: () => <TokensList tokenType={'breakpoints'} />,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
};
