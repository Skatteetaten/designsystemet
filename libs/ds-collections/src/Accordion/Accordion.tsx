import { JSX } from 'react';

import { AccordionComponent, AccordionProps } from './Accordion.types';
import { AccordionContext } from './AccordionContext';
import { AccordionItem } from './AccordionItem/AccordionItem';
import { defaultAccordionSize } from './AccordionItem/defaults';

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
  color = 'white',
  size = defaultAccordionSize,
  iconPosition = 'right',
  children,
}: AccordionProps): JSX.Element => {
  return (
    <AccordionContext.Provider value={{ size, iconPosition }}>
      <div
        ref={ref}
        className={`${styles.accordion} ${className}`.trim()}
        lang={lang}
        id={id}
        data-testid={dataTestId}
        data-color={color}
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
