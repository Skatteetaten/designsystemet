import { Size } from '@skatteetaten/ds-core-utils';

import { IconVariant } from './Icon.types';

export const getIconVariantDefault = (): IconVariant => 'systemIcon';
export const getIconSizeDefault = (): Extract<Size, 'medium'> => 'medium';
