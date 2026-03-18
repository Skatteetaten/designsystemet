import { JSX } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  Combobox,
  getComboboxMinSearchLengthDefault,
  getComboboxPlaceholderDefault,
  getComboboxVariantDefault,
} from '@skatteetaten/ds-forms';
import { getSpinnerLabelDefault } from '@skatteetaten/ds-progress';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import {
  groupedKommuneOptions,
  groupedOptions,
  kommuneOptions,
  mixedGroupedOptions,
} from './combobox.stories.utils';
import ComboboxFormExample from './ComboboxFormExample';
import comboboxFormExampleSource from './ComboboxFormExample.tsx?raw';
import ComboboxLoadingStatesExample from './ComboboxLoadingStatesExample';
import comboboxLoadingStatesExampleSource from './ComboboxLoadingStatesExample.tsx?raw';
import { ComboboxTypedOptionsExample } from './ComboboxTypedOptionsExample';
import comboboxTypedOptionsExampleSource from './ComboboxTypedOptionsExample.tsx?raw';
import ComboboxValidationExample from './ComboboxValidationExample';
import comboboxValidationExampleSource from './ComboboxValidationExample.tsx?raw';
import { category, htmlEventDescription } from '../../../../.storybook/helpers';
import { SystemSVGPaths } from '../../utils/icon.systems';

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
    label: 'Kommune',
    options: kommuneOptions,
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof Combobox>;

export const Single: Story = {
  name: 'Enkeltvalg',
  render: (args): JSX.Element => {
    return <Combobox className={'singleCombobox'} {...args} />;
  },
};

export const Multiple: Story = {
  name: 'Flervalg',
  render: (args): JSX.Element => {
    const { variant, onSelectionChange, ...rest } = args;
    return <Combobox className={'multipleCombobox'} {...rest} multiple />;
  },
  argTypes: {
    multiple: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
};

export const GroupedOptions: Story = {
  name: 'Gruppert enkeltvalg',
  render: (): JSX.Element => {
    return (
      <>
        <Paragraph hasSpacing>
          {
            'Eksempel på hvordan alternativer kan grupperes visuelt ved å bruke `group`-feltet på options. Alternativer med samme `group`-verdi vises sammen under en felles overskrift. Dette er nyttig for å organisere lange lister og gjøre det lettere for brukeren å finne riktig alternativ.'
          }
        </Paragraph>
        <Combobox
          options={groupedKommuneOptions}
          classNames={{ container: 'singleCombobox' }}
          label={'Kommune'}
        />
      </>
    );
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const GroupedOptionsMultiple: Story = {
  name: 'Gruppert flervalg',
  render: (): JSX.Element => {
    return (
      <>
        <Paragraph hasSpacing>
          {
            'Eksempel på at grupperte alternativer også fungerer med flervalg. Grupper bevares når listen filtreres og tomme grupper skjules automatisk.'
          }
        </Paragraph>
        <Combobox
          options={groupedOptions}
          className={'multipleCombobox'}
          label={'Besetningsmedlem'}
          multiple
        />
      </>
    );
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const MixedGroupedOptions: Story = {
  name: 'Blandet grupperte og ugrupperte',
  render: (): JSX.Element => {
    return (
      <>
        <Paragraph hasSpacing>
          {
            'Eksempel på at alternativer uten `group`-felt vises inline mellom gruppene. Rekkefølgen i arrayet bevares og gruppering skjer kun for påfølgende elementer med samme `group`-verdi.'
          }
        </Paragraph>
        <Combobox
          options={mixedGroupedOptions}
          classNames={{ container: 'singleCombobox' }}
          label={'Kommune'}
        />
      </>
    );
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const MaxSelected: Story = {
  name: 'Begrenset antall valg',
  render: (): JSX.Element => (
    <>
      <Paragraph hasSpacing>
        {
          'Eksempel på bruk av combobox med maks antall valg satt til 3. Når brukeren har valgt 3 kommuner, vil de ikke kunne velge flere.'
        }
      </Paragraph>
      <Combobox
        className={'multipleCombobox'}
        label={'Kommune'}
        description={'Velg maksimalt 3 kommuner'}
        options={kommuneOptions}
        maxSelected={3}
        multiple
      />
    </>
  ),
  parameters: {
    controls: {
      disable: true,
    },
  },
} satisfies Story;

export const MaxHeight: Story = {
  name: 'Begrenset høyde på options liste',
  render: (): JSX.Element => (
    <>
      <Paragraph hasSpacing>
        {
          'Eksempel på bruk av combobox med begrenset høyde på resultatlisten ved å bruke classNames.options. Når antall alternativer overstiger max-height, vil listen få scrollbar.'
        }
      </Paragraph>
      <Heading as={'h2'} level={4} hasSpacing>
        {'Enkeltvalg med begrenset høyde'}
      </Heading>
      <Combobox
        className={'singleCombobox'}
        label={'Kommune'}
        options={kommuneOptions}
        classNames={{
          options: 'maxHeight300',
        }}
        hasSpacing
      />

      <Heading as={'h2'} level={4} hasSpacing>
        {'Flervalg med begrenset høyde'}
      </Heading>
      <Combobox
        className={'multipleCombobox'}
        label={'Kommune'}
        options={kommuneOptions}
        classNames={{
          options: 'maxHeight300',
        }}
        maxSelected={2}
        multiple
      />
    </>
  ),
  parameters: {
    controls: {
      disable: true,
    },
  },
} satisfies Story;

export const MultipleWithFormExample: Story = {
  name: 'Flere valg med skjemaeksempel',
  render: (): JSX.Element => <ComboboxFormExample />,
  parameters: {
    docs: {
      source: {
        code: comboboxFormExampleSource,
        language: 'tsx',
      },
    },
    controls: {
      disable: true,
    },
  },
} satisfies Story;

export const WithValidation: Story = {
  name: 'Validering og feilhåndtering',
  render: (): JSX.Element => <ComboboxValidationExample />,
  parameters: {
    docs: {
      source: {
        code: comboboxValidationExampleSource,
        language: 'tsx',
      },
    },
    controls: {
      disable: true,
    },
  },
} satisfies Story;

export const LoadingStates: Story = {
  name: 'Loading og asynkron søk',
  render: (): JSX.Element => <ComboboxLoadingStatesExample />,
  parameters: {
    docs: {
      source: {
        code: comboboxLoadingStatesExampleSource,
        language: 'tsx',
      },
    },
    controls: {
      disable: true,
    },
  },
} satisfies Story;

export const WithTypedOptions: Story = {
  name: 'TypedComboboxOption med metadata',
  render: (): JSX.Element => <ComboboxTypedOptionsExample />,
  parameters: {
    docs: {
      source: {
        code: comboboxTypedOptionsExampleSource,
        language: 'tsx',
      },
    },
    controls: {
      disable: true,
    },
  },
} satisfies Story;
