import { JSX } from 'react';

import type { Meta, StoryFn, StoryObj } from '@storybook/react/*';

import { Combobox } from '@skatteetaten/ds-forms';

import { comboboxStoryOptions } from './combobox.stories.utils';
import { ComboboxFormExample } from './ComboboxFormExample';
import comboboxFormExampleSource from './ComboboxFormExample.tsx?raw';
import { ComboboxLoadingStatesExample } from './ComboboxLoadingStatesExample';
import comboboxLoadingStatesExampleSource from './ComboboxLoadingStatesExample.tsx?raw';
import { ComboboxMaxHeightExample } from './ComboboxMaxHeightExample';
import comboboxMaxHeightExampleSource from './ComboboxMaxHeightExample.tsx?raw';
import { ComboboxMaxSelectedExample } from './ComboboxMaxSelectedExample';
import comboboxMaxSelectedExampleSource from './ComboboxMaxSelectedExample.tsx?raw';
import {
  ComboboxPerformanceExample,
  ComboboxPerformanceMultipleExample,
} from './ComboboxPerformanceExample';
import comboboxPerformanceExampleSource from './ComboboxPerformanceExample.tsx?raw';
import { ComboboxTypedOptionsExample } from './ComboboxTypedOptionsExample';
import comboboxTypedOptionsExampleSource from './ComboboxTypedOptionsExample.tsx?raw';
import { ComboboxValidationExample } from './ComboboxValidationExample';
import comboboxValidationExampleSource from './ComboboxValidationExample.tsx?raw';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { getHasSpacingDefault } from '../../../../../../libs/ds-core-utils/src/defaults';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { getComboboxPlaceholderDefault } from '../../../../../../libs/ds-forms/src/Combobox/defaults';
import { category } from '../../../../.storybook/helpers';

