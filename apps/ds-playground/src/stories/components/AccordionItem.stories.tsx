import { Meta, StoryObj } from '@storybook/react-vite';

import {
  Accordion,
  getAccordionItemKeepMountedDefault,
} from '@skatteetaten/ds-collections';
import { headingAsArr } from '@skatteetaten/ds-core-utils';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';

const defaultContent =
  'Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer. Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt.';

const meta = {
  component: Accordion.Item,
  title: 'Komponenter/Accordion/Item',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    classNames: {
      control: { disable: true },
      table: { category: category.props },
    },
    title: {
      control: 'text',
      table: {
        category: category.props,
      },
    },
    subtitle: {
      control: 'text',
      table: {
        category: category.props,
      },
    },
    isDefaultExpanded: {
      table: {
        category: category.props,
      },
    },
    isExpanded: {
      table: {
        category: category.props,
      },
    },
    keepMounted: {
      table: {
        category: category.props,
        defaultValue: {
          summary: getAccordionItemKeepMountedDefault().toString(),
        },
      },
    },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    titleAs: {
      options: ['div', ...headingAsArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: 'div' },
        type: { summary: ['div', ...headingAsArr].toString() },
      },
    },
    onClick: {
      table: { category: category.event },
    },
  },
  args: {
    children: defaultContent,
    title: 'Meg selv',
    subtitle: 'Skattekort, frikort, forskuddsskatt, skattemelding',
  },
} satisfies Meta<typeof Accordion.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
