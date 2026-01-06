import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { AccordionComponent, AccordionProps } from './Accordion.types';
import { AccordionContext } from './AccordionContext';
import { AccordionItem } from './AccordionItem/AccordionItem';
import {
  getAccordionBackgroundColorDefault,
  getAccordionIconPositionDefault,
  getAccordionSizeDefault,
} from './defaults';

import styles from './Accordion.module.scss';

/**
 * Accordion
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-accordion--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/accordion/) - Brukerveiledning
 */
export const Accordion = (({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  color = getAccordionBackgroundColorDefault(),
  size = getAccordionSizeDefault(),
  iconPosition = getAccordionIconPositionDefault(),
  children,
}: AccordionProps) => {
  const colorClassName = color !== 'none' ? styles[`accordion_${color}`] : '';
  const concatenatedClassNames = `${colorClassName} ${className}`.trim();

  return (
    <AccordionContext.Provider value={{ size, iconPosition }}>
      <div
        ref={ref}
        className={concatenatedClassNames}
        lang={lang}
        id={id}
        data-testid={dataTestId}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}) as AccordionComponent;

Accordion.displayName = 'Accordion';
Accordion.Item = AccordionItem;
Accordion.Item.displayName = 'Accordion.Item';
