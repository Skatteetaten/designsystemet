import { ComponentPropsWithoutRef } from 'react';

export const getCommonClassNameDefault = (): string => '';
export const getCommonButtonTypeDefault =
  (): ComponentPropsWithoutRef<'button'>['type'] => 'button';
