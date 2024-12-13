import { useState, JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@skatteetaten/ds-buttons';
import { Checkbox } from '@skatteetaten/ds-forms';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Checkbox,
  title: 'Komponenter/Checkbox',
  argTypes: {
    // Props
    classNames: { table: { category: category.props } },
    children: { table: { category: category.props } },
    defaultChecked: { table: { category: category.props } },
    description: { table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    hideLabel: { table: { category: category.props } },
    showRequiredMark: { table: { category: category.props } },
    // HTML
    checked: { table: { category: category.htmlAttribute } },
    disabled: { table: { category: category.htmlAttribute } },
    form: { table: { category: category.htmlAttribute } },
    name: { table: { category: category.htmlAttribute } },
    required: {
      control: 'boolean',
      table: { category: category.htmlAttribute },
    },
    value: { table: { category: category.htmlAttribute } },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
    // Events
    onBlur: { ...htmlEventDescription },
    onChange: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
  },
  args: {
    children: 'Jeg har lest og forstått innholdet',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (args): JSX.Element => {
    const [checked, setChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    return (
      <>
        <Checkbox
          className={'exampleSpacing'}
          errorMessage={errorMessage}
          checked={checked}
          required
          onChange={(): void => {
            setChecked(!checked);
            setErrorMessage('');
          }}
          onBlur={(event): void => {
            args?.onBlur && args.onBlur(event);
          }}
          onFocus={(event): void => {
            args?.onFocus && args.onFocus(event);
          }}
        >
          {'Jeg har lest og forstått innholdet'}
        </Checkbox>
        <Button
          onClick={(): void => {
            if (!checked) {
              setErrorMessage(
                'Du må lese og forstå innholdet for å gå videre.'
              );
            }
          }}
        >
          {'Send'}
        </Button>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
