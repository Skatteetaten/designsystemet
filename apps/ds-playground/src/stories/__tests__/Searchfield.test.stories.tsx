import {
  ChangeEvent,
  FocusEvent,
  MouseEvent,
  KeyboardEvent,
  useState,
  JSX,
} from 'react';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { searchArrSize, SearchField } from '@skatteetaten/ds-forms';
import { expect } from '@storybook/jest';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import {
  fireEvent,
  userEvent,
  waitFor,
  within,
} from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';
// eslint-disable-next-line @nx/enforce-module-boundaries
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
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    classNames: { table: { disable: true } },
    defaultValue: { table: { disable: true } },
    description: { table: { disable: true } },
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
    hideLabel: { table: { disable: true } },
    titleHelpSvg: { table: { disable: true } },
    variant: {
      table: { disable: true },
      options: [...searchArrSize],
      control: 'inline-radio',
    },
    // HTML
    accessKey: { table: { disable: true } },
    disabled: { table: { disable: true } },
    name: { table: { disable: true } },
    placeholder: { table: { disable: true } },
    readOnly: { table: { disable: true } },
    value: { table: { disable: true } },
    // Events
    onBlur: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onFocus: { table: { disable: true } },
    onSearch: { table: { disable: true } },
    onClear: { table: { disable: true } },
    onSearchClick: { table: { disable: true } },
    onResultClick: { table: { disable: true } },
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
    imageSnapshot: { disable: true },
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
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
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
  },
} satisfies Story;

export const WithCustomClassNames = {
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      container: ' dummyClassname',
      label: 'dummyClassname',
      searchContainer: 'dummyClassnameFormContainer',
    },
  },
  argTypes: {
    classNames: {
      table: { disable: false },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    // eslint-disable-next-line testing-library/no-node-access
    const container = canvasElement.querySelector(`${wrapper} > div`);
    const label = canvas.getByText(defaultLabelText);
    // eslint-disable-next-line testing-library/no-node-access
    const searchContainer = canvasElement.querySelector(
      `${wrapper} > div > div`
    );
    // eslint-disable-next-line testing-library/no-node-access
    await expect(container).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
    await expect(searchContainer).toHaveClass('dummyClassnameFormContainer');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults Variant Medium (A1a, A2, A3, B1, B4)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    label: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      hover: [`${wrapper} input`, `${wrapper} button`],
      focus: [`${wrapper} input`, `${wrapper} button`],
      click: [`${wrapper} input`, `${wrapper} button`],
    },
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
  parameters: {
    viewport: {
      defaultViewport: '--mobile',
    },
  },
} satisfies Story;

export const WithDisabled = {
  name: 'With Disabled',
  args: {
    ...defaultArgs,
    disabled: true,
    value: valueText,
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
    imageSnapshot: { disable: true },
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
    imageSnapshot: { disable: true },
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
  },
  parameters: {
    imageSnapshot: { disable: true },
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

export const WithArrowKeyNavigation = {
  name: 'With ArrowKeyNavgitaion (C2)',
  args: {
    ...defaultArgs,
    results: [
      { description: 'Hydrogen' },
      { description: 'Helium' },
      { description: 'Litium' },
      { description: 'Beryllium' },
      { description: 'Bor' },
    ],
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const searchbox = canvas.getByRole('searchbox');
    const results = await canvas.findAllByRole('option');

    searchbox.focus();
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
      expect(args.onResultClick).toHaveBeenCalledWith({ description: 'Bor' })
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
    imageSnapshot: { disable: true },
  },
  play: verifyAttribute('accessKey', 'j'),
} satisfies Story;
