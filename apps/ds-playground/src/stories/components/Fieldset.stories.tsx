import { Fieldset, TextField } from '@skatteetaten/ds-forms';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

export default {
  component: Fieldset,
  title: 'Komponenter/Fieldset',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    description: { table: { category: category.props } },
    hasSpacing: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    helpText: { table: { category: category.props } },
    helpSvgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    hideLegend: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    legend: { table: { category: category.props } },
    showRequiredMark: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    titleHelpSvg: { table: { category: category.props } },
    // HTML
    disabled: { table: { category: category.htmlAttribute } },
  },
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof Fieldset>;

export const Preview: StoryObj<typeof Fieldset> = {
  args: {
    legend: 'Hvilken periode trenger du bekreftelse for?',
    children: [
      <TextField
        key={'textfield1'}
        className={'inlineBlock exampleSpacing'}
        label={'Fra dato (dd.mm.åååå)'}
      />,
      <TextField
        key={'textfield2'}
        className={'inlineBlock'}
        label={'Til dato (dd.mm.åååå)'}
      />,
    ],
  },
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
};

export const Example: StoryFn<typeof Fieldset> = () => (
  <Fieldset
    legend={'Hvilken periode trenger du bekreftelse for?'}
    helpText={'Legg inn hvilken periode du trenger bekreftelse for.'}
  >
    <TextField
      className={'inlineBlock exampleSpacing'}
      label={'Fra dato (dd.mm.åååå)'}
    />
    <TextField className={'inlineBlock'} label={'Til dato (dd.mm.åååå)'} />
  </Fieldset>
);

//TODO Erstatt TextField med Datepicker i Example
