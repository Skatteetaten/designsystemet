import {
  DescriptionListSize,
  DescriptionListWeight,
  Orientation,
} from './DescriptionList.types';

export const getDescriptionListSizeDefault = (): DescriptionListSize =>
  'medium';
export const getDescriptionListIsVerticalOnMobileDefault = (): boolean => true;
export const getDescriptionListIsDescriptionVerticalOnMobileDefault =
  (): boolean => false;
export const getDescriptionDirectionDefault = (): Orientation => 'horizontal';
export const getDescriptionWeightDefault = (): DescriptionListWeight =>
  'regular';
export const getTermWeightDefault = (): DescriptionListWeight => 'bold';
export const getDescriptionListVariantDefault = (): Orientation => 'vertical';
