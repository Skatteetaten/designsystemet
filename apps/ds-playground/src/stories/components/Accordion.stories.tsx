import { JSX } from 'react';

import {
  Accordion,
  AccordionItem,
  getAccordionBackgroundColorDefault,
  getAccordionIconPositionDefault,
} from '@skatteetaten/ds-collections';
import { PersonSVGpath } from '@skatteetaten/ds-icons';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const defaultContent =
  'Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer. Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt.';

const meta = {
  component: Accordion,
  title: 'Komponenter/Accordion/Accordion',
  argTypes: {
    // Props
    color: {
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getAccordionBackgroundColorDefault() },
      },
    },
    iconPosition: {
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getAccordionIconPositionDefault() },
      },
    },
    children: { control: 'text', table: { category: category.props } },
    onClick: { table: { category: category.event } },
  },
  args: {
    iconPosition: 'right',
    children: [
      <AccordionItem key={'a1'} title={'Tittel'} subtitle={'Underittel her'}>
        {defaultContent}
      </AccordionItem>,
      <AccordionItem
        key={'a2'}
        title={'Dette er en lang tittel som går over flere'}
      >
        {defaultContent}
      </AccordionItem>,
      <AccordionItem key={'a3'} title={'Tredje Tittel'} svgPath={PersonSVGpath}>
        {defaultContent}
      </AccordionItem>,
    ],
  },

  parameters: {
    version: getVersion('ds-status'),
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
      <Accordion>
        <AccordionItem title={'Tittel brytes\r\n her'} subtitle={'Undertittel'}>
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          title={'Dette er en lang tittel som går over flere linjer'}
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem title={'Tittel med custom ikon'} svgPath={PersonSVGpath}>
          {defaultContent}
        </AccordionItem>
      </Accordion>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
