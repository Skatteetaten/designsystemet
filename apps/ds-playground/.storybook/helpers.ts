import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

export const category = {
  props: 'Props',
  htmlAttribute: 'HTML-attribute',
  event: 'Event',
  aria: 'Aria-attribute',
};

export const storyDefault = {
  className: {
    control: 'select',
    options: ['', 'dummyClassname'],
    description: 'Verdien appended til designsystemets stilsett for komponent',
    table: {
      category: category.htmlAttribute,
      defaultValue: { summary: getCommonClassNameDefault() },
    },
  },
  id: { table: { category: category.htmlAttribute } },
  ref: { table: { category: category.htmlAttribute } },
  dataAttr: { table: { category: category.htmlAttribute } },
  key: { table: { category: category.props } },
  onEvent: { table: { category: category.event }, control: false },
};
