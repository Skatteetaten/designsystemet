export const category = {
  baseProps: 'BaseProps',
  props: 'Props',
  htmlAttribute: 'HTML-attribute',
  aria: 'Aria-attribute',
  event: 'Event',
};
export const htmlEventDescription = {
  table: { category: category.event },
  control: false,
};

/* export const getArgsWithCategory = <T>({
  storyProps,
  categories,
}: {
  storyProps: any;
  categories: string[];
}): { [key: string]: undefined } => {
  const argsObj: { [key: string]: undefined } = {};
  categories.forEach((e) => {
    const foundcategory = Object.entries(storyProps.argTypes).find(
      ([, value]) => {
        return value.table.category === e;
      }
    );
    if (foundcategory) argsObj[foundcategory[0]] = undefined;
  });
  return argsObj;
};
 */

export const getArgsWithCategory = (): { [key: string]: undefined } => {
  return { ettellerannet: undefined };
};