const meta = {
  title: 'Komponenter/Combobox',
  component: Combobox,
  decorators: [
    (Story): JSX.Element => (
      <div className={'width400'}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      codePanel: true,
      source: { type: 'auto' },
    },
  },
  argTypes: {
    // Props
    label: {
      control: { type: 'text' },
      table: { category: category.props },
    },
    placeholder: {
      control: { type: 'text' },
      table: {
        category: category.props,
        defaultValue: { summary: getComboboxPlaceholderDefault() },
      },
    },
    options: {
      control: false,

      table: { category: category.props },
    },
    variant: {
      control: { type: 'select' },
      options: ['medium', 'large'],
      table: { category: category.props, defaultValue: { summary: 'medium' } },
    },
    hasSpacing: {
      control: { type: 'boolean' },
      table: {
        category: category.props,
        defaultValue: { summary: getHasSpacingDefault().toString() },
      },
    },
    hideLabel: {
      control: { type: 'boolean' },
      table: { category: category.props },
    },
    multiple: {
      control: { type: 'boolean' },
      table: {
        category: category.props,
      },
    },
    minSearchLength: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
      table: {
        category: category.props,
        defaultValue: {},
      },
    },
    isLoading: {
      control: { type: 'boolean' },
      table: {
        category: category.props,
      },
    },
    loadingMessage: {
      control: { type: 'text' },
      table: { category: category.props },
    },
    description: {
      control: { type: 'text' },
      table: { category: category.props },
    },
    helpText: {
      control: { type: 'text' },
      table: { category: category.props },
    },
    errorMessage: {
      control: { type: 'text' },
      table: { category: category.props },
    },

    // HTML-attributes
    name: {
      control: { type: 'text' },
      table: { category: category.htmlAttribute },
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        category: category.htmlAttribute,
      },
    },
    required: {
      control: { type: 'boolean' },
      table: {
        category: category.htmlAttribute,
      },
    },

    // Events
    onSelectionChange: {
      action: 'selection-changed',
      control: false,
      table: { category: category.event },
    },
    onInputChange: {
      action: 'input-changed',
      control: false,
      table: { category: category.event },
    },
    onHelpToggle: {
      action: 'help-toggled',
      control: false,
      table: { category: category.event },
    },
    value: {
      table: { category: category.props },
    },
    classNames: {
      table: { category: category.props },
    },
    helpSvgPath: {
      table: { category: category.props },
    },
    titleHelpSvg: {
      table: { category: category.props },
    },
    spinnerProps: {
      table: { category: category.props },
    },
  },
  args: {
    label: 'Velg grønnsak',
    hasSpacing: false,
    variant: 'medium',
    options: comboboxStoryOptions,
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof Combobox>;
type StoryFunction = StoryFn<typeof meta>;

export const Primary: Story = {
  name: 'Enkelt valg',
  args: {
    name: 'vegetable',
    options: [
      { label: 'Agurk', value: 'agurk' },
      { label: 'Tomat', value: 'tomat' },
      { label: 'Mais', value: 'mais' },
      { label: 'Paprika', value: 'paprika' },
      { label: 'Squash', value: 'squash' },
      { label: 'Rucola', value: 'rucola' },
      { label: 'Spinat', value: 'spinat' },
      { label: 'Søtpotet', value: 'sotpotet' },
    ],
    multiple: false,
  },
};

export const Multiple: Story = {
  name: 'Flere valg',
  args: {
    name: 'vegetables',
    multiple: true,
    options: [
      { label: 'Agurk', value: 'agurk' },
      { label: 'Tomat', value: 'tomat' },
      { label: 'Mais', value: 'mais' },
      { label: 'Paprika', value: 'paprika' },
      { label: 'Squash', value: 'squash' },
      { label: 'Rucola', value: 'rucola' },
      { label: 'Spinat', value: 'spinat' },
      { label: 'Søtpotet', value: 'sotpotet' },
    ],
  },
};

export const MultipleWithFormExample: StoryFunction = () => {
  return <ComboboxFormExample />;
};
MultipleWithFormExample.storyName = 'Flere valg med skjemaeksempel';
MultipleWithFormExample.parameters = {
  docs: {
    source: {
      code: comboboxFormExampleSource,
      language: 'tsx',
    },
  },
  controls: {
    exclude: /.*/,
  },
};

export const WithValidation: StoryFunction = () => {
  return <ComboboxValidationExample />;
};
WithValidation.storyName = 'Validering og feilhåndtering';
WithValidation.parameters = {
  docs: {
    source: {
      code: comboboxValidationExampleSource,
      language: 'tsx',
    },
  },
  controls: {
    exclude: /.*/,
  },
};

export const MaxSelected: StoryFunction = () => {
  return <ComboboxMaxSelectedExample />;
};
MaxSelected.storyName = 'Begrenset antall valg';
MaxSelected.parameters = {
  docs: {
    source: {
      code: comboboxMaxSelectedExampleSource,
      language: 'tsx',
    },
  },
  controls: {
    exclude: /.*/,
  },
};

export const LoadingStates: StoryFunction = () => {
  return <ComboboxLoadingStatesExample />;
};
LoadingStates.storyName = 'Loading og asynkron søk';
LoadingStates.parameters = {
  docs: {
    description: {
      story:
        'Viser hvordan Combobox håndterer loading states og asynkrone søkeoperasjoner. Demonstrerer isLoading prop, tilpassede loading-meldinger og forskjellen mellom disabled og loading states.',
    },
    source: {
      code: comboboxLoadingStatesExampleSource,
      language: 'tsx',
    },
  },
  controls: {
    exclude: /.*/,
  },
};

export const WithTypedOptions: StoryFunction = () => {
  return <ComboboxTypedOptionsExample />;
};
WithTypedOptions.storyName = 'TypedComboboxOption med metadata';
WithTypedOptions.parameters = {
  docs: {
    description: {
      story:
        'Demonstrerer bruk av TypedComboboxOption<TData> for å knytte metadata til hver option. Velg frukter fra butikken og se hvordan additional data som opprinnelsesland og best-før-dato lagres direkte på options og vises når du gjør valg. TypedComboboxOption gir full TypeScript type-sikkerhet og IntelliSense for metadata, og fungerer med alle Combobox-varianter (single/multi-select, controlled/uncontrolled).',
    },
    source: {
      code: comboboxTypedOptionsExampleSource,
      language: 'tsx',
    },
  },
  controls: {
    exclude: /.*/,
  },
};

export const PerformanceTest: StoryFunction = () => {
  return <ComboboxPerformanceExample />;
};
PerformanceTest.storyName = 'Ytelse - Enkeltvalg med store datamengder';
PerformanceTest.parameters = {
  docs: {
    description: {
      story:
        'Demonstrerer korrekt real-world pattern for håndtering av store datamengder (5000 elementer). Viser hvordan du bør wrappe Combobox i loading states når du arbeider med store datasett. Dette forhindrer at nettleseren henger seg opp under data-generering og gir en bedre brukeropplevelse.',
    },
    source: {
      code: comboboxPerformanceExampleSource,
      language: 'tsx',
    },
  },
  controls: {
    exclude: /.*/,
  },
};

export const PerformanceTestMultiple: StoryFunction = () => {
  return <ComboboxPerformanceMultipleExample />;
};
PerformanceTestMultiple.storyName = 'Ytelse - Flervalg med store datamengder';
PerformanceTestMultiple.parameters = {
  docs: {
    description: {
      story:
        'Demonstrerer ytelsen til flervalg-modus med 5000 elementer. Tester spesielt scenarioer som å velge mange elementer, fjerne valgte chips, og håndtere store resultatlister samtidig som flere elementer er valgt. Viser korrekt implementation pattern med loading wrapper.',
    },
    source: {
      code: comboboxPerformanceExampleSource,
      language: 'tsx',
    },
  },
  controls: {
    exclude: /.*/,
  },
};

export const MaxHeight: StoryFunction = () => {
  return <ComboboxMaxHeightExample />;
};
MaxHeight.storyName = 'Begrenset høyde på liste';
MaxHeight.parameters = {
  docs: {
    description: {
      story:
        'Viser hvordan du kan begrense høyden på dropdown-listen ved å bruke classNames.options med max-height CSS. Listen vil få scrollbar automatisk når innholdet overskrider max-height.',
    },
    source: {
      code: comboboxMaxHeightExampleSource,
      language: 'tsx',
    },
  },
  controls: {
    exclude: /.*/,
  },
};
