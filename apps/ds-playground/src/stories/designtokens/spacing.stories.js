import { SpacingTokenExamplesGenerator } from './SpacingTokenExamplesGenerator';
import { TokensList } from './TokensList';
import { getVersion } from '../utils/version.utils';

export default {
  title: 'Designtokens/Spacing',
};

export const Spacing = {
  render: () => <TokensList tokenType={'spacing'} />,
  name: 'Spacing',

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
