import { FontTokenExamplesGenerator } from './FontTokenExamplesGenerator';
import { TokensList } from './TokensList';
import { getVersion } from '../utils/version.utils';

export default {
  title: 'Designtokens/Font',
};

export const Font = {
  render: () => <TokensList tokenType={'font'} />,
  name: 'Font',

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
