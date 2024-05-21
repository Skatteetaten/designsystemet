import { StoryObj } from '@storybook/react';

import { TokensList } from './TokensList';

export default {
  title: 'Designtokens/Spacing',
};
export const Spacing: StoryObj = {
  render: () => <TokensList tokenType={'spacing'} />,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
};
