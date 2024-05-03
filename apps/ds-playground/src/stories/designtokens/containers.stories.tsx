import { StoryObj } from '@storybook/react';

import { TokensList } from './TokensList';
import { getVersion } from '../utils/version.utils';

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
    version: getVersion('ds-core-designtokens'),
  },
};
