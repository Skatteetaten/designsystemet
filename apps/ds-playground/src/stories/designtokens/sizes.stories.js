import { SizesTokenExamplesGenerator } from './SizesTokenExamplesGenerator';
import { TokensList } from './TokensList';
import { getVersion } from '../utils/version.utils';

export default {
  title: 'Designtokens/Sizes',
};

export const Sizes = {
  render: () => <TokensList tokenType={'sizes'} />,
  name: 'Sizes',

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
