import { ArgTypes } from '@storybook/react';

export const category = {
  baseProps: 'BaseProps',
  props: 'Props',
  htmlAttribute: 'HTML-attribute',
  aria: 'Aria-attribute',
  event: 'Event',
};

export const htmlEventDescription: Partial<ArgTypes> = {
  table: { category: category.event },
  control: { disable: true },
};
