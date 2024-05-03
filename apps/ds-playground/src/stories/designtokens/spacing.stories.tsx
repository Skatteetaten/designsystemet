import { StoryObj } from '@storybook/react';

import { TokensList } from './TokensList';
import { getVersion } from '../utils/version.utils';

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
    version: getVersion('ds-core-designtokens'),
  },
};
