import React from 'react';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, fireEvent } from '@storybook/test';
import { within } from '@storybook/testing-library';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { DatePickerCalendar } from '../../../../../libs/ds-forms/src/DatePickerCalendar/DatePickerCalendar';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { DatePickerCalendarProps } from '../../../../../libs/ds-forms/src/DatePickerCalendar/DatePickerCalendar.types';

const DatesTemplate: StoryFn<typeof DatePickerCalendar> = (args) => {
  /* Fordi date control konverterer datoen til et UNIX-tidsstempel når verdien endres,
    må den konverteres til et date objekt. Dette er en kjent begrensing som vil bli fikset
    en gang i fremtiden står det i Storybook sin dokumentasjon over Controls. */
  args.selectedDate = new Date(args.selectedDate as Date);
  args.minDate = new Date(args.minDate as Date);
  args.maxDate = new Date(args.maxDate as Date);
  return (
    <DatePickerCalendar
      {...args}
      selectedDate={args.selectedDate}
      minDate={args.minDate}
      maxDate={args.maxDate}
    />
  );
};

const today = new Date('2024.01.01');
const meta = {
  component: DatePickerCalendar,
  title: 'Tester/DatePicker/DatePickerCalendar',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    selectedDate: {
      table: { disable: true },
      control: 'date',
    },
    minDate: { table: { disable: true }, control: 'date' },
    maxDate: { table: { disable: true }, control: 'date' },
    // Events
    onSelectDate: { table: { disable: true } },
  },
  parameters: {
    mockDate: today,
  },
  render: DatesTemplate,
} satisfies Meta<typeof DatePickerCalendar>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: DatePickerCalendarProps = {
  selectedDate: today,
  onSelectDate: () => {},
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLDivElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendar = canvas.getAllByRole('generic')[1];
    await expect(calendar).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'en',
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
    const calendar = canvas.getAllByRole('generic')[1];
    await expect(calendar).toHaveAttribute('id', 'htmlId');
    await expect(calendar).toHaveClass('dummyClassname');
    await expect(calendar).toHaveAttribute('lang', 'en');
    await expect(calendar).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A1 delvis, B1, B2)',
  args: {
    ...defaultArgs,
  },
  argTypes: {},
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole('button', {
        name: dsI18n.t('ds_forms:datepicker.PreviousMonth'),
      })
    ).toBeInTheDocument();
    await expect(
      canvas.getByRole('button', {
        name: dsI18n.t('ds_forms:datepicker.NextMonth'),
      })
    ).toBeInTheDocument();
    await expect(
      canvas.getByRole('combobox', {
        name: dsI18n.t('ds_forms:datepicker.SelectMonth'),
      })
    ).toBeInTheDocument();
    await expect(
      canvas.getByRole('textbox', {
        name: dsI18n.t('ds_forms:datepicker.Year'),
      })
    ).toBeInTheDocument();

    const calendarTable = canvas.getByRole('table');
    // eslint-disable-next-line testing-library/no-node-access
    const caption = calendarTable.querySelector('caption');
    // eslint-disable-next-line testing-library/no-node-access
    const cells = calendarTable.querySelectorAll('td');
    // eslint-disable-next-line testing-library/no-node-access
    const buttons = calendarTable.querySelectorAll('button');

    await expect(calendarTable).toBeInTheDocument();
    await expect(caption).toBeInTheDocument();
    await expect(cells.length).toBe(buttons.length);

    const firstDateButton = canvas.getAllByText('1')[0];
    await expect(firstDateButton).toHaveAttribute(
      'aria-label',
      'I dag 1. Januar 2024'
    );
    const ariaCurrentButton = canvas.getAllByText('1')[0];
    await expect(ariaCurrentButton).toHaveAttribute('aria-current', 'date');
  },
} satisfies Story;

export const WithSelectedValue = {
  name: 'WithSelectedValue (B2)',
  args: {
    ...defaultArgs,
    selectedDate: new Date('2024.01.31'),
  },
  argTypes: {
    selectedDate: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const ariaCurrentButton = canvas.getByText('31');
    await expect(ariaCurrentButton).toHaveAttribute('aria-current', 'date');
  },
} satisfies Story;

export const WithMinDate = {
  name: 'With MinDate (A3 delvis)',
  args: {
    ...defaultArgs,
    minDate: new Date('2024.01.15'),
  },
  argTypes: {
    minDate: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarTable = canvas.getByRole('table');
    // eslint-disable-next-line testing-library/no-node-access
    const disabledButtons = calendarTable.querySelectorAll('button:disabled');
    await expect(disabledButtons.length).toBe(14);
  },
} satisfies Story;

export const WithMaxDate = {
  name: 'With MaxDate (A3 delvis)',
  args: {
    ...defaultArgs,
    maxDate: new Date('2024.01.15'),
  },
  argTypes: {
    maxDate: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarTable = canvas.getByRole('table');
    // eslint-disable-next-line testing-library/no-node-access
    const disabledButtons = calendarTable.querySelectorAll('button:disabled');
    await expect(disabledButtons.length).toBe(20);
  },
} satisfies Story;

export const WithBreakpointMobile = {
  name: 'With Breakpoint-mobile (A1 delvis)',
  args: {
    ...defaultArgs,
  },
  argTypes: {},
  parameters: {
    viewport: {
      defaultViewport: '--mobile',
    },
  },
} satisfies Story;

export const ClickAndChangeMonthAndYear = {
  name: 'Click And Change Month And Year (A5 delvis)',
  args: {
    ...defaultArgs,
  },
  argTypes: {},
  parameters: {
    imageSnapshot: { disable: true },
    HTMLSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const prevButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.PreviousMonth'),
    });
    const nextButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.NextMonth'),
    });
    const monthSelect = canvas.getByRole('combobox', {
      name: dsI18n.t('ds_forms:datepicker.SelectMonth'),
    });
    const yearInput = canvas.getByRole('textbox', {
      name: dsI18n.t('ds_forms:datepicker.Year'),
    });

    await expect(monthSelect).toHaveValue('0');
    await expect(yearInput).toHaveValue('2024');

    await fireEvent.click(prevButton);
    await expect(monthSelect).toHaveValue('11');
    await expect(yearInput).toHaveValue('2023');

    await fireEvent.click(nextButton);
    await expect(monthSelect).toHaveValue('0');
    await expect(yearInput).toHaveValue('2024');
  },
} satisfies Story;
