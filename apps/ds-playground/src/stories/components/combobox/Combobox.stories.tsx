import { JSX } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  Combobox,
  getComboboxMinSearchLengthDefault,
  getComboboxPlaceholderDefault,
  getComboboxVariantDefault,
} from '@skatteetaten/ds-forms';
import { getSpinnerLabelDefault } from '@skatteetaten/ds-progress';

import {
  comboboxStoryOptions,
  generatePerformanceTestData,
  groupedKommuneOptions,
  mixedGroupedOptions,
} from './combobox.stories.utils';
import ComboboxFormExample from './ComboboxFormExample';
import comboboxFormExampleSource from './ComboboxFormExample.tsx?raw';
import ComboboxLoadingStatesExample from './ComboboxLoadingStatesExample';
import comboboxLoadingStatesExampleSource from './ComboboxLoadingStatesExample.tsx?raw';
import { ComboboxMaxHeightExample } from './ComboboxMaxHeightExample';
import comboboxMaxHeightExampleSource from './ComboboxMaxHeightExample.tsx?raw';
// import { ComboboxMaxHeightInputListExample } from './ComboboxMaxHeightInputListExample';
// import comboboxMaxHeightInputListExampleSource from './ComboboxMaxHeightInputListExample.tsx?raw';
import ComboboxMaxSelectedExample from './ComboboxMaxSelectedExample';
import comboboxMaxSelectedExampleSource from './ComboboxMaxSelectedExample.tsx?raw';
import {
  ComboboxPerformanceExample,
  ComboboxPerformanceMultipleExample,
} from './ComboboxPerformanceExample';
import comboboxPerformanceExampleSource from './ComboboxPerformanceExample.tsx?raw';
import { ComboboxTypedOptionsExample } from './ComboboxTypedOptionsExample';
import comboboxTypedOptionsExampleSource from './ComboboxTypedOptionsExample.tsx?raw';
import ComboboxValidationExample from './ComboboxValidationExample';
import comboboxValidationExampleSource from './ComboboxValidationExample.tsx?raw';
import { category, htmlEventDescription } from '../../../../.storybook/helpers';
import { SystemSVGPaths } from '../../utils/icon.systems';
import './ComboboxMaxHeightExample.scss';

const defaultArgs = {
  name: 'kommune',
  label: 'Velg kommune',
  options: comboboxStoryOptions,
};

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
  args: defaultArgs,
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof Combobox>;

const width400Decorator = (Story: React.ComponentType): JSX.Element => (
  <div className={'width400'}>
    <Story />
  </div>
);

export const Preview: Story = {};

export const Single: Story = {
  name: 'Enkeltvalg',
  render: (_args): JSX.Element => {
    return (
      <Combobox
        options={[
          {
            label: 'Agdenes',
            value: 'agdenes',
          },
          {
            label: 'Balestrand',
            value: 'balestrand',
          },
          {
            label: 'Finnøy',
            value: 'finnoy',
          },
          {
            label: 'Forsand',
            value: 'forsand',
          },
          {
            label: 'Kvalsund',
            value: 'kvalsund',
          },
          {
            label: 'Mandal',
            value: 'mandal',
          },
          {
            label: 'Midsund',
            value: 'midsund',
          },
          {
            label: 'Rennesøy',
            value: 'rennesoy',
          },
          {
            label: 'Songdalen',
            value: 'songdalen',
          },
          {
            label: 'Tysfjord',
            value: 'tysfjord',
          },
        ]}
        classNames={{ container: 'width400', options: 'maxHeight300' }}
        label={'Velg kommune'}
      />
    );
  },
};

export const Multiple: Story = {
  name: 'Flere valg',
  render: (_args): JSX.Element => {
    return (
      <Combobox
        options={[
          {
            label: 'Agdenes',
            value: 'agdenes',
          },
          {
            label: 'Balestrand',
            value: 'balestrand',
          },
          {
            label: 'Finnøy',
            value: 'finnoy',
          },
          {
            label: 'Forsand',
            value: 'forsand',
          },
          {
            label: 'Kvalsund',
            value: 'kvalsund',
          },
          {
            label: 'Mandal',
            value: 'mandal',
          },
          {
            label: 'Midsund',
            value: 'midsund',
          },
          {
            label: 'Rennesøy',
            value: 'rennesoy',
          },
          {
            label: 'Songdalen',
            value: 'songdalen',
          },
          {
            label: 'Tysfjord',
            value: 'tysfjord',
          },
        ]}
        classNames={{ container: 'width400', options: 'maxHeight300' }}
        label={'Velg kommune'}
        multiple
      />
    );
  },
};

