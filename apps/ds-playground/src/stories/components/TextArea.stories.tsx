import { useState, ChangeEvent, JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import {
  dsI18n,
  getCommonAutoCompleteDefault,
  getAutoCompletePropDescription,
} from '@skatteetaten/ds-core-utils';
import { TextArea } from '@skatteetaten/ds-forms';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: TextArea,
  title: 'Komponenter/TextArea',
  argTypes: {
    // Props
    autosize: { table: { category: category.props } },
    classNames: {
      control: false,
      table: { category: category.props },
    },
    defaultValue: {
      control: 'text',
      table: { category: category.props },
    },
    characterLimit: { table: { category: category.props } },
    description: { table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    helpSvgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: {
        category: category.props,
        defaultValue: { summary: 'HelpSimpleSVGpath' },
      },
    },
    helpText: { control: 'text', table: { category: category.props } },
    hideLabel: { table: { category: category.props } },
    label: { table: { category: category.props } },
    showRequiredMark: { table: { category: category.props } },
    titleHelpSvg: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('Shared:shared.Help') },
      },
    },
    // HTML
    autoComplete: {
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: getCommonAutoCompleteDefault() },
        type: { summary: 'string' },
      },
      type: 'string',
      description: getAutoCompletePropDescription(),
    },
    autoCorrect: {
      table: {
        category: category.htmlAttribute,
        type: { summary: 'string' },
      },
      type: 'string',
    },
    disabled: {
      control: 'boolean',
      table: { category: category.htmlAttribute },
    },
    form: { table: { category: category.htmlAttribute } },
    maxLength: { table: { category: category.htmlAttribute } },
    minLength: { table: { category: category.htmlAttribute } },
    name: { table: { category: category.htmlAttribute } },
    placeholder: { table: { category: category.htmlAttribute } },
    readOnly: { table: { category: category.htmlAttribute } },
    required: {
      control: 'boolean',
      table: { category: category.htmlAttribute },
    },
    rows: { table: { category: category.htmlAttribute } },
    spellCheck: { table: { category: category.htmlAttribute } },
    value: {
      control: 'text',
      table: { category: category.htmlAttribute },
    },
    // Events
    onBlur: { ...htmlEventDescription },
    onChange: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
    onHelpToggle: { table: { category: category.event } },
  },
  args: {
    label: 'Andre opplysninger',
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const [infoInput, setInfoInput] = useState('');

    return (
      <form noValidate>
        <TextArea
          label={'Andre opplysninger'}
          className={'textField300'}
          rows={4}
          value={infoInput}
          autosize
          onChange={(e: ChangeEvent<HTMLTextAreaElement>): void =>
            setInfoInput(e.target.value)
          }
        />
      </form>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
