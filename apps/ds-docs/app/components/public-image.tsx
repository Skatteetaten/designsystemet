import { ComponentProps, JSX } from 'react';

import { getPublicUrl } from '../../lib/public-url';

export const PublicImage = ({
  src,
  ...rest
}: ComponentProps<'img'>): JSX.Element => (
  <img {...rest} src={src ? getPublicUrl(src) : undefined} />
);
