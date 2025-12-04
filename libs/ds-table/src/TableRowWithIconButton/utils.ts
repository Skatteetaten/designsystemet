import { Size } from '@skatteetaten/ds-core-utils';

import { TableSize, TableVariant } from '../Table/Table.types';

export const getIconButtonSize = (
  isDesktop: boolean,
  variant?: TableVariant,
  size?: TableSize
): Extract<Size, 'extraSmall' | 'medium' | 'large'> => {
  switch (size) {
    case 'extraSmall':
      return 'extraSmall';
    case 'small':
      return 'extraSmall';
    case 'medium':
      return 'medium';
    case 'large':
      return 'large';
    default:
      break;
  }

  if (variant === 'compact') {
    return 'extraSmall';
  }

  return isDesktop ? 'large' : 'medium';
};
