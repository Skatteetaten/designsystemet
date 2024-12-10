import { TFunction } from 'i18next';

import { Density, Size } from '@skatteetaten/ds-core-utils';

import { SortState } from './Table/Table.types';

export const getIconButtonSize = (
  isDesktop: boolean,
  variant?: Density
): Extract<Size, 'extraSmall' | 'medium' | 'large'> => {
  if (variant === 'compact') {
    return 'extraSmall';
  }
  return isDesktop ? 'large' : 'medium';
};

export const getScreenReaderSortDirectionText = (
  shouldShowSRText: boolean,
  sortState: SortState,
  t: TFunction<'ds_tables'>
): string => {
  if (!shouldShowSRText) {
    return '';
  }
  const direction = sortState?.direction;
  switch (direction) {
    case 'ascending':
      return t('table.SortedAscending');
    case 'descending':
      return t('table.SortedDescending');
    case 'none':
      return t('table.NotSorted');
    default:
      return '';
  }
};
