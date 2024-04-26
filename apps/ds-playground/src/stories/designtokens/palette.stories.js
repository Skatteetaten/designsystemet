import { PaletteTokenExamplesGenerator } from './PaletteTokenExamplesGenerator';
import { TokensList } from './TokensList';
import { getVersion } from '../utils/version.utils';

export default {
  title: 'Designtokens/Palette',
};

export const Palette = {
  render: () => <TokensList tokenType={'palette'} />,
  name: 'Palette',

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
