import { TokensList } from './TokensList';
import { ExternalLayout, InternalLayout } from '@skatteetaten/ds-core-utils';
import { getVersion } from '../utils/version.utils';

export default {
  title: 'Designtokens/Containers',
};

export const Containers = {
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
