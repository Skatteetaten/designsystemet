import { useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Checkbox } from '@skatteetaten/ds-forms';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
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
  parameters: {
    version: getVersion('ds-forms'),
  },
} as ComponentMeta<typeof Checkbox>;

const TemplateDefault: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

const TemplateExample: ComponentStory<typeof Checkbox> = () => {
  const [state, setState] = useState({
    hasError: false,
  });
  return (
    <>
      <Checkbox
        className={'exampleSpacing'}
        errorMessage={'Du må lese og forstå innholdet for å gå videre.'}
        hasError={state.hasError}
        required
      >
        {'Jeg har lest og forstått innholdet'}
      </Checkbox>
      <Button onClick={(): void => setState({ hasError: true })}>
        {'Send'}
      </Button>
    </>
  );
};

export const CheckboxDefaultControlled = TemplateDefault.bind({});
CheckboxDefaultControlled.storyName = 'Default Controlled';
CheckboxDefaultControlled.argTypes = {
  defaultChecked: { control: { disable: true } },
};
CheckboxDefaultControlled.args = {
  children: 'Checkbox',
  checked: false,
  defaultChecked: undefined,
  name: undefined,
};

export const CheckboxDefaultUncontrolled = TemplateDefault.bind({});
CheckboxDefaultUncontrolled.storyName = 'Default Uncontrolled';
CheckboxDefaultUncontrolled.argTypes = {
  checked: { control: { disable: true } },
};
CheckboxDefaultUncontrolled.args = {
  children: 'Checkbox',
  checked: undefined,
  defaultChecked: false,
};

export const CheckboxExample = TemplateExample.bind({});
CheckboxExample.storyName = 'Example';
CheckboxExample.parameters = {
  controls: { disabled: true },
};
