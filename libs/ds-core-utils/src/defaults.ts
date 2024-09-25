import { ComponentPropsWithoutRef } from 'react';

import { FormSize } from './base-props.types';

export const getCommonClassNameDefault = (): string => '';
export const getCommonButtonTypeDefault =
  (): ComponentPropsWithoutRef<'button'>['type'] => 'button';
export const getCommonFormVariantDefault = (): FormSize => 'medium';
export const getCommonAutoCompleteDefault =
  (): ComponentPropsWithoutRef<'input'>['autoComplete'] => 'off';
