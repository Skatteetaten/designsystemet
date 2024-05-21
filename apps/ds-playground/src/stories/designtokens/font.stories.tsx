import { StoryObj } from '@storybook/react';

import { TokensList } from './TokensList';

export default {
  title: 'Designtokens/Font',
};

export const Font: StoryObj = {
  render: () => <TokensList tokenType={'font'} />,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
};
