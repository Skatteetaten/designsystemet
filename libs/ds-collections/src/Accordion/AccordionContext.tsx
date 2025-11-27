import { createContext } from 'react';

import { AccordionContextProps } from '../Accordion/Accordion.types';

export const AccordionContext = createContext<AccordionContextProps>(
  {} as AccordionContextProps
);
