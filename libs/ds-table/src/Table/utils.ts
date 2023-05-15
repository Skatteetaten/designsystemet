import { useState, useEffect } from 'react';

import { Size } from '@skatteetaten/ds-core-utils';
import { TFunction } from 'i18next';

import { SortState, TableVariant } from './Table.types';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = (): void => {
      setMatches(media.matches);
    };
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

export const getIconButtonSize = (
  isDesktop: boolean,
  variant?: TableVariant
): Extract<Size, 'extraSmall' | 'medium' | 'large'> => {
  if (variant === 'compact') {
    return 'extraSmall';
  }
  return isDesktop ? 'large' : 'medium';
};

export const getScreenReaderSortDirectionText = (
  shouldShowSRText: boolean,
  sortState: SortState,
  t: TFunction<'ds_tables', undefined, 'ds_tables'>
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
    default:
      return '';
  }
};
