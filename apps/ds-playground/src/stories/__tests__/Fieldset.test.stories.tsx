import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Fieldset, FieldsetProps } from '@skatteetaten/ds-forms';
import { WarningSVGpath } from '@skatteetaten/ds-icons';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import {
  loremIpsumWithoutSpaces,
  wrapper,
} from './testUtils/storybook.testing.utils';
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
    classNames: { table: { disable: true } },
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
    form: { table: { disable: true } },
    // Events
    onHelpToggle: { table: { disable: true } },
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
    const fieldset = canvas.getByRole('group');
    await expect(fieldset).toHaveAttribute('id', 'htmlid');
    await expect(fieldset).toHaveClass('dummyClassname');
    await expect(fieldset).toHaveAttribute('lang', 'nb');
    await expect(fieldset).toHaveAttribute('data-testid', '123ID');
    await expect(fieldset).toHaveAttribute('form', '123form');
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
      control: { disable: true },
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
    const legend = canvas.getAllByText(defaultLegendText)[0];
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

export const WithHelpTextSvgPathAndTitle = {
  name: 'With HelpText HelpSvgPath And TitleHelpSvg (FS-A1, FS-A5 delvis, FS-B2 delvis)',
  args: {
    ...defaultArgs,
    helpText: defaultHelpText,
    helpSvgPath: WarningSVGpath,
    titleHelpSvg: 'Tooltip',
  },
  argTypes: {
    helpText: { table: { disable: false } },
    helpSvgPath: { table: { disable: false } },
    titleHelpSvg: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      click: `${wrapper} > fieldset > button`,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button', {
      description: defaultLegendText,
    });
    await expect(helpButton).toBeInTheDocument();
    const svgNode = canvas.getByLabelText('Tooltip', { selector: 'svg' });
    await expect(svgNode).toBeInTheDocument();
    const legend = canvas.getAllByText(defaultLegendText)[0];
    await expect(helpButton).toHaveAttribute('aria-describedby', legend.id);
  },
} satisfies Story;

export const WithLongLegend = {
  name: 'With Long Legend',
  args: {
    ...defaultArgs,
    legend: loremIpsumWithoutSpaces,
  },
  argTypes: {
    legend: { table: { disable: false } },
  },
  parameters: {
    viewport: {
      defaultViewport: '--mobile',
    },
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
    },
  },
  argTypes: {
    classNames: {
      table: { disable: false },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const legend = canvas.getAllByText(defaultLegendText)[1];
    await expect(legend).toHaveClass('dummyClassname');
  },
} satisfies Story;
