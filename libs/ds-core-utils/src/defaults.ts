import { Variant, Positon } from './base-props.types';

export const getCommonClassNameDefault = (): string => '';
export const getCommonDisabledDefault = (): boolean => false;

export const getButtonVariantDefault = (): Variant => 'primary';
export const getButtonSvgPathDefault = (): React.ReactElement | undefined =>
  undefined;

export const getInlineButtonPositionDefault = (): Positon => 'left';
export const getInlineButtonDisabledDefault = (): boolean => false;
