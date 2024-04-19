import { forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { AccordionProps } from './Accordion.types';
import {
  getAccordionBackgroundColorDefault,
  getAccordionIconPositionDefault,
  getAccordionSizeDefault,
} from './defaults';

import styles from './Accordion.module.scss';

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      color = getAccordionBackgroundColorDefault(),
      size = getAccordionSizeDefault(),
      iconPosition = getAccordionIconPositionDefault(),
      children,
    },
    ref
  ) => {
    const colorClassName = color !== 'none' ? styles[`accordion_${color}`] : '';
    const sizeClassName = size !== 'medium' ? styles[`accordion_${size}`] : '';
    const classNames = `${colorClassName} ${sizeClassName} ${
      iconPosition === 'left' && styles.accordion_iconLeft
    } ${className}`.trim();

    return (
      <div
        ref={ref}
        className={classNames}
        lang={lang}
        id={id}
        data-testid={dataTestId}
      >
        {children}
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';

export {
  getAccordionIconPositionDefault,
  getAccordionBackgroundColorDefault,
  getAccordionSizeDefault,
};
