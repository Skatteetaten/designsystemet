import { CheckboxGroup } from '@skatteetaten/ds-forms';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

const meta = {
  component: CheckboxGroup,
  title: 'Tester/CheckboxGroup',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: {
      table: { disable: true },
      control: { type: null },
    },
    errorMessage: { table: { disable: true } },
    hasError: {
      table: {
        disable: true,
      },
    },
    hideLegend: {
      table: {
        disable: true,
      },
    },
    legend: { table: { disable: true } },
    showRequiredMark: {
      table: {
        disable: true,
      },
    },
    // HTML
    disabled: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof CheckboxGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultLegendText = 'Velg det som passer deg';
const defaultErrorMessage = 'Velg minst ett av alternativene';
const defaultChildren = [
  <CheckboxGroup.Checkbox key={'checkboxGroupOption_1'}>
    {'Har barn over 16 år'}
  </CheckboxGroup.Checkbox>,
  <CheckboxGroup.Checkbox key={'checkboxGroupOption_2'}>
    {'Har barn under 12 år'}
  </CheckboxGroup.Checkbox>,
  <CheckboxGroup.Checkbox key={'checkboxGroupOption_4'}>
    {'Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov'}
  </CheckboxGroup.Checkbox>,
];
const childrenWithOneChecked = [
  <CheckboxGroup.Checkbox key={'checkboxGroupOption_1'} checked>
    {'Har barn over 16 år'}
  </CheckboxGroup.Checkbox>,
  <CheckboxGroup.Checkbox key={'checkboxGroupOption_2'}>
    {'Har barn under 12 år'}
  </CheckboxGroup.Checkbox>,
  <CheckboxGroup.Checkbox key={'checkboxGroupOption_4'}>
    {'Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov'}
  </CheckboxGroup.Checkbox>,
];

const defaultArgs = {
  legend: defaultLegendText,
  children: defaultChildren,
};

export const WithRef = {
  name: 'With Ref (FA1)',

  args: {
    ...defaultArgs,
    ref: (instance: HTMLFieldSetElement | null): void => {
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
    const fieldsetNode = canvas.getByRole('group');
    await expect(fieldsetNode).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
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
    const fieldsetNode = canvas.getByRole('group');
    await expect(fieldsetNode).toHaveAttribute('id', 'htmlid');
    await expect(fieldsetNode).toHaveClass('dummyClassname');
    await expect(fieldsetNode).toHaveAttribute('lang', 'nb');
    await expect(fieldsetNode).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A1, B1, B5)',

  args: {
    ...defaultArgs,
  },

  argTypes: {
    legend: { table: { disable: false } },
    children: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const fieldsetNode = canvas.getByRole('group');
    await expect(fieldsetNode).toBeInTheDocument();
    await expect(fieldsetNode.tagName).toBe('FIELDSET');
    const legendNode = canvas.getByText(defaultLegendText);
    await expect(legendNode).toBeInTheDocument();
    await expect(legendNode.tagName).toBe('LEGEND');
    const inputNodes = canvas.getAllByRole('checkbox');
    for (const input of inputNodes) {
      await expect(input).not.toHaveAttribute('aria-invalid');
      await expect(input).not.toBeRequired();
    }
  },
} satisfies Story;

export const LegendWithMarkup = {
  name: 'Legend With Markup (B1)',

  args: {
    ...defaultArgs,
    legend: (
      <>
        <Heading as={'h1'} level={3}>
          {'Dette er en Heading i legend'}
        </Heading>
        <Paragraph variant={'ingress'}>
          <em>{'Dette er en italic Paragraph med ingress variant i legend'}</em>
        </Paragraph>
      </>
    ),
  },

  argTypes: {
    legend: { table: { disable: false }, control: { type: null } },
  },
} satisfies Story;

export const LegendWithMarkupAndRequiredMark = {
  name: 'Legend With Markup and Required Mark (B1)',

  args: {
    ...defaultArgs,
    legend: (
      <>
        <Heading as={'h1'} level={3}>
          {'Dette er en Heading i legend'}
        </Heading>
        <Paragraph variant={'ingress'}>
          <em>{'Dette er en italic Paragraph med ingress variant i legend'}</em>
        </Paragraph>
      </>
    ),
    showRequiredMark: true,
  },

  argTypes: {
    legend: { table: { disable: false }, control: { type: null } },
    showRequiredMark: { table: { disable: false } },
  },
} satisfies Story;

export const WithHideLegend = {
  name: 'Without Legend (B1)',

  args: {
    ...defaultArgs,
    hideLegend: true,
  },

  argTypes: {
    hideLegend: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const legendNode = canvas.getByText(defaultLegendText);
    await expect(legendNode).toBeInTheDocument();
  },
} satisfies Story;

export const WithDisabled = {
  name: 'With Disabled (A1, B2)',

  args: {
    ...defaultArgs,
    disabled: true,
  },

  argTypes: {
    disabled: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const fieldsetNode = canvas.getByRole('group');
    await expect(fieldsetNode).toBeDisabled();
  },
} satisfies Story;

export const WithDisabledAndChecked = {
  name: 'With Disabled And Checked (A1)',

  args: {
    ...defaultArgs,
    children: childrenWithOneChecked,
    disabled: true,
  },

  argTypes: {
    disabled: { table: { disable: false } },
  },
} satisfies Story;

export const WithRequiredMark = {
  name: 'With Required Mark (A1, B3)',

  args: {
    ...defaultArgs,
    showRequiredMark: true,
  },

  argTypes: {
    showRequiredMark: { table: { disable: false } },
  },
} satisfies Story;

export const WithError = {
  name: 'With Error (A1, B5)',

  args: {
    ...defaultArgs,
    hasError: true,
    errorMessage: defaultErrorMessage,
  },

  argTypes: {
    hasError: { table: { disable: false } },
    errorMessage: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const errorMessageNode = canvas.getAllByRole('generic');
    await expect(errorMessageNode[16]).toBeInTheDocument();
    await expect(errorMessageNode[16]).toHaveAttribute('id');
    const inputNodes = canvas.getAllByRole('checkbox', {
      description: defaultErrorMessage,
    });
    for (const input of inputNodes) {
      await expect(input).toHaveAttribute('aria-invalid', 'true');
    }
  },
} satisfies Story;
