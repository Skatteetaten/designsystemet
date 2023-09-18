import { WarningSVGpath } from '@skatteetaten/ds-icons';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { fireEvent, within } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { LabelWithHelp } from '../../../../../libs/ds-forms/src/LabelWithHelp/LabelWithHelp';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { LabelWithHelpProps } from '../../../../../libs/ds-forms/src/LabelWithHelp/LabelWithHelp.types';
import { SystemSVGPaths } from '../utils/icon.systems';

const meta = {
  component: LabelWithHelp,
  title: 'Tester/LabelWithHelp (intern)',
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
    helpText: { table: { disable: true } },
    helpSvgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    hideLabel: { table: { disable: true } },
    showRequiredMark: { table: { disable: true } },
    titleHelpSvg: { table: { disable: true } },
    // HTML
    htmlFor: { table: { disable: true } },
  },
} satisfies Meta<typeof LabelWithHelp>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultDescription = 'Kort hjelpetekst';
const defaultHelpText =
  'Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.';
const defaultChildrenText = 'Ledetekst';
const defaultArgs: LabelWithHelpProps = {
  children: defaultChildrenText,
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLLabelElement | null): void => {
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
    const label = canvas.getByText(defaultChildrenText);
    await expect(label).toHaveAttribute('id', 'dummyIdForwardedFromRef');
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
    const label = canvas.getByText(defaultChildrenText);
    await expect(label).toHaveAttribute('id', 'htmlid');
    await expect(label).toHaveClass('dummyClassname');
    await expect(label).toHaveAttribute('lang', 'nb');
    await expect(label).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Default (FS-A1, FS-A2, FS-A4, FS-B1)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    children: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const label = canvas.getByText(defaultChildrenText);
    await expect(label.tagName).toBe('LABEL');
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

export const WithHideLabel = {
  name: 'With HideLabel (FS-A7)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    helpText: defaultHelpText,
    hideLabel: true,
  },
  argTypes: {
    hideLabel: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const label = canvas.getByText(defaultChildrenText);
    const descriptionNode = canvas.getByText(defaultDescription);
    const helpButtonNode = canvas.getByRole('button');
    await expect(label).toBeInTheDocument();
    await expect(descriptionNode).toBeInTheDocument();
    await expect(helpButtonNode).toBeInTheDocument();
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
      hover: `${wrapper} > button`,
      focus: `${wrapper} > button`,
      click: `${wrapper} > button`,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button', {
      description: defaultChildrenText,
    });
    await expect(helpButton).toBeInTheDocument();
    await expect(helpButton).toHaveAttribute('aria-expanded', 'false');
    const helpSvg = canvas.getByLabelText('Hjelp', { selector: 'svg' });
    await expect(helpSvg).toBeInTheDocument();
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
      description: defaultChildrenText,
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
      description: defaultChildrenText,
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
