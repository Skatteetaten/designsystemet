import { Size } from '@skatteetaten/ds-core-utils';

import { IconButtonBrightness } from './IconButton.types';

export const getIconButtonSizeDefault = (): Extract<Size, 'medium'> => 'medium';
export const getIconButtonBrightnessDefault = (): IconButtonBrightness =>
  'default';
