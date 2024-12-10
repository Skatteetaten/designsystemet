import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import {
  Accordion,
  getAccordionBackgroundColorDefault,
  getAccordionIconPositionDefault,
  getAccordionSizeDefault,
} from '@skatteetaten/ds-collections';
import { PersonSVGpath, SkattetrekkSVGpath } from '@skatteetaten/ds-icons';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

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
      <Accordion.Item key={'a1'} title={'Meg selv'}>
        {
          'Du må betale restskatten selv om du har endret etter fristen for skattemeldingen eller klaget. Hvis du ikke betaler restskatten i tide, løper det forsinkelsesrenter ved forfall frem til du betaler.'
        }
      </Accordion.Item>,
      <Accordion.Item key={'a3'} title={'Skatt'}>
        {defaultContent}
      </Accordion.Item>,
    ],
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
      <Accordion color={'graphite'} size={'small'}>
        <Accordion.Item
          key={'a1'}
          title={'Meg selv'}
          subtitle={
            'Skattekort, frikort, forskuddsskatt, skatte-melding (selvangivelse)'
          }
          svgPath={PersonSVGpath}
        >
          {
            'Du må betale restskatten selv om du har endret etter fristen for skattemeldingen eller klaget. Hvis du ikke betaler restskatten i tide, løper det forsinkelsesrenter ved forfall frem til du betaler.'
          }
        </Accordion.Item>
        <Accordion.Item
          key={'a3'}
          title={'Skatt'}
          subtitle={
            'Skattekort, frikort, forskuddsskatt, skattemelding (selvangivelse)'
          }
          svgPath={SkattetrekkSVGpath}
        >
          {defaultContent}
        </Accordion.Item>
      </Accordion>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
