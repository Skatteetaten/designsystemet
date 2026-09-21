import { JSX } from 'react';

import { AccordionComponent, AccordionProps } from './Accordion.types';
import { AccordionContext } from './AccordionContext';
import { AccordionItem } from './AccordionItem/AccordionItem';
import { defaultAccordionSize } from './AccordionItem/defaults';

import styles from './Accordion.module.scss';

/**
 * Accordion
 *
 * @see [Dokumentasjon](https://skatteetaten.github.io/designsystemet/byggeklosser/komponenter/accordion)
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
