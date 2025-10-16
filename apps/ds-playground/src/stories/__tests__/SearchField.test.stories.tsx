import {
  ChangeEvent,
  FocusEvent,
  MouseEvent,
  KeyboardEvent,
  useState,
  JSX,
  useMemo,
} from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import {
  fireEvent,
  userEvent,
  waitFor,
  within,
  expect,
  fn,
} from 'storybook/test';

import {
  dsI18n,
  getCommonAutoCompleteDefault,
} from '@skatteetaten/ds-core-utils';
import { SearchField, searchInList } from '@skatteetaten/ds-forms';

import { wrapper } from './testUtils/storybook.testing.utils';
import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('searchbox');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute(attribute, expectedValue);
  };

const meta = {
  component: SearchField,
  title: 'Tester/SearchField',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    classNames: { table: { disable: true } },
    defaultValue: { table: { disable: true } },
    description: { table: { disable: true } },
    errorMessage: { table: { disable: true } },
    hasSpacing: { table: { disable: true } },
    label: { table: { disable: true } },
    helpSvgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    hasSearchButtonIcon: { table: { disable: true } },
    clearButtonTitle: { table: { disable: true } },
    searchButtonTitle: { table: { disable: true } },
    results: { table: { disable: true } },
    helpText: { table: { disable: true } },
    enableSRNavigationHint: { table: { disable: true } },
    hideLabel: { table: { disable: true } },
    showRequiredMark: { table: { disable: true } },
    titleHelpSvg: { table: { disable: true } },
    variant: {
      table: { disable: true },
      control: 'inline-radio',
    },
    // HTML
    accessKey: { table: { disable: true, category: category.htmlAttribute } },
    autoComplete: {
      table: {
        disable: true,
        category: category.htmlAttribute,
        defaultValue: { summary: getCommonAutoCompleteDefault() },
      },
      type: 'string',
    },
    disabled: { table: { disable: true, category: category.htmlAttribute } },
    form: { table: { disable: true, category: category.htmlAttribute } },
    name: { table: { disable: true, category: category.htmlAttribute } },
    placeholder: { table: { disable: true, category: category.htmlAttribute } },
    readOnly: { table: { disable: true, category: category.htmlAttribute } },
    required: { table: { disable: true, category: category.htmlAttribute } },
    value: { table: { disable: true, category: category.htmlAttribute } },
    // Events
    onBlur: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onFocus: { table: { disable: true } },
    onSearch: { table: { disable: true } },
    onClear: { table: { disable: true } },
    onHelpToggle: { table: { disable: true } },
    onSearchClick: { table: { disable: true } },
    onResultClick: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof SearchField>;
export default meta;
type Story = StoryObj<typeof meta>;

const valueText = 'skattekort';

const defaultLabelText = 'Hva leter du etter?';
const defaultArgs = {
  label: defaultLabelText,
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLInputElement | null): void => {
      if (instance) {
        instance.name = 'dummyNameForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: verifyAttribute('name', 'dummyNameForwardedFromRef'),
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    hideLabel: false,
    form: '123form',
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
    form: { table: { disable: false } },
    autoComplete: { table: { disable: false } },
  },
  parameters: {
    a11y: {
      test: 'off',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const searchbox = canvas.getByRole('searchbox');
    const container = canvas.getAllByRole('generic')[1];
    await expect(searchbox).toHaveAttribute('id', 'htmlid-input');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', 'htmlid');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(searchbox).toHaveAttribute('data-testid', '123ID');
    await expect(searchbox).toHaveAttribute('form', '123form');
    await expect(searchbox).toHaveAttribute('autocomplete', 'off');
  },
} satisfies Story;

const longLabelText =
  'Leter du etter en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG gjenstand?';
export const WithCustomClassNames = {
  name: 'With Custom ClassNames and Long Label (FA3)',
  args: {
    ...defaultArgs,
    label: longLabelText,
    classNames: {
      container: 'dummyClassname',
      label: 'dummyClassname',
      searchContainer: 'dummyClassnameFormContainer',
    },
    hideLabel: false,
  },
  argTypes: {
    classNames: {
      table: { disable: false },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    const container = canvasElement.querySelector(`${wrapper} > div`);
    const label = canvas.getByText(longLabelText);

    const searchContainer = canvasElement.querySelector(
      `${wrapper} > div > div`
    );

    await expect(container).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
    await expect(searchContainer).toHaveClass('dummyClassnameFormContainer');
  },
} satisfies Story;

export const WithLongLabel = {
  name: 'With Long Label',
  args: {
    ...defaultArgs,
    label: longLabelText,
    description: 'Med en LAAAAAAAAAAAAAAAAAAAAAAAAAAAAANG beskrivelse?',
    helpText: 'hjelpetekst',
    hideLabel: false,
  },
  argTypes: {
    label: {
      table: { disable: false },
    },
    hideLabel: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults Variant Medium (A1a, A2, A3, B1, B4)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    label: { table: { disable: false } },
    helpText: { table: { disable: false } },
    description: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus', 'active'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const searchbox = canvas.getByRole('searchbox', {
      name: `${defaultLabelText}`,
    });
    await expect(searchbox).toBeInTheDocument();
    await expect(searchbox).toBeEnabled();
    await expect(searchbox).toHaveAttribute('id');
    await expect(searchbox.tagName).toBe('INPUT');
    await expect(searchbox).not.toBeRequired();
    const searchButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:searchfield.ButtonTitle'),
    });
    await expect(searchButton).toBeInTheDocument();
    await expect(searchButton).toBeEnabled();
    await expect(searchButton.tagName).toBe('BUTTON');

    const sRtexst = dsI18n.t('ds_forms:searchfield.Focus');
    await expect(await canvas.findByText(sRtexst)).toBeInTheDocument();
  },
} satisfies Story;

