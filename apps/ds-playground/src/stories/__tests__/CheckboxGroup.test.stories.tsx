import { Meta, StoryObj } from '@storybook/react';
import { expect, fireEvent, within } from '@storybook/test';

import { CheckboxGroup } from '@skatteetaten/ds-forms';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import { SystemSVGPaths } from '../utils/icon.systems';

const meta = {
  component: CheckboxGroup,
  title: 'Tester/CheckboxGroup',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    classNames: { table: { disable: true } },
    children: {
      table: { disable: true },
      control: { disable: true },
    },
    description: { table: { disable: true } },
    errorMessage: { table: { disable: true } },
    helpSvgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    helpText: { table: { disable: true } },
    hideLegend: { table: { disable: true } },
    legend: { table: { disable: true } },
    showRequiredMark: { table: { disable: true } },
    titleHelpSvg: { table: { disable: true } },
    // HTML
    disabled: { table: { disable: true } },
    form: { table: { disable: true } },
    // Events
    onHelpToggle: { table: { disable: true } },
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
    form: '123form',
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
    form: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const fieldsetNode = canvas.getByRole('group');
    await expect(fieldsetNode).toHaveAttribute('id', 'htmlid');
    await expect(fieldsetNode).toHaveClass('dummyClassname');
    await expect(fieldsetNode).toHaveAttribute('lang', 'nb');
    await expect(fieldsetNode).toHaveAttribute('data-testid', '123ID');
    await expect(fieldsetNode).toHaveAttribute('form', '123form');
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
    const legendNode = canvas.getAllByText(defaultLegendText)[0];
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
    legend: { table: { disable: false }, control: { disable: true } },
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
    legend: { table: { disable: false }, control: { disable: true } },
    showRequiredMark: { table: { disable: false } },
  },
} satisfies Story;

export const WithHideLegend = {
  name: 'With HideLegend (B1)',
  args: {
    ...defaultArgs,
    hideLegend: true,
  },
  argTypes: {
    hideLegend: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const legendNode = canvas.getAllByText(defaultLegendText)[0];
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
    errorMessage: defaultErrorMessage,
  },
  argTypes: {
    errorMessage: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const errorMessageContainer = canvas.getAllByRole('generic')[17];
    await expect(errorMessageContainer).toBeInTheDocument();
    await expect(errorMessageContainer).toHaveAttribute('id');
    const inputNodes = canvas.getAllByRole('checkbox', {
      description: defaultErrorMessage,
    });
    for (const input of inputNodes) {
      await expect(input).toHaveAttribute('aria-invalid', 'true');
    }
  },
} satisfies Story;

export const WithHelptext = {
  name: 'With HelpText (A1)',
  args: {
    ...defaultArgs,
    helpText: 'Vi trenger å vite om du har barn.',
  },
  argTypes: {
    helpText: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button', {
      description: defaultLegendText,
    });
    await expect(helpButton).toBeInTheDocument();
    await fireEvent.click(helpButton);
  },
} satisfies Story;

export const WithDescription = {
  name: 'With Description (A1)',
  args: {
    ...defaultArgs,
    description: 'Vi trenger å vite om du har barn.',
  },
  argTypes: {
    description: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const description = canvas.getByText('Vi trenger å vite om du har barn.');
    await expect(description).toBeInTheDocument();
  },
} satisfies Story;

export const WithHelpToggleEvent = {
  name: 'With onHelpToggle Event',
  args: {
    ...defaultArgs,
    helpText: 'Hjelpetekst',
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

export const WithCustomClassNames = {
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      legend: 'dummyClassname',
      errorMessage: 'dummyClassname',
      description: 'dummyClassname',
      helpText: 'dummyClassname',
    },
    description: 'beskrivelse',
    helpText: 'HJEEEEEEELP',
    errorMessage: defaultErrorMessage,
  },
  argTypes: {
    classNames: {
      table: { disable: false },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    const errorMessageContainer = canvasElement.querySelector(
      '[id^=checkboxGroupErrorId]>div'
    );
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
    await expect(canvas.getByText('beskrivelse')).toHaveClass('dummyClassname');
  },
} satisfies Story;
