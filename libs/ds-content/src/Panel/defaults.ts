import { HeadingAs, SubheadingAs } from '@skatteetaten/ds-core-utils';

import {
  PanelVariant,
  PanelSpacing,
  PanelColor,
  PanelPadding,
} from './Panel.types';

export const getPanelColorDefault = (): PanelColor => 'ochre';
export const getPanelVariantDefault = (): PanelVariant => 'outline';
export const getPanelPaddingDefault = (): PanelPadding => 'xl';
export const getPanelSpacingDefault = (): PanelSpacing => 'xxs';
export const getPanelTitleAsDefault = (): HeadingAs => 'h3';
export const getPanelSubtitleAsDefault = (): SubheadingAs => 'h4';
