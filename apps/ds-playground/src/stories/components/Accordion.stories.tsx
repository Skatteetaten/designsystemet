import { JSX } from 'react';

import {
  Accordion,
  AccordionItem,
  getAccordionBackgroundColorDefault,
  getAccordionIconPositionDefault,
  getAccordionSizeDefault,
} from '@skatteetaten/ds-collections';
import { PersonSVGpath, SkattetrekkSVGpath } from '@skatteetaten/ds-icons';
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
    children: { control: false, table: { category: category.props } },
    color: {
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getAccordionBackgroundColorDefault() },
      },
    },
    size: {
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getAccordionSizeDefault() },
      },
    },
    iconPosition: {
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getAccordionIconPositionDefault() },
      },
    },
  },
  args: {
    iconPosition: 'right',
    children: [
      <AccordionItem key={'a1'} title={'Meg selv'} svgPath={PersonSVGpath}>
        {
          'Du må betale restskatten selv om du har endret etter fristen for skattemeldingen eller klaget. Hvis du ikke betaler restskatten i tide, løper det forsinkelsesrenter ved forfall frem til du betaler.'
        }
      </AccordionItem>,
      <AccordionItem
        key={'a2'}
        title={`Tittel kan også\nbrytes over flere linjer.`}
      >
        {
          'Du må betale restskatten selv om du har endret etter fristen for skattemeldingen eller klaget. Hvis du ikke betaler restskatten i tide, løper det forsinkelsesrenter ved forfall frem til du betaler.'
        }
      </AccordionItem>,
      <AccordionItem
        key={'a3'}
        title={'Skatt'}
        subtitle={
          'Skattekort, frikort, forskuddsskatt, skattemelding (selvangivelse)'
        }
        svgPath={SkattetrekkSVGpath}
      >
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
        <AccordionItem title={'Tittel'} subtitle={'Undertittel'}>
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          title={'Dette er en lang tittel som\nbrekkes på ny linje manuelt'}
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
