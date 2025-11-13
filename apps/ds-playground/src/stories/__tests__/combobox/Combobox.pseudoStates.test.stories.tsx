import { JSX, useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { Combobox } from '@skatteetaten/ds-forms';

import { defaultArgs } from './utils/combobox.test.utils';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ComboboxOptions } from '../../../../../../libs/ds-forms/src/Combobox/ComboboxOptions';

const meta = {
  component: Combobox,
  title: 'Tester/Combobox/PseudoStates',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    classNames: { table: { disable: true } },
    label: { table: { disable: true } },
    options: { table: { disable: true } },
    placeholder: { table: { disable: true } },
    variant: { table: { disable: true } },
    multiple: { table: { disable: true } },
    value: { table: { disable: true } },
    description: { table: { disable: true } },
    errorMessage: { table: { disable: true } },
    helpText: { table: { disable: true } },
    hasSpacing: { table: { disable: true } },
    hideLabel: { table: { disable: true } },
    minSearchLength: { table: { disable: true } },
    isLoading: { table: { disable: true } },
    spinnerLabel: { table: { disable: true } },
    helpSvgPath: { table: { disable: true } },
    maxSelected: { table: { disable: true } },
    spinnerProps: { table: { disable: true } },
    titleHelpSvg: { table: { disable: true } },
    // HTML attributes
    accessKey: { table: { disable: true } },
    form: { table: { disable: true } },
    name: { table: { disable: true } },
    disabled: { table: { disable: true } },
    required: { table: { disable: true } },
    // Events
    onBlur: { table: { disable: true } },
    onFocus: { table: { disable: true } },
    onSelectionChange: { table: { disable: true } },
    onInputChange: { table: { disable: true } },
    onHelpToggle: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    chromatic: { disableSnapshot: false },
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Chevron = {
  name: 'Chevron',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active'],
    },
  },
} satisfies Story;

export const CancelButton = {
  name: 'Cancel button',
  render: (args): JSX.Element => <Combobox {...args} value={'Norge'} />,
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active'],
    },
  },
} satisfies Story;

export const Option = {
  render: (): JSX.Element => {
    const customListRef = useRef<HTMLDivElement | null>(null);
    return (
      <ComboboxOptions
        className={'positionRelative'}
        displayOptions={[
          { label: 'Norge', value: 'Norge' },
          { label: 'Sverige', value: 'Sverige' },
          { label: 'Danmark', value: 'Danmark' },
        ]}
        searchTerm={''}
        minSearchLength={0}
        selectedValues={[]}
        comboboxId={''}
        listId={''}
        focusedIndex={0}
        handleButtonFocus={(): void => console.log('Handle button focus')}
        handleOptionSelect={(): void => console.log('Handle option select')}
        customListRef={customListRef}
        multiple
        isOpen
      />
    );
  },
  parameters: {
    a11y: {
      test: 'off',
    },
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible'],
    },
  },
};
