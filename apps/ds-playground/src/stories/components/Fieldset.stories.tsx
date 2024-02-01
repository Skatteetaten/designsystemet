import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Fieldset, TextField } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Fieldset,
  title: 'Komponenter/Fieldset',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    description: { table: { category: category.props } },
    hasSpacing: { table: { category: category.props } },
    helpText: { table: { category: category.props } },
    helpSvgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: {
        category: category.props,
        defaultValue: { summary: 'HelpSimpleSVGpath' },
      },
    },
    hideLegend: { table: { category: category.props } },
    legend: { control: 'text', table: { category: category.props } },
    showRequiredMark: { table: { category: category.props } },
    titleHelpSvg: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('Shared:shared.Help') },
      },
    },
    // HTML
    disabled: { table: { category: category.htmlAttribute } },
  },
  args: {
    legend: 'Hvilken periode trenger du bekreftelse for?',
    children: <Paragraph>{'Innhold'}</Paragraph>,
  },
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};

// TODO Erstatt TextField med Datepicker i Example
export const Examples: Story = {
  render: (_args) => {
    return (
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
  },
};
Examples.parameters = exampleParameters;
