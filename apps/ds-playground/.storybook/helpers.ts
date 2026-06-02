import { ArgTypes } from '@storybook/react-vite';
import { SystemSVGPaths } from '../src/stories/utils/icon.systems';

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

export const svgPathDescription: Partial<ArgTypes> = {
  options: Object.keys(SystemSVGPaths),
  mapping: SystemSVGPaths,
  table: { category: category.props },
};

export const includeStylesTransform =
  (stylesAsString: string) =>
  (code: string): string => {
    return `/* CSS */ \n ${stylesAsString} \n /* TSX */ \n ${code}`;
  };
