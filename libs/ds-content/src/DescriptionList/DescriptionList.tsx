import { Children, JSX } from 'react';

import { useMediaQuery } from '@skatteetaten/ds-core-utils';

import {
  DescriptionListComponent,
  DescriptionListProps,
} from './DescriptionList.types';
import { DescriptionListElement } from './DescriptionListElement/DescriptionListElement';

import styles from './DescriptionList.module.scss';

/**
 * DescriptionList
 *
 * @see [Dokumentasjon](https://skatteetaten.github.io/designsystemet/byggeklosser/komponenter/descriptionlist)
 */
export const DescriptionList = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  size = 'medium',
  variant = 'vertical',
  descriptionDirection = 'horizontal',
  descriptionWeight = 'regular',
  termWeight = 'bold',
  hasSpacing = false,
  isVerticalOnMobile = true,
  isDescriptionVerticalOnMobile = false,
  children,
}: DescriptionListProps): JSX.Element => {
  const isMobile = !useMediaQuery('(min-width: 640px)');
  const isHorizontal =
    variant === 'horizontal' && (!isMobile || !isVerticalOnMobile);
  const isDescriptionHorizontal =
    descriptionDirection === 'horizontal' &&
    (!isMobile || !isDescriptionVerticalOnMobile);

  return (
    <dl
      ref={ref}
      id={id}
      className={`${styles.descriptionList} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
      data-size={size}
      data-variant={isHorizontal ? 'horizontal' : 'vertical'}
      data-description-direction={
        isDescriptionHorizontal ? 'horizontal' : 'vertical'
      }
      data-description-weight={descriptionWeight}
      data-term-weight={termWeight}
      data-has-spacing={hasSpacing ? 'true' : undefined}
    >
      {isHorizontal
        ? Children.map(children, (child, index) => (
            <div
              key={`description-list-item-${index}`}
              className={
                isDescriptionHorizontal ? styles.childWrapper : undefined
              }
            >
              {child}
            </div>
          ))
        : children}
    </dl>
  );
};

export default DescriptionList as DescriptionListComponent;

DescriptionList.displayName = 'DescriptionList';
DescriptionList.Element = DescriptionListElement;
DescriptionList.Element.displayName = 'DescriptionList.Element';
