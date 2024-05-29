import { dsI18n } from '@skatteetaten/ds-core-utils';
import { WarningSVGpath } from '@skatteetaten/ds-icons';
import { Meta, StoryObj } from '@storybook/react';
import { expect, fireEvent, within } from '@storybook/test';

// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  getCommonOnHelpToggleStory,
  loremIpsumWithoutSpaces,
  wrapper,
} from './testUtils/storybook.testing.utils';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Help } from '../../../../../libs/ds-forms/src/Help/Help';
import { SystemSVGPaths } from '../utils/icon.systems';

const meta = {
  component: Help,
  title: 'Tester/Help (intern)',
  argTypes: {
    // Props
    description: { table: { disable: true } },
    hideHelp: { table: { disable: true } },
    helpText: { table: { disable: true } },
    helpSvgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    titleHelpSvg: { table: { disable: true } },
    targetId: { table: { disable: true } },
    // Events
    onHelpToggle: { table: { disable: true } },
  },
} satisfies Meta<typeof Help>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultDescription = 'En liten beskrivelse';
const defaultHelpText =
  'Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.';

export const Defaults = {
  name: 'Defaults',
  play: async ({ canvasElement }): Promise<void> => {
    // eslint-disable-next-line testing-library/no-node-access
    const helpButton = canvasElement.querySelector('button');
    await expect(helpButton).not.toBeInTheDocument();
  },
} satisfies Story;

export const WithHelptext = {
  name: 'With HelpText (FS-A1, FS-A5 delvis, FS-B2 delvis)',
  args: {
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
    const helpButton = canvas.getByRole('button');
    await expect(helpButton).toBeInTheDocument();
    await expect(helpButton).toHaveAttribute('aria-expanded', 'false');
    const helpSvg = canvas.getByLabelText(dsI18n.t('Shared:shared.Help'), {
      selector: 'svg',
    });
    await expect(helpSvg).toBeInTheDocument();
  },
} satisfies Story;

export const WithDescription = {
  name: 'With Description (FS-A5 delvis)',
  args: {
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

export const WithHelpTextAndDescription = {
  name: 'With HelpText And Description (FS-A5 delvis)',
  args: {
    helpText: defaultHelpText,
    description: defaultDescription,
  },
  argTypes: {
    helpText: { table: { disable: false } },
    description: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      focus: `${wrapper} > button`,
      click: `${wrapper} > button`,
    },
  },
} satisfies Story;

export const WithLongHelpTextAndDescription = {
  name: 'With Long HelpText And Description',
  args: {
    helpText: loremIpsumWithoutSpaces,
    description: loremIpsumWithoutSpaces,
  },
  argTypes: {
    helpText: { table: { disable: false } },
  },
  parameters: {
    viewport: {
      defaultViewport: '--mobile',
    },
    imageSnapshot: {
      click: `${wrapper} > button`,
    },
  },
} satisfies Story;

export const WithHelpSvgPathTitleHelpSvgAndTargetId = {
  name: 'With HelpSvgPath TitleHelpSvg And TargetId (FS-A5 delvis)',
  args: {
    helpText: defaultHelpText,
    helpSvgPath: WarningSVGpath,
    titleHelpSvg: 'Tooltip',
    targetId: 'storybook-root',
  },
  argTypes: {
    helpSvgPath: { table: { disable: false } },
    titleHelpSvg: { table: { disable: false } },
    targetId: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button');
    await expect(helpButton).toHaveAttribute(
      'aria-describedby',
      'storybook-root'
    );
    const svgNode = canvas.getByLabelText('Tooltip', { selector: 'svg' });
    await expect(svgNode).toBeInTheDocument();
  },
} satisfies Story;

export const WithHideHelp = {
  name: 'With HideHelp (FS-A7)',
  args: {
    helpText: defaultHelpText,
    description: defaultDescription,
    hideHelp: true,
  },
  argTypes: {
    hideHelp: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button');
    const descriptionNode = canvas.getByText(defaultDescription);
    await expect(helpButton).toBeInTheDocument();
    await expect(descriptionNode).toBeInTheDocument();
  },
} satisfies Story;

export const ClickHelpButton = {
  name: 'Click HelpButton On And Off (FS-A5 delvis, FS-B2 delvis)',
  args: {
    helpText: defaultHelpText,
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button');
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
    helpText: defaultHelpText,
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button');
    await fireEvent.click(helpButton);
    const closeButton = canvas.getByTitle(dsI18n.t('Shared:shared.Close'));
    await expect(closeButton).toBeInTheDocument();
    const helpText = canvas.getByText(defaultHelpText);
    await fireEvent.click(closeButton);
    await expect(helpText).not.toBeInTheDocument();
    await expect(helpButton).toHaveFocus();
  },
} satisfies Story;

export const WithHelpTextToggleEvent = getCommonOnHelpToggleStory<
  typeof meta
>() satisfies Story;
