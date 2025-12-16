import { Size } from '@skatteetaten/ds-core-utils';

import { TableSize, TableVariant } from '../Table/Table.types';

export const getIconButtonSize = (
  isDesktop: boolean,
  variant?: TableVariant,
  size?: TableSize
): Extract<Size, 'extraSmall' | 'small' | 'medium' | 'large'> => {
  if (size) {
    return size;
  }

  if (variant === 'compact') {
    return 'extraSmall';
  }

  return isDesktop ? 'large' : 'medium';
};
