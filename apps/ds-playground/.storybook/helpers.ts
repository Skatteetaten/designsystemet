export const category = {
  baseProps: 'BaseProps',
  props: 'Props',
  htmlAttribute: 'HTML-attribute',
  aria: 'Aria-attribute',
  event: 'Event',
};

export type PartialArgTypes = {
  table?: {
    category: string;
  };
  control?: boolean;
};

export interface StoryPropsPartialInterface {
  [key: string]: PartialArgTypes;
}

export const htmlEventDescription: PartialArgTypes = {
  table: { category: category.event },
  control: false,
};
