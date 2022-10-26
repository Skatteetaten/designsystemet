import { AnyFramework, BaseAnnotations } from '@storybook/csf';
import { Meta, ArgTypes } from '@storybook/react';
export const category = {
  baseProps: 'BaseProps',
  props: 'Props',
  htmlAttribute: 'HTML-attribute',
  aria: 'Aria-attribute',
  event: 'Event',
};

export type DefaultArgTypes = {
  table?: {
    category: string;
  };
  control?: boolean;
};

export const htmlEventDescription: DefaultArgTypes = {
  table: { category: category.event },
  control: false,
};

interface ReturnedInterface {
  [key: string]: string | undefined;
}

export const getArgsWithCategory = <T extends DefaultArgTypes>(args: {
  categories: Array<string>;
  storyProps: Meta<T>;
}): ReturnedInterface => {
  const typedStoryProps = args.storyProps as BaseAnnotations<AnyFramework, T>;

  const entries = typedStoryProps['argTypes']
    ? Object.entries(typedStoryProps['argTypes'])
    : [];

  const argsObj: ReturnedInterface = {};
  args.categories.forEach((category) => {
    const foundcategory = entries.find(([, value]) => {
      if ((value as Partial<ArgTypes<T>>).table) {
        return value?.table.category === category;
      } else {
        return false;
      }
    });
    if (foundcategory) {
      argsObj[foundcategory[0]] = undefined;
    }
  });
  return argsObj;
};
