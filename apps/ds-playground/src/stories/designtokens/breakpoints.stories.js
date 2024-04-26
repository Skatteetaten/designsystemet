import { TokensList } from './TokensList';
import { getVersion } from '../utils/version.utils';

export default {
  title: 'Designtokens/Breakpoints',
};

export const Breakpoints = {
  render: () => <TokensList tokenType={'breakpoints'} />,
  name: 'Breakpoints',

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