const AllVariantsTemplate: StoryFn<typeof SearchField> = (
  args
): JSX.Element => {
  return (
    <>
      <SearchField variant={'medium'} {...args} />
      <SearchField variant={'large'} {...args} />
      <SearchField variant={'extraLarge'} {...args} />
    </>
  );
};

export const WithVariants = {
  name: 'With Variants (A1b, A2)',
  args: {
    ...defaultArgs,
    hideLabel: false,
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
  render: AllVariantsTemplate,
} satisfies Story;

export const WithVariantsNoIcon = {
  name: 'With Variants Without Icon (A1b, A2)',
  render: AllVariantsTemplate,
  args: {
    ...defaultArgs,
    hasSearchButtonIcon: false,
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
} satisfies Story;

export const WithVariantLargeAndLongText = {
  name: 'With Variant Large And Long Text',
  args: {
    ...defaultArgs,
    variant: 'large',
    value: 'En lang tekst som ikke skal synes bak reset-ikonet',
  },
  argTypes: {
    variant: { table: { disable: false } },
    value: { table: { disable: false } },
  },
  globals: {
    viewport: {
      value: '--mobile',
    },
  },
} satisfies Story;

export const WithDisabled = {
  name: 'With Disabled',
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'En lang tekst som ikke skal synes bak reset-ikonet',
  },
  argTypes: {
    disabled: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('searchbox');
    const searchButton = canvas.getByRole('button');
    await expect(textbox).toBeDisabled();
    await expect(searchButton).toBeDisabled();
  },
} satisfies Story;

export const WithValue = {
  name: 'With Value',
  args: {
    ...defaultArgs,
    value: valueText,
  },
  argTypes: {
    value: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: verifyAttribute('value', valueText),
} satisfies Story;

export const WithDefaultValue = {
  name: 'With DefaultValue',
  args: {
    ...defaultArgs,
    defaultValue: valueText,
  },
  argTypes: {
    defaultValue: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: verifyAttribute('value', valueText),
} satisfies Story;

export const WithDescription = {
  name: 'With Description (0b, B2)',
  args: {
    ...defaultArgs,
    description: 'En liten beskrivelse tekst',
    hideLabel: false,
  },
  argTypes: {
    description: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const labelWithDescription = canvas.getByText('En liten beskrivelse tekst');
    await expect(labelWithDescription).toBeInTheDocument();
  },
} satisfies Story;

export const WithHelpText = {
  name: 'With HelpText (0b, B2)',
  args: {
    ...defaultArgs,
    helpText: 'Hjelpetekst',
    hideLabel: false,
  },
  argTypes: {
    helpText: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button', {
      description: defaultLabelText,
    });
    await expect(helpButton).toBeInTheDocument();
    await fireEvent.click(helpButton);
  },
} satisfies Story;

export const WithNameAndPlaceholder = {
  name: 'With Name And Placeholder (A3, B3)',
  args: {
    ...defaultArgs,
    name: 'test_name',
    placeholder: valueText,
  },
  argTypes: {
    name: { table: { disable: false } },
    placeholder: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const searchbox = canvas.getByRole('searchbox');
    await expect(searchbox).toHaveAttribute('name', 'test_name');
    await expect(searchbox).toHaveAttribute('placeholder', valueText);
  },
} satisfies Story;

export const WithCustomButtonTitles = {
  name: 'With Custom Button Titles (A2, A5)',
  args: {
    ...defaultArgs,
    value: valueText,
    clearButtonTitle: 'clear test',
    searchButtonTitle: 'search test',
  },
  argTypes: {
    readOnly: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const clearButton = await canvas.findByText('clear test');
    const searchButton = canvas.getByText('search test');
    await expect(clearButton).toBeInTheDocument();
    await expect(searchButton).toBeInTheDocument();
  },
} satisfies Story;

export const WithCustomButtonTitleText = {
  name: 'With Custom Button Title Text (A2)',
  args: {
    ...defaultArgs,
    searchButtonTitle: 'search test',
    hasSearchButtonIcon: false,
  },
  argTypes: {
    readOnly: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const searchButton = canvas.getByText('search test');
    await expect(searchButton).toBeInTheDocument();
  },
} satisfies Story;

const EventHandlersTemplate: StoryFn<typeof SearchField> = (args) => {
  const [labelText, setLabelText] = useState('Tester events');
  return (
    <SearchField
      {...args}
      label={labelText}
      onFocus={(event: FocusEvent<HTMLInputElement>): void => {
        setLabelText('Form-element har fått fokus');
        args.onFocus?.(event);
      }}
      onBlur={(event: FocusEvent<HTMLInputElement>): void => {
        setLabelText('Form-element har blitt blurret');
        args.onBlur?.(event);
      }}
      onChange={(event: ChangeEvent<HTMLInputElement>): void => {
        setLabelText('Form-element har blitt klikket på');
        args.onChange?.(event);
      }}
      onClear={(event: MouseEvent<HTMLButtonElement>): void => {
        setLabelText('Reset har blitt klikket på');
        args.onClear?.(event);
      }}
      onSearchClick={(event: MouseEvent<HTMLButtonElement>): void => {
        setLabelText('Søk har blitt klikket på');
        args.onSearchClick?.(event);
      }}
      onSearch={(event: KeyboardEvent<HTMLInputElement>): void => {
        setLabelText('Søk har blitt aktivert med enter');
        args.onSearch?.(event);
      }}
    />
  );
};

export const WithEventHandlers = {
  render: EventHandlersTemplate,
  name: 'With EventHandlers (A7)',
  args: {
    ...defaultArgs,
    onFocus: fn(),
    onBlur: fn(),
    onSearchClick: fn(),
    onSearch: fn(),
    onChange: fn(),
    onClear: fn(),
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const searchbox = canvas.getByRole('searchbox');
    searchbox.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.type(searchbox, '02.02.2002');
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    const clearButton = canvas.getByText(
      dsI18n.t('ds_forms:searchfield.ClearButtonTitle')
    );
    await userEvent.click(clearButton);
    await waitFor(() => expect(args.onClear).toHaveBeenCalled());

    const searchButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:searchfield.ButtonTitle'),
    });
    await userEvent.click(searchButton);
    await waitFor(() => expect(args.onSearchClick).toHaveBeenCalled());

    await userEvent.type(searchbox, '{enter}');
    await waitFor(() => expect(args.onSearch).toHaveBeenCalled());
  },
} satisfies Story;

