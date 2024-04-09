import { forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { AccordionProps } from './Accordion.types';
import { getAccordionIconPositionDefault } from './defaults';

import styles from './Accordion.module.scss';

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      color,
      iconPosition = getAccordionIconPositionDefault(),
      children,
    },

    ref
  ) => {
    const hasIconRight = iconPosition === 'right';

    const colorClassName = color ? styles[`accordion_${color}`] : '';
    const classNames = `${colorClassName} ${
      hasIconRight && styles.iconRight
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

export { getAccordionIconPositionDefault };