export const GroupedOptions: Story = {
  name: 'Grupperte alternativer',
  render: (_args): JSX.Element => {
    return (
      <Combobox
        options={groupedKommuneOptions}
        classNames={{ container: 'width400', options: 'maxHeight300' }}
        label={'Velg kommune'}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Viser hvordan alternativer kan grupperes visuelt ved å bruke `group`-feltet på options. Alternativer med samme `group`-verdi vises sammen under en felles overskrift. Dette er nyttig for å organisere lange lister og gjøre det lettere for brukeren å finne riktig alternativ.',
      },
    },
  },
};

export const GroupedOptionsMultiple: Story = {
  name: 'Grupperte alternativer (flervalg)',
  render: (_args): JSX.Element => {
    return (
      <Combobox
        options={groupedKommuneOptions}
        classNames={{ container: 'width400', options: 'maxHeight300' }}
        label={'Velg kommuner'}
        multiple
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Grupperte alternativer fungerer også med flervalg-modus. Grupper bevares når listen filtreres - tomme grupper skjules automatisk.',
      },
    },
  },
};

export const MixedGroupedOptions: Story = {
  name: 'Blandet grupperte og ugrupperte',
  render: (_args): JSX.Element => {
    return (
      <Combobox
        options={mixedGroupedOptions}
        classNames={{ container: 'width400', options: 'maxHeight300' }}
        label={'Velg kommune'}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Alternativer uten `group`-felt vises inline mellom gruppene. Rekkefølgen i arrayet bevares - gruppering skjer kun for påfølgende elementer med samme `group`-verdi.',
      },
    },
  },
};

export const MaxSelected: Story = {
  name: 'Begrenset antall valg',
  decorators: [width400Decorator],
  render: (): JSX.Element => <ComboboxMaxSelectedExample />,
  parameters: {
    docs: {
      source: {
        code: comboboxMaxSelectedExampleSource,
        language: 'tsx',
      },
    },
    controls: {
      exclude: /.*/,
    },
  },
} satisfies Story;

// export const MaxHeightInputList: Story = {
//   name: 'Begrenset høyde på input liste',
//   decorators: [width400Decorator],
//   render: (): JSX.Element => <ComboboxMaxHeightInputListExample />,
//   parameters: {
//     docs: {
//       source: {
//         code: comboboxMaxHeightInputListExampleSource,
//         language: 'tsx',
//       },
//     },
//     controls: {
//       exclude: /.*/,
//     },
//   },
// } satisfies Story;

export const MaxHeight: Story = {
  name: 'Begrenset høyde på options liste',
  decorators: [width400Decorator],
  render: (): JSX.Element => <ComboboxMaxHeightExample />,
  parameters: {
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
  },
} satisfies Story;

export const MultipleWithFormExample: Story = {
  name: 'Flere valg med skjemaeksempel',
  decorators: [width400Decorator],
  render: (): JSX.Element => <ComboboxFormExample />,
  parameters: {
    docs: {
      source: {
        code: comboboxFormExampleSource,
        language: 'tsx',
      },
    },
    controls: {
      exclude: /.*/,
    },
  },
} satisfies Story;

export const WithValidation: Story = {
  name: 'Validering og feilhåndtering',
  decorators: [width400Decorator],
  render: (): JSX.Element => <ComboboxValidationExample />,
  parameters: {
    docs: {
      source: {
        code: comboboxValidationExampleSource,
        language: 'tsx',
      },
    },
    controls: {
      exclude: /.*/,
    },
  },
} satisfies Story;

export const LoadingStates: Story = {
  name: 'Loading og asynkron søk',
  decorators: [width400Decorator],
  render: (): JSX.Element => <ComboboxLoadingStatesExample />,
  parameters: {
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
  },
} satisfies Story;

export const WithTypedOptions: Story = {
  name: 'TypedComboboxOption med metadata',
  render: (): JSX.Element => <ComboboxTypedOptionsExample />,
  parameters: {
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
  },
} satisfies Story;

export const PerformanceTest: Story = {
  name: 'Ytelse - Enkeltvalg med store datamengder',
  decorators: [width400Decorator],
  render: (): JSX.Element => <ComboboxPerformanceExample />,
  parameters: {
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
  },
} satisfies Story;

export const PerformanceTestMultiple: Story = {
  name: 'Ytelse - Flervalg med store datamengder',
  decorators: [width400Decorator],
  render: (): JSX.Element => <ComboboxPerformanceMultipleExample />,
  parameters: {
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
  },
} satisfies Story;
