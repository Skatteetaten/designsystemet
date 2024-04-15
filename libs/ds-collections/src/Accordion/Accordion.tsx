import { forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { AccordionProps } from './Accordion.types';
import {
  getAccordionBackgroundColorDefault,
  getAccordionIconPositionDefault,
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
      iconPosition = getAccordionIconPositionDefault(),
      children,
    },

    ref
  ) => {
    const hasChevronLeft = iconPosition === 'left';

    const colorClassName = color !== 'none' ? styles[`accordion_${color}`] : '';
    const classNames = `${colorClassName} ${
      hasChevronLeft && styles.accordion_hasChevronLeft
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

export { getAccordionIconPositionDefault, getAccordionBackgroundColorDefault };
