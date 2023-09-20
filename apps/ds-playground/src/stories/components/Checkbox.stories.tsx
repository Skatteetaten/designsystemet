import { useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Checkbox } from '@skatteetaten/ds-forms';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Checkbox,
  title: 'Komponenter/Checkbox',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    description: { table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    hasError: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    hideLabel: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    showRequiredMark: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    // HTML
    checked: {
      control: 'boolean',
      table: {
        category: category.htmlAttribute,
      },
    },
    defaultChecked: {
      control: 'boolean',
      table: {
        category: category.htmlAttribute,
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        category: category.htmlAttribute,
      },
    },
    name: {
      table: {
        category: category.htmlAttribute,
      },
    },
    required: {
      control: 'boolean',
      table: {
        category: category.htmlAttribute,
      },
    },
    value: { table: { category: category.htmlAttribute } },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
    // Events
    onChange: { ...htmlEventDescription },
  },
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateExample: StoryFn<typeof Checkbox> = () => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);
  return (
    <>
      <Checkbox
        className={'exampleSpacing'}
        errorMessage={'Du må lese og forstå innholdet for å gå videre.'}
        checked={checked}
        hasError={error}
        required
        onChange={(): void => setChecked(!checked)}
      >
        {'Jeg har lest og forstått innholdet'}
      </Checkbox>
      <Button onClick={(): void => setError(!checked)}>{'Send'}</Button>
    </>
  );
};

export const CheckboxDefaultControlled = {
  name: 'Default Controlled',
  argTypes: {
    defaultChecked: { control: { disable: true } },
  },
  args: {
    children: 'Checkbox',
    checked: false,
    defaultChecked: undefined,
    name: undefined,
  },
} satisfies Story;

export const CheckboxDefaultUncontrolled = {
  name: 'Default Uncontrolled',
  argTypes: {
    checked: { control: { disable: true } },
  },
  args: {
    children: 'Checkbox',
    checked: undefined,
    defaultChecked: false,
  },
} satisfies Story;

export const CheckboxExample = {
  render: TemplateExample,
  name: 'Example',
  args: {
    children: 'dummy',
  },
  parameters: {
    controls: { disable: true },
  },
} satisfies Story;
