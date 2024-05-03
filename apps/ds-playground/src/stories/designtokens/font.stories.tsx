import { StoryObj } from '@storybook/react';

import { TokensList } from './TokensList';
import { getVersion } from '../utils/version.utils';

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
    version: getVersion('ds-core-designtokens'),
  },
};
