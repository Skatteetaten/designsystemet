import { create } from 'storybook/theming';

import palette from '@skatteetaten/ds-core-designtokens/designtokens/palette.json';

export default create({
  base: 'light',
  appBg: palette[':root,\n:host']['--palette-graphite-5'],
  barTextColor: palette[':root,\n:host']['--palette-graphite-70'],
  textColor: palette[':root,\n:host']['--palette-graphite-100'],
  colorPrimary: palette[':root,\n:host']['--palette-azure-70'],
  colorSecondary: palette[':root,\n:host']['--palette-azure-70'],
  brandImage:
    'https://www.skatteetaten.no/globalassets/design/logo/skatteetaten/skjerm/horisontal/skatteetaten-logo-horisontal-rgb-svart.png',
  brandTitle: 'Skatteetatens logo',
});