const KeyboardNavigationTemplate: StoryFn<typeof SearchField> = (args) => {
  const [value, setValue] = useState<string>('');

  const options = useMemo(() => {
    return [
      { description: 'Hydrogen', key: 'H' },
      { description: 'Helium', key: 'He' },
      { description: 'Litium', key: 'Li' },
      { description: 'Beryllium', key: 'Be' },
      { description: 'Bor', key: 'B' },
    ];
  }, []);

  const results = useMemo(() => searchInList(options, value), [value, options]);

  return (
    <SearchField
      {...args}
      results={results}
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />
  );
};

export const WithArrowKeyNavigation = {
  name: 'With ArrowKeyNavgitaion (C2)',
  render: KeyboardNavigationTemplate,
  args: {
    ...defaultArgs,
    onResultClick: fn(),
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const searchbox = canvas.getByRole('searchbox');

    searchbox.focus();
    await userEvent.keyboard('h');
    await userEvent.keyboard('[backspace]');

    const results = await canvas.findAllByRole('option');
    await userEvent.keyboard('[ArrowDown]');
    await expect(results[0]).toHaveFocus();
    await userEvent.keyboard('[ArrowDown]');
    await expect(results[1]).toHaveFocus();
    await userEvent.keyboard('[ArrowDown]');
    await expect(results[2]).toHaveFocus();
    await userEvent.keyboard('[ArrowUp]');
    await expect(results[1]).toHaveFocus();
    await userEvent.keyboard('[ArrowUp]');
    await expect(results[0]).toHaveFocus();
    await userEvent.keyboard('[ArrowUp]');
    await expect(results[4]).toHaveFocus();
    await userEvent.keyboard('[Enter]');
    await waitFor(() =>
      expect(args.onResultClick).toHaveBeenCalledWith({
        description: 'Bor',
        key: 'B',
      })
    );
  },
} satisfies Story;

