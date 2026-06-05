import { JSX } from 'react';

import { AccordionComponent, AccordionProps } from './Accordion.types';
import { AccordionContext } from './AccordionContext';
import { AccordionItem } from './AccordionItem/AccordionItem';

import styles from './Accordion.module.scss';

/**
 * Accordion
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-accordion--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/accordion/) - Brukerveiledning
 */
export const Accordion = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  color = 'none',
  size = 'medium',
  iconPosition = 'right',
  children,
}: AccordionProps): JSX.Element => {
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
};

export default Accordion as AccordionComponent;

Accordion.displayName = 'Accordion';
Accordion.Item = AccordionItem;
Accordion.Item.displayName = 'Accordion.Item';
