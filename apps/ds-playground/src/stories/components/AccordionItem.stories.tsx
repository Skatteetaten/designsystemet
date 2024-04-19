import { AccordionItem } from '@skatteetaten/ds-collections';
import { headingAsArr } from '@skatteetaten/ds-core-utils';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

const defaultContent =
  'Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer. Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt.';

const meta = {
  component: AccordionItem,
  title: 'Komponenter/Accordion/Item',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
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
    isExpanded: {
      table: {
        category: category.props,
      },
    },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    titleAs: {
      options: headingAsArr,
      control: 'inline-radio',
      table: { category: category.props },
    },
    onClick: {
      table: { category: category.event },
    },
  },
  args: {
    children: defaultContent,
    title: 'Meg selv',
  },

  parameters: {
    version: getVersion('ds-status'),
  },
} satisfies Meta<typeof AccordionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
