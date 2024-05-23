import { StoryObj } from '@storybook/react';

import { TokensList } from './TokensList';

export default {
  title: 'Designtokens/Containers',
};

export const Containers: StoryObj = {
  render: () => <TokensList tokenType={'containers'} />,
  name: 'Containers',
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
};
