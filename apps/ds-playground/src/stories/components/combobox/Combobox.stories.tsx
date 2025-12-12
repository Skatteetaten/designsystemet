import { JSX } from 'react';

import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

import {
  Combobox,
  getComboboxMinSearchLengthDefault,
  getComboboxPlaceholderDefault,
  getComboboxVariantDefault,
} from '@skatteetaten/ds-forms';
import { getSpinnerLabelDefault } from '@skatteetaten/ds-progress';

import {
  comboboxStoryOptions,
  getComboboxStoryOptions,
  generatePerformanceTestData,
} from './combobox.stories.utils';
import { ComboboxFormExample } from './ComboboxFormExample';
import comboboxFormExampleSource from './ComboboxFormExample.tsx?raw';
import { ComboboxLoadingStatesExample } from './ComboboxLoadingStatesExample';
import comboboxLoadingStatesExampleSource from './ComboboxLoadingStatesExample.tsx?raw';
import { ComboboxMaxHeightExample } from './ComboboxMaxHeightExample';
import comboboxMaxHeightExampleSource from './ComboboxMaxHeightExample.tsx?raw';
import { ComboboxMaxHeightInputListExample } from './ComboboxMaxHeightInputListExample';
import comboboxMaxHeightInputListExampleSource from './ComboboxMaxHeightInputListExample.tsx?raw';
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
import { category, htmlEventDescription } from '../../../../.storybook/helpers';
import { SystemSVGPaths } from '../../utils/icon.systems';
import './ComboboxMaxHeightExample.scss';

const meta = {
  title: 'Komponenter/Combobox',
  component: Combobox,
  parameters: {
    docs: {
      codePanel: true,
      source: { type: 'auto' },
    },
  },
  argTypes: {
    // Props
    label: { table: { category: category.props } },
    options: { control: false, table: { category: category.props } },
    classNames: { control: false, table: { category: category.props } },
    description: { table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    hasSpacing: { table: { category: category.props } },
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
    isLoading: { table: { category: category.props } },
    maxSelected: { table: { category: category.props } },
    minSearchLength: {
      table: {
        category: category.props,
        defaultValue: {
          summary: getComboboxMinSearchLengthDefault().toString(),
        },
      },
    },
    multiple: { table: { category: category.props } },
    spinnerLabel: {
      table: { category: category.props },
      defaultValue: { summary: getSpinnerLabelDefault() },
    },
    spinnerProps: { control: false, table: { category: category.props } },
    titleHelpSvg: { table: { category: category.props } },
    value: { control: 'text', table: { category: category.props } },
    variant: {
      table: {
        category: category.props,
        defaultValue: { summary: getComboboxVariantDefault() },
      },
    },
    // HTML
    accessKey: { table: { category: category.htmlAttribute } },
    form: { table: { category: category.htmlAttribute } },
    name: { table: { category: category.htmlAttribute } },
    disabled: { table: { category: category.htmlAttribute } },
    placeholder: {
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: getComboboxPlaceholderDefault() },
      },
    },
    required: { table: { category: category.htmlAttribute } },
    // Events
    onBlur: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
    onSelectionChange: { ...htmlEventDescription },
    onInputChange: { ...htmlEventDescription },
    onHelpToggle: { ...htmlEventDescription, action: 'help-toggled' },
  },
  args: {
    label: 'Velg kommune',
    options: comboboxStoryOptions,
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof Combobox>;
type StoryFunction = StoryFn<typeof meta>;

const width400Decorator = (Story: React.ComponentType): JSX.Element => (
  <div className={'width400'}>
    <Story />
  </div>
);

export const Primary: Story = {
  name: 'Enkeltvalg',
  decorators: [width400Decorator],
  args: {
    name: 'kommune',
    options: getComboboxStoryOptions(),
    multiple: false,
    classNames: {
      options: 'maxHeight300',
    },
  },
};

export const Multiple: Story = {
  name: 'Flere valg',
  decorators: [width400Decorator],
  args: {
    name: 'kommuner',
    multiple: true,
    options: getComboboxStoryOptions(),
    classNames: {
      options: 'maxHeight300',
    },
  },
};

export const MaxSelected: StoryFunction = () => {
  return <ComboboxMaxSelectedExample />;
};
MaxSelected.storyName = 'Begrenset antall valg';
MaxSelected.decorators = [width400Decorator];
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

export const MaxHeightInputList: StoryFunction = () => {
  return <ComboboxMaxHeightInputListExample />;
};
MaxHeightInputList.storyName = 'Begrenset høyde på input liste';
MaxHeightInputList.decorators = [width400Decorator];
MaxHeightInputList.parameters = {
  docs: {
    source: {
      code: comboboxMaxHeightInputListExampleSource,
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
MaxHeight.storyName = 'Begrenset høyde på options liste';
MaxHeight.decorators = [width400Decorator];
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

export const MultipleWithFormExample: StoryFunction = () => {
  return <ComboboxFormExample />;
};
MultipleWithFormExample.storyName = 'Flere valg med skjemaeksempel';
MultipleWithFormExample.decorators = [width400Decorator];
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
WithValidation.decorators = [width400Decorator];
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

export const LoadingStates: StoryFunction = () => {
  return <ComboboxLoadingStatesExample />;
};
LoadingStates.storyName = 'Loading og asynkron søk';
LoadingStates.decorators = [width400Decorator];
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
        'Demonstrerer bruk av TypedComboboxOption<TData> for å knytte metadata til hver option. Velg tidligere norske kommuner og se hvordan informasjon om sammenslåing og resulterende kommune lagres direkte på options og vises når du gjør valg. TypedComboboxOption gir full TypeScript type-sikkerhet og IntelliSense for metadata, og fungerer med alle Combobox-varianter (single/multi-select, controlled/uncontrolled).',
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
PerformanceTest.decorators = [width400Decorator];
PerformanceTest.parameters = {
  docs: {
    description: {
      story: `Demonstrerer korrekt real-world pattern for håndtering av store datamengder (${
        generatePerformanceTestData().length
      } elementer). Viser hvordan du bør wrappe Combobox i loading states når du arbeider med store datasett. Dette forhindrer at nettleseren henger seg opp under data-generering og gir en bedre brukeropplevelse.`,
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
PerformanceTestMultiple.decorators = [width400Decorator];
PerformanceTestMultiple.parameters = {
  docs: {
    description: {
      story: `Demonstrerer ytelsen til flervalg-modus med ${
        generatePerformanceTestData().length
      } elementer. Tester spesielt scenarioer som å velge mange elementer, fjerne valgte chips, og håndtere store resultatlister samtidig som flere elementer er valgt. Viser korrekt implementation pattern med loading wrapper.`,
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
