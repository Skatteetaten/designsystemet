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

interface ReturnedInterface {
  [key: string]: string | undefined;
}

export const getArgsWithCategory = (args: {
  categories: Array<string>;
  storyProps: StoryPropsPartialInterface;
}): ReturnedInterface => {
  const entries = args.storyProps['argTypes']
    ? Object.entries(args.storyProps['argTypes'])
    : [];

  const argsObj: ReturnedInterface = {};
  args.categories.forEach((category) => {
    const foundcategory = entries.find(([, prop]) => {
      return (prop as PartialArgTypes)?.table?.category === category;
    });
    if (foundcategory) {
      argsObj[foundcategory[0]] = undefined;
    }
  });
  return argsObj;
};
