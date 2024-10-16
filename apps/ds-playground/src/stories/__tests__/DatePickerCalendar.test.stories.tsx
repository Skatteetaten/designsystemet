import React from 'react';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, fireEvent, within } from '@storybook/test';

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

const today = new Date('2024-01-15');
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
    disabledDates: { table: { disable: true } },
    selectedDate: { table: { disable: true }, control: 'date' },
    minDate: { table: { disable: true }, control: 'date' },
    maxDate: { table: { disable: true }, control: 'date' },
    // Events
    onSelectDate: { table: { disable: true } },
    onTabKeyOut: { table: { disable: true } },
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
  onSelectDate: () => {
    Function.prototype();
  },
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

    const prevArrowBtnText = `${dsI18n.t(
      'ds_forms:datepicker.PreviousMonth'
    )} ${dsI18n.t('ds_forms:datepicker.December')} 2023`;
    const nextArrowBtnText = `${dsI18n.t(
      'ds_forms:datepicker.NextMonth'
    )} ${dsI18n.t('ds_forms:datepicker.February')} 2024`;

    await expect(
      canvas.getByRole('button', {
        name: prevArrowBtnText,
      })
    ).toBeInTheDocument();
    await expect(
      canvas.getByRole('button', {
        name: nextArrowBtnText,
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
    // eslint-disable-next-line testing-library/no-node-access
    const focusableButtons = calendarTable.querySelectorAll(
      'button[tabindex="0"]'
    );

    await expect(calendarTable).toBeInTheDocument();
    await expect(caption).toBeInTheDocument();
    await expect(cells.length).toBe(buttons.length);
    await expect(focusableButtons.length).toBe(1);

    const defaultSelectedDateButton = canvas.getAllByText('15')[0];
    await expect(defaultSelectedDateButton).toHaveAttribute(
      'aria-label',
      'I dag 15. Januar 2024'
    );
    await expect(defaultSelectedDateButton).toHaveAttribute(
      'aria-current',
      'true'
    );
    await expect(defaultSelectedDateButton).toHaveAttribute('tabindex', '0');
  },
} satisfies Story;

export const WithSelectedDate = {
  name: 'WithSelectedDate (B2)',
  args: {
    ...defaultArgs,
    selectedDate: new Date('2024-01-31'),
  },
  argTypes: {
    selectedDate: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const selectedDateButton = canvas.getByText('31');
    await expect(selectedDateButton).toHaveAttribute('aria-current', 'true');
  },
} satisfies Story;

export const WithMinDate = {
  name: 'With MinDate (A3 delvis)',
  args: {
    ...defaultArgs,
    minDate: new Date('2024-01-15'),
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
    maxDate: new Date('2024-01-15'),
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

export const WithMaxDateWhereSelectedDateIsWithinTheRange = {
  name: 'With MaxDate Where Selected Date Is Within The Range',
  args: {
    ...defaultArgs,
    selectedDate: new Date('2024-01-16'),
    maxDate: new Date('2024-01-15'),
  },
  argTypes: {
    selectedDate: { table: { disable: false } },
    maxDate: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    const oldSelectedDateButton = canvas.getByText('16');
    await expect(oldSelectedDateButton).toHaveAttribute('tabindex', '-1');

    const newSelectedDateButton = canvas.getByText('15');
    await expect(newSelectedDateButton).toHaveAttribute('tabindex', '0');
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
    const prevArrowBtnText = `${dsI18n.t(
      'ds_forms:datepicker.PreviousMonth'
    )} ${dsI18n.t('ds_forms:datepicker.December')} 2023`;
    const prevButton = canvas.getByRole('button', {
      name: prevArrowBtnText,
    });
    const nextArrowBtnText = `${dsI18n.t(
      'ds_forms:datepicker.NextMonth'
    )} ${dsI18n.t('ds_forms:datepicker.February')} 2024`;
    const nextButton = canvas.getByRole('button', {
      name: nextArrowBtnText,
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

export const WithDisabledDates = {
  name: 'With DisabledDates',
  args: {
    ...defaultArgs,
    disabledDates: [
      new Date('2024-01-04'),
      new Date('2024-01-06'),
      new Date('2024-01-07'),
      new Date('2024-01-13'),
      new Date('2024-01-14'),
      new Date('2024-01-20'),
      new Date('2024-01-21'),
      new Date('2024-01-27'),
      new Date('2024-01-28'),
      new Date('2024-02-03T09:40:00'),
      new Date(2024, 1, 4),
    ],
    minDate: new Date('2023-12-01'),
    maxDate: new Date('2024-02-10'),
  },
  argTypes: {
    disabledDates: { table: { disable: false } },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarTable = canvas.getByRole('table');
    // eslint-disable-next-line testing-library/no-node-access
    const disabledButtons = calendarTable.querySelectorAll('button:disabled');
    await expect(disabledButtons.length).toBe(args.disabledDates?.length);
  },
} satisfies Story;
