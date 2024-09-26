import { ComponentPropsWithoutRef } from 'react';

import { FormSize } from './base-props.types';

export const getCommonClassNameDefault = (): string => '';
export const getCommonButtonTypeDefault =
  (): ComponentPropsWithoutRef<'button'>['type'] => 'button';
export const getCommonFormVariantDefault = (): FormSize => 'medium';
export const getCommonAutoCompleteDefault =
  (): ComponentPropsWithoutRef<'input'>['autoComplete'] => 'off';
export const getAutoCompletePropDescription = (): string =>
  'Verdien til autoComplete må være "on", "off" eller en av de andre lovlige verdiene beskrevet på <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete" target="msndoc">MDN</a>';
