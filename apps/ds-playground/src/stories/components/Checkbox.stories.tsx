import { useState, JSX } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Checkbox } from '@skatteetaten/ds-forms';
import { Meta, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Checkbox,
  title: 'Komponenter/Checkbox',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    defaultChecked: { table: { category: category.props } },
    description: { table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    hasError: { table: { category: category.props } },
    hideLabel: { table: { category: category.props } },
    showRequiredMark: { table: { category: category.props } },
    // HTML
    checked: { table: { category: category.htmlAttribute } },
    disabled: { table: { category: category.htmlAttribute } },
    name: { table: { category: category.htmlAttribute } },
    required: {
      control: 'boolean',
      table: { category: category.htmlAttribute },
    },
    value: { table: { category: category.htmlAttribute } },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
    // Events
    onChange: { ...htmlEventDescription },
  },
  args: {
    children: 'Jeg har lest og forstått innholdet',
  },
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
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
  },
} satisfies Story;
Examples.parameters = exampleParameters;
