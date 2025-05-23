import { Children } from 'react';

import {
  getCommonClassNameDefault,
  useMediaQuery,
} from '@skatteetaten/ds-core-utils';

import {
  getDescriptionDirectionDefault,
  getDescriptionListIsVerticalOnMobileDefault,
  getDescriptionListSizeDefault,
  getDescriptionListVariantDefault,
  getDescriptionWeightDefault,
  getTermWeightDefault,
} from './defaults';
import {
  DescriptionListComponent,
  DescriptionListProps,
} from './DescriptionList.types';
import { DescriptionListElement } from '../DescriptionListElement/DescriptionListElement';

import styles from './DescriptionList.module.scss';

export const DescriptionList = (({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  size = getDescriptionListSizeDefault(),
  variant = getDescriptionListVariantDefault(),
  descriptionDirection = getDescriptionDirectionDefault(),
  descriptionWeight = getDescriptionWeightDefault(),
  termWeight = getTermWeightDefault(),
  hasSpacing,
  isVerticalOnMobile = getDescriptionListIsVerticalOnMobileDefault(),
  children,
}: DescriptionListProps) => {
  const isMobile = !useMediaQuery('(min-width: 640px)');
  const isHorizontal =
    variant === 'horizontal' && (!isMobile || !isVerticalOnMobile);

  const verticalClassName =
    descriptionDirection === 'vertical'
      ? styles.descriptionList_verticalVertical
      : styles.descriptionList_vertical;

  const variantClassName = isHorizontal
    ? styles.descriptionList_horizontal
    : verticalClassName;

  const sizeClassName = size === 'small' ? styles.descriptionList_small : '';
  const spacingClassName = hasSpacing ? styles.spacing : '';

  const termClassName =
    termWeight === 'regular' ? styles.descriptionListTermRegular : '';
  const descriptionClassName =
    descriptionWeight === 'bold' ? styles.descriptionListDescriptionBold : '';

  const descriptionListClassname =
    `${styles.descriptionList} ${variantClassName} ${spacingClassName} ${sizeClassName} ${termClassName} ${descriptionClassName} ${className}`.trim();

  return (
    <dl
      ref={ref}
      id={id}
      className={descriptionListClassname}
      lang={lang}
      data-testid={dataTestId}
    >
      {variant === 'horizontal' && (!isMobile || !isVerticalOnMobile)
        ? Children.map(children, (child) => (
            <div
              className={
                descriptionDirection === 'horizontal'
                  ? styles.childWrapper
                  : undefined
              }
            >
              {child}
            </div>
          ))
        : children}
    </dl>
  );
}) as DescriptionListComponent;

DescriptionList.displayName = 'DescriptionList';
DescriptionList.Element = DescriptionListElement;
DescriptionList.Element.displayName = 'DescriptionList.Element';

export {
  getDescriptionListSizeDefault,
  getDescriptionDirectionDefault,
  getDescriptionListIsVerticalOnMobileDefault,
  getDescriptionWeightDefault,
  getTermWeightDefault,
  getDescriptionListVariantDefault,
};