export const WithAccesskey = {
  name: 'With Accesskey (B5)',
  args: {
    ...defaultArgs,
    accessKey: 'j',
  },
  argTypes: {
    accessKey: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: verifyAttribute('accessKey', 'j'),
} satisfies Story;

export const WithHelpToggleEvent = {
  name: 'With onHelpToggle Event',
  args: {
    ...defaultArgs,
    helpText: 'Hjelpetekst',
    hideLabel: false,
    onHelpToggle: (isOpen: boolean): void => {
      alert(isOpen ? 'Hjelpetekst blir vist' : 'Hjelpetekst skjules');
    },
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
} satisfies Story;

const ResetButtonTemplate: StoryFn<typeof SearchField> = (args) => {
  const [value, setValue] = useState<string>('søk');
  return (
    <>
      <SearchField
        {...args}
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>): void => {
          setValue(event.target.value);
          args.onChange?.(event);
        }}
      />
      <button onClick={() => setValue('')}>{'reset'}</button>
    </>
  );
};

export const WithControlled = {
  args: {
    ...defaultArgs,
    helpText: 'Hjelpetekst',
    hideLabel: false,
  },
  name: 'With Controlled',
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const clearButton = canvas.getByText(
      dsI18n.t('ds_forms:searchfield.ClearButtonTitle')
    );
    await expect(clearButton).toBeInTheDocument();

    const resetButton = canvas.getByText('reset');
    await userEvent.click(resetButton);

    await waitFor(() => {
      expect(
        canvas.queryByText(dsI18n.t('ds_forms:searchfield.ClearButtonTitle'))
      ).not.toBeInTheDocument();
    });
  },
  render: ResetButtonTemplate,
} satisfies Story;

export const WithRequired = {
  name: 'With Required',
  args: {
    ...defaultArgs,
    required: true,
  },
  argTypes: {
    required: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('searchbox');
    await expect(textbox).toBeRequired();
  },
} satisfies Story;

export const WithRequiredAndMark = {
  name: 'With Required And Mark',
  args: {
    ...defaultArgs,
    required: true,
    hideLabel: false,
    showRequiredMark: true,
  },
  argTypes: {
    required: { table: { disable: false } },
    showRequiredMark: { table: { disable: false } },
  },
} satisfies Story;

const errorMessageText = 'Søkefeltet er obligatorisk';

export const WithErrorMessage = {
  name: 'With ErrorMessage',
  args: {
    ...defaultArgs,
    errorMessage: errorMessageText,
  },
  argTypes: {
    errorMessage: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('searchbox');
    const errorMessageContainer = canvas.getAllByRole('generic')[3];
    await expect(errorMessageContainer).toBeInTheDocument();
    await expect(textbox).toHaveAttribute('aria-invalid', 'true');
    await expect(textbox).toHaveAttribute('aria-describedby');
  },
} satisfies Story;

export const WithLongPlaceholder = {
  args: {
    ...defaultArgs,
    placeholder: 'En lang placeholder som ikke skal synes bak reset-ikonet',
  },
  argTypes: {
    placeholder: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const WithLongInput = {
  args: {
    ...defaultArgs,
    defaultValue: 'En lang value som ikke skal synes bak reset-ikonet',
  },
  argTypes: {
    defaultValue: {
      table: { disable: false },
    },
  },
} satisfies Story;

const TwoSearchFields: StoryFn<typeof SearchField> = () => {
  return (
    <div className={'flex gapS'}>
      <SearchField label={'Søk etter grønnsaker'} hideLabel={false} />
      <SearchField
        label={'Søk etter grønnsaker'}
        helpText={'Hjelpetekst'}
        hideLabel={false}
      />
    </div>
  );
};

export const TwoSearchFieldsOneWithHelpText = {
  render: TwoSearchFields,
};

export const WithEnableSRNavigationHintsFalse = {
  argTypes: {
    enableSRNavigationHint: {
      table: { disable: false },
      control: 'boolean',
    },
  },
  args: {
    ...defaultArgs,
    enableSRNavigationHint: false,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const sRtexst = dsI18n.t('ds_forms:searchfield.Focus');
    await expect(canvas.queryByText(sRtexst)).not.toBeInTheDocument();
  },
} satisfies Story;
