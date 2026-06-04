import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { getHelpTitleHelpSvgDefault } from '@skatteetaten/ds-core-utils';
import { Fieldset, DatePicker } from '@skatteetaten/ds-forms';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Fieldset,
  title: 'Komponenter/Fieldset',
  argTypes: {
    // Props
    classNames: { control: false, table: { category: category.props } },
    children: { control: 'text', table: { category: category.props } },
    description: { control: 'text', table: { category: category.props } },
    hasSpacing: { table: { category: category.props } },
    helpText: { control: 'text', table: { category: category.props } },
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
    titleHelpSvg: {
      table: {
        category: category.props,
        defaultValue: { summary: getHelpTitleHelpSvgDefault() },
      },
    },
    // HTML
    disabled: { table: { category: category.htmlAttribute } },
    form: { table: { category: category.htmlAttribute } },
    // Aria
    ariaDescribedBy: { table: { category: category.aria } },
    // Events
    onHelpToggle: { ...htmlEventDescription },
  },
  args: {
    legend: 'Hvilken periode trenger du bekreftelse for?',
    children: 'Innhold',
  },
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
      <Fieldset
        legend={'Hvilken periode trenger du bekreftelse for?'}
        helpText={'Legg inn hvilken periode du trenger bekreftelse for.'}
      >
        <DatePicker
          className={'inlineBlock exampleSpacing'}
          label={'Fra dato (dd.mm.åååå)'}
        />
        <DatePicker className={'inlineBlock'} label={'Til dato (dd.mm.åååå)'} />
      </Fieldset>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
