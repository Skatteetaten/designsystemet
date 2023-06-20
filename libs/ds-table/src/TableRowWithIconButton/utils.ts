import { Size } from '@skatteetaten/ds-core-utils';

import { TableVariant } from '../Table/Table.types';

export const getIconButtonSize = (
  isDesktop: boolean,
  variant?: TableVariant
): Extract<Size, 'extraSmall' | 'medium' | 'large'> => {
  if (variant === 'compact') {
    return 'extraSmall';
  }
  return isDesktop ? 'large' : 'medium';
};
