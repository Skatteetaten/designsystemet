import { ArgTypes } from '@storybook/react';

export const category = {
  baseProps: 'BaseProps',
  props: 'Props',
  htmlAttribute: 'HTML-attributes',
  aria: 'Aria-attributes',
  event: 'Events',
};

export const htmlEventDescription: Partial<ArgTypes> = {
  table: { category: category.event },
  control: { disable: true },
};
