import { useState, ChangeEvent, JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import {
  getAutoCompletePropDescription,
  getHelpTitleHelpSvgDefault,
} from '@skatteetaten/ds-core-utils';
import { TextArea } from '@skatteetaten/ds-forms';

import {
  category,
  helpSvgPathDescription,
  htmlEventDescription,
} from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: TextArea,
  title: 'Komponenter/TextArea',
  argTypes: {
    // Props
    autosize: { table: { category: category.props } },
    classNames: { control: false, table: { category: category.props } },
    defaultValue: { control: 'text', table: { category: category.props } },
    characterLimit: { table: { category: category.props } },
    description: { control: 'text', table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    hasSpacing: { table: { category: category.props } },
    helpSvgPath: { ...helpSvgPathDescription },
    helpText: { control: 'text', table: { category: category.props } },
    hideLabel: { table: { category: category.props } },
    label: { table: { category: category.props } },
    titleHelpSvg: {
      table: {
        category: category.props,
        defaultValue: { summary: getHelpTitleHelpSvgDefault() },
      },
    },
    // HTML
    autoComplete: {
      control: 'text',
      table: { category: category.htmlAttribute, type: { summary: 'string' } },
      description: getAutoCompletePropDescription(),
    },
    autoCorrect: {
      table: { category: category.htmlAttribute, type: { summary: 'string' } },
    },
    disabled: { table: { category: category.htmlAttribute } },
    form: { table: { category: category.htmlAttribute } },
    maxLength: { table: { category: category.htmlAttribute } },
    minLength: { table: { category: category.htmlAttribute } },
    name: { table: { category: category.htmlAttribute } },
    placeholder: { table: { category: category.htmlAttribute } },
    readOnly: { table: { category: category.htmlAttribute } },
    required: { table: { category: category.htmlAttribute } },
    rows: { table: { category: category.htmlAttribute } },
    spellCheck: {
      control: 'text',
      table: { category: category.htmlAttribute },
    },
    value: { control: 'text', table: { category: category.htmlAttribute } },
    // Aria
    ariaDescribedBy: { table: { category: category.aria } },
    // Events
    onBlur: { ...htmlEventDescription },
    onChange: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
    onHelpToggle: { ...htmlEventDescription },
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
