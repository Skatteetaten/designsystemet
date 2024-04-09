import { JSX } from 'react';

import { Accordion, AccordionItem } from '@skatteetaten/ds-collections';
import { PersonSVGpath } from '@skatteetaten/ds-icons';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const defaultContent =
  'Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer. Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt.';

const meta = {
  component: Accordion,
  title: 'Komponenter/Accordion',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
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
      <Accordion color={'ochre'} iconPosition={'right'}>
        <AccordionItem title={'Tittel'}>{defaultContent}</AccordionItem>
      </Accordion>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
