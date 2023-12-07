import { useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Checkbox } from '@skatteetaten/ds-forms';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: Checkbox,
  title: 'Komponenter/Checkbox',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    defaultChecked: {
      table: {
        category: category.props,
      },
    },
    description: { table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    hasError: {
      table: {
        category: category.props,
      },
    },
    hideLabel: {
      table: {
        category: category.props,
      },
    },
    showRequiredMark: {
      table: {
        category: category.props,
      },
    },
    // HTML
    checked: {
      table: {
        category: category.htmlAttribute,
      },
    },
    disabled: {
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
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof Checkbox>;

export const Preview: StoryObj<typeof Checkbox> = {
  args: {
    children: 'Checkbox',
  },
};

export const Example: StoryFn<typeof Checkbox> = (_args) => {
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

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};

export const ExampleSource: StoryFn<typeof Checkbox> = () => {
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
// Forhindrer at komponent dukker opp i menyen
ExampleSource.tags = ['isHidden'];
ExampleSource.parameters = {
  controls: {
    exclude: /.*/,
  },
};
