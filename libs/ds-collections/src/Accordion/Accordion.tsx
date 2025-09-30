import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { AccordionComponent, AccordionProps } from './Accordion.types';
import {
  getAccordionBackgroundColorDefault,
  getAccordionIconPositionDefault,
  getAccordionSizeDefault,
} from './defaults';
import { AccordionContext } from '../AccordionContext/AccordionContext';
import {
  AccordionItem,
  getAccordionItemKeepMountedDefault,
} from '../AccordionItem/AccordionItem';

import styles from './Accordion.module.scss';

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

export {
  getAccordionIconPositionDefault,
  getAccordionBackgroundColorDefault,
  getAccordionSizeDefault,
  getAccordionItemKeepMountedDefault,
};
