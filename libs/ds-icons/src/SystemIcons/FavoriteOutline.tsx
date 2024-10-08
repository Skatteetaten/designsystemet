import { JSX } from 'react';

import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const FavoriteOutlineSVGpath = (
  <path
    d={
      'M10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3C15.3743 3 14.2779 3.33904 13.3488 3.92234C12.8419 4.24063 12.3848 4.63165 12 5.08C11.6152 4.63165 11.1581 4.24063 10.6512 3.92234C9.72215 3.33904 8.62572 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03ZM12 17.97C14.5103 15.6928 16.4107 13.9479 17.7206 12.3453C19.0426 10.728 19.5 9.56311 19.5 8.5C19.5 6.79369 18.2023 5.5 16.5 5.5C15.5158 5.5 14.5297 5.97115 13.8971 6.70821L12 8.91858L10.1029 6.70821C9.47032 5.97115 8.48424 5.5 7.5 5.5C5.79773 5.5 4.5 6.79369 4.5 8.5C4.5 9.56311 4.9574 10.728 6.27941 12.3453C7.58929 13.9479 9.48974 15.6928 12 17.97Z'
    }
    fillRule={'evenodd'}
    clipRule={'evenodd'}
  />
);

export function FavoriteOutlineIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return <Icon {...props} svgPath={FavoriteOutlineSVGpath} />;
}
