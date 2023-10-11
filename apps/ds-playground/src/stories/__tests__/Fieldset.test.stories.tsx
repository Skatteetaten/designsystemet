import { Fieldset, FieldsetProps } from '@skatteetaten/ds-forms';
import { WarningSVGpath } from '@skatteetaten/ds-icons';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { fireEvent, within } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';
import { SystemSVGPaths } from '../utils/icon.systems';

const meta = {
  component: Fieldset,
  title: 'Tester/Fieldset',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    description: { table: { disable: true } },
    hasSpacing: { table: { disable: true } },
    helpText: { table: { disable: true } },
    helpSvgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    hideLegend: { table: { disable: true } },
    legend: { table: { disable: true } },
    showRequiredMark: { table: { disable: true } },
    titleHelpSvg: { table: { disable: true } },
    // HTML
    disabled: { table: { disable: true } },
  },
} satisfies Meta<typeof Fieldset>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultDescription = 'Kort hjelpetekst';
const defaultHelpText =
  'Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.';
const defaultLegendText = 'Ledetekst';
const defaultArgs: FieldsetProps = {
  legend: defaultLegendText,
  children: <div>{'Innhold'}</div>,
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
    const fieldset = canvas.getByRole('group');
    await expect(fieldset).toHaveAttribute('id', 'dummyIdForwardedFromRef');
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
    const fieldset = canvas.getByRole('group');
    await expect(fieldset).toHaveAttribute('id', 'htmlid');
    await expect(fieldset).toHaveClass('dummyClassname');
    await expect(fieldset).toHaveAttribute('lang', 'nb');
    await expect(fieldset).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Default (FS-A1, FS-A2, FS-A4, A2, A3, B1)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    legend: { table: { disable: false } },
    children: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const fieldset = canvas.getByRole('group');
    await expect(fieldset.tagName).toBe('FIELDSET');
    // eslint-disable-next-line testing-library/no-node-access
    await expect(fieldset.firstElementChild?.tagName).toBe('LEGEND');
  },
} satisfies Story;

export const WithDescription = {
  name: 'With Description (FS-A3)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
  },
  argTypes: {
    description: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const descriptionNode = canvas.getByText(defaultDescription);
    await expect(descriptionNode).toBeInTheDocument();
  },
} satisfies Story;

export const WithShowRequiredMark = {
  name: 'With ShowRequiredMark (FS-A4)',
  args: {
    ...defaultArgs,
    showRequiredMark: true,
  },
  argTypes: {
    showRequiredMark: { table: { disable: false } },
  },
} satisfies Story;

export const WithShowRequiredMarkAndLegend = {
  name: 'With ShowRequiredMark And Legend Contains Markup (FS-A4)',
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
    legend: {
      table: { disable: true },
      control: { type: null },
    },
    showRequiredMark: { table: { disable: false } },
  },
} satisfies Story;

export const WithHideLegend = {
  name: 'With HideLegend (FS-A7)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    helpText: defaultHelpText,
    hideLegend: true,
  },
  argTypes: {
    hideLegend: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const legend = canvas.getByText(defaultLegendText);
    const descriptionNode = canvas.getByText(defaultDescription);
    const helpButtonNode = canvas.getByRole('button');
    await expect(legend).toBeInTheDocument();
    await expect(descriptionNode).toBeInTheDocument();
    await expect(helpButtonNode).toBeInTheDocument();
  },
} satisfies Story;

export const WithSpacing = {
  name: 'With Spacing (A2)',
  args: {
    ...defaultArgs,
    hasSpacing: true,
  },
  argTypes: {
    hasSpacing: { table: { disable: false } },
  },
} satisfies Story;

export const WithDisabled = {
  name: 'With Disabled (A4)',
  args: {
    ...defaultArgs,
    disabled: true,
  },
  argTypes: {
    disabled: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const fieldset = canvas.getByRole('group');
    await expect(fieldset).toBeDisabled();
  },
} satisfies Story;

export const WithHelpText = {
  name: 'With HelpText (FS-A1, FS-A5 delvis, FS-B2 delvis)',
  args: {
    ...defaultArgs,
    helpText: defaultHelpText,
  },
  argTypes: {
    helpText: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      focus: `${wrapper} > fieldset > button`,
      click: `${wrapper} > fieldset > button`,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button', {
      description: defaultLegendText,
    });
    await expect(helpButton).toBeInTheDocument();
    await expect(helpButton).toHaveAttribute('aria-expanded', 'false');
    const legend = canvas.getByText(defaultLegendText);
    await expect(helpButton).toHaveAttribute('aria-describedby', legend.id);
    const helpSvg = canvas.getByLabelText('Hjelp', { selector: 'svg' });
    await expect(helpSvg).toBeInTheDocument();
  },
} satisfies Story;

export const WithHelpTextAndDescription = {
  name: 'With HelpText And Description (A1)',
  args: {
    ...defaultArgs,
    helpText:
      'Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.',
    description: 'En liten beskrivelse tekst',
  },
  argTypes: {
    helpText: { table: { disable: false } },
    description: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      focus: `${wrapper} > fieldset > button`,
      click: `${wrapper} > fieldset > button`,
    },
  },
} satisfies Story;

export const WithHelpSvgPath = {
  name: 'With HelpSvgPath (FS-A5 delvis)',
  args: {
    ...defaultArgs,
    helpText: defaultHelpText,
    helpSvgPath: WarningSVGpath,
  },
  argTypes: {
    helpSvgPath: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const ClickHelpButton = {
  name: 'Click HelpButton On And Off (FS-A5 delvis, FS-B2 delvis)',
  args: {
    ...defaultArgs,
    helpText: defaultHelpText,
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button', {
      description: defaultLegendText,
    });
    await expect(helpButton).toHaveAttribute('aria-expanded', 'false');
    await fireEvent.click(helpButton);
    await expect(helpButton).toHaveAttribute('aria-expanded', 'true');
    const helpText = canvas.getByText(defaultHelpText);
    await expect(helpText).toBeInTheDocument();
    await fireEvent.click(helpButton);
    await expect(helpText).not.toBeInTheDocument();
    await expect(helpButton).toHaveAttribute('aria-expanded', 'false');
  },
} satisfies Story;

export const ClickCloseButton = {
  name: 'Close HelpText With CloseButton (FS-A5 delvis, FS-A6, FS-B2 delvis)',
  args: {
    ...defaultArgs,
    helpText: defaultHelpText,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button', {
      description: defaultLegendText,
    });
    await fireEvent.click(helpButton);
    const closeButton = canvas.getByTitle('Lukk');
    await expect(closeButton).toBeInTheDocument();
    const helpText = canvas.getByText(defaultHelpText);
    await fireEvent.click(closeButton);
    await expect(helpText).not.toBeInTheDocument();
    await expect(helpButton).toHaveFocus();
  },
} satisfies Story;
