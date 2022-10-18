import { Size, IconVariant } from '@skatteetaten/ds-core-utils';
export const getClassNameDefault = (): string => '';
export const getRoleDefault = (): string => 'img';
export const getVariantDefault = (): IconVariant => 'systemIcon';
export const getViewBoxDefault = (variant: IconVariant): string =>
  variant === 'systemIcon' ? '0 0 24 24' : '0 0 48 48';
export const getSizeDefault = (): Extract<Size, 'medium'> => 'medium';
