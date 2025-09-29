import type { Meta, StoryFn, StoryObj } from '@storybook/react/*';

import {
  Combobox,
  getComboboxPlaceholderDefault,
} from '@skatteetaten/ds-forms';

import { comboboxStoryOptions } from './combobox.stories.utils';
import { ComboboxFormExample } from './ComboboxFormExample';
import comboboxFormExampleSource from './ComboboxFormExample.tsx?raw';
import { ComboboxKeyboardNavigationExample } from './ComboboxKeyboardNavigationExample';
import comboboxKeyboardNavigationExampleSource from './ComboboxKeyboardNavigationExample.tsx?raw';
import { ComboboxLoadingStatesExample } from './ComboboxLoadingStatesExample';
import comboboxLoadingStatesExampleSource from './ComboboxLoadingStatesExample.tsx?raw';
import { ComboboxMaxSelectedExample } from './ComboboxMaxSelectedExample';
import comboboxMaxSelectedExampleSource from './ComboboxMaxSelectedExample.tsx?raw';
import { ComboboxMultipleKeyboardNavigationExample } from './ComboboxMultipleKeyboardNavigationExample';
import comboboxMultipleKeyboardNavigationExampleSource from './ComboboxMultipleKeyboardNavigationExample.tsx?raw';
import {
  ComboboxPerformanceExample,
  ComboboxPerformanceMultipleExample,
} from './ComboboxPerformanceExample';
import comboboxPerformanceExampleSource from './ComboboxPerformanceExample.tsx?raw';
import { ComboboxTypedOptionsExample } from './ComboboxTypedOptionsExample';
import comboboxTypedOptionsExampleSource from './ComboboxTypedOptionsExample.tsx?raw';
import { ComboboxValidationExample } from './ComboboxValidationExample';
import comboboxValidationExampleSource from './ComboboxValidationExample.tsx?raw';
import { category } from '../../../../.storybook/helpers';

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
    label: {
      control: { type: 'text' },
      description: 'Ledetekst som vises over komponenten',
      table: { category: category.props },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder-tekst som vises i input-feltet',
      table: {
        category: category.props,
        defaultValue: { summary: getComboboxPlaceholderDefault() },
      },
    },
    options: {
      control: { type: 'object' },
      description: 'Array av valg som kan velges fra',
      table: { category: category.props },
    },
    variant: {
      control: { type: 'select' },
      options: ['medium', 'large'],
      description: 'Størrelsen på combobox. Må være "large" for multi-select',
      table: { category: category.props },
    },
    hasSpacing: {
      control: { type: 'boolean' },
      description: 'Legger til margin under komponenten',
      table: { category: category.props },
    },
    hideLabel: {
      control: { type: 'boolean' },
      description:
        'Skjuler label visuelt, men er fortsatt synlig for skjermleser',
      table: { category: category.props },
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Tillater valg av flere alternativer',
      table: { category: category.props },
    },
    minSearchLength: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
      description: 'Minimum antall tegn før søkeresultater vises',
      table: { category: category.props },
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Viser loading state med spinner',
      table: { category: category.props },
    },
    loadingMessage: {
      control: { type: 'text' },
      description: 'Tilpasset melding som vises under loading',
      table: { category: category.props },
      if: { arg: 'isLoading', eq: true },
    },
    description: {
      control: { type: 'text' },
      description: 'Tilleggstekst som vises under label',
      table: { category: category.props },
    },
    helpText: {
      control: { type: 'text' },
      description: 'Hjelpetekst som vises i tooltip',
      table: { category: category.props },
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Feilmelding som vises under komponenten',
      table: { category: category.props },
    },

    // HTML-attributes
    name: {
      control: { type: 'text' },
      description: 'Navn på input-feltet (for skjemaintegrasjon)',
      table: { category: category.htmlAttribute },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Deaktiverer komponenten',
      table: { category: category.htmlAttribute },
    },
    required: {
      control: { type: 'boolean' },
      description: 'Markerer feltet som obligatorisk',
      table: { category: category.htmlAttribute },
    },

    // Events
    onSelectionChange: {
      action: 'selection-changed',
      description:
        'Kalles når valget endres. Enkeltvalg: mottar ComboboxOption | null. Flervalg: mottar ComboboxOption[] array. Brukes både i kontrollert og ukontrollert modus.',
      table: { category: category.event },
    },
    onInputChange: {
      action: 'input-changed',
      description:
        'Kalles når input-teksten endres (kun ukontrollert modus). Mottar den nåværende input-teksten som string. Nyttig for asynkron søk og filtrering.',
      table: { category: category.event },
    },
    onHelpToggle: {
      action: 'help-toggled',
      description:
        'Kalles når hjelpeteksten vises/skjules. Mottar boolean: true når hjelpeteksten åpnes, false når den lukkes. Brukes for å spore bruk av hjelpefunksjonalitet.',
      table: { category: category.event },
    },

    // Advanced/Internal props - hide from controls
    value: {
      table: { disable: true },
      description: 'Controlled value (use stories for different modes)',
    },
    classNames: {
      table: { disable: true },
      description: 'Custom CSS class names for styling',
    },
    helpSvgPath: {
      table: { disable: true },
      description: 'Custom SVG path for help icon',
    },
    titleHelpSvg: {
      table: { disable: true },
      description: 'Custom tooltip text for help icon',
    },
    spinnerProps: {
      table: { disable: true },
      description: 'Props for customizing spinner appearance',
    },
  },
  args: {
    label: 'Velg land',
    hasSpacing: false,
    variant: 'medium',
    options: comboboxStoryOptions,
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;
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
    variant: 'large',
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

export const KeyboardNavigation: StoryFunction = () => {
  return <ComboboxKeyboardNavigationExample />;
};
KeyboardNavigation.storyName = 'Tastaturnavigasjon';
KeyboardNavigation.parameters = {
  docs: {
    description: {
      story:
        'Demonstrerer alle tastaturnavigasjonsfunksjoner som støttes av Combobox, inkludert piltaster, Enter, Escape og Alt-kombinasjoner. Denne storyen viser hvordan komponenten møter tilgjengelighetskrav for keyboard-only bruk.',
    },
    source: {
      code: comboboxKeyboardNavigationExampleSource,
      language: 'tsx',
    },
  },
  controls: {
    exclude: /.*/,
  },
};

export const MultipleKeyboardNavigation: StoryFunction = () => {
  return <ComboboxMultipleKeyboardNavigationExample />;
};
MultipleKeyboardNavigation.storyName = 'Tastaturnavigasjon for flervalg';
MultipleKeyboardNavigation.parameters = {
  docs: {
    description: {
      story:
        'Demonstrerer alle tastaturnavigasjonsfunksjoner som støttes av Combobox i flervalg-modus, inkludert piltaster, Enter for toggle-valg, Escape, Backspace for fjerning av valg og Delete for chip-fjerning. Denne storyen viser hvordan komponenten møter tilgjengelighetskrav for keyboard-only bruk ved flere valg.',
    },
    source: {
      code: comboboxMultipleKeyboardNavigationExampleSource,
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
