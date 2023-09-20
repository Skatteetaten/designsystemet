import { Fieldset, TextField } from '@skatteetaten/ds-forms';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

const meta = {
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
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof Fieldset>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateExample: StoryFn<typeof Fieldset> = (args) => (
  <Fieldset {...args} />
);

export const FieldsetDefault = {
  name: 'Default',
  args: {
    legend: 'Ledetekst',
    children: <div>{'Innhold'}</div>,
  },
} satisfies Story;

export const FieldsetExample = {
  render: TemplateExample,
  name: 'Example',
  args: {
    legend: 'Hvilken periode trenger du bekreftelse for?',
    helpText: 'Legg inn hvilken periode du trenger bekreftelse for.',
    children: (
      <>
        {/* TODO Erstatt med Datepicker */}
        <TextField
          className={'inlineBlock exampleSpacing'}
          label={'Fra dato (dd.mm.åååå)'}
        />
        <TextField className={'inlineBlock'} label={'Til dato (dd.mm.åååå)'} />
      </>
    ),
  },
  parameters: {
    controls: { disable: true },
  },
} satisfies Story;
