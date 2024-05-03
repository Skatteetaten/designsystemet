import { useState } from 'react';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { CalendarSVGpath } from '@skatteetaten/ds-icons';
import {
  NavigationTile,
  NavigationTileProps,
} from '@skatteetaten/ds-navigation';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';

import { wrapper } from './testUtils/storybook.testing.utils';
import { SystemSVGPaths } from '../utils/icon.systems';

const elementId = 'htmlId';
const systemIconViewBox = '0 0 24 24';
const defaultTitle = 'Skatt';
const defaultDescription =
  'Skattekort, frikort, forskuddsskatt, skattemelding (selvangivelse), skatteoppgjør, skattelister. Tema og fradrag som hjelper deg til å få riktig skatt.';

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('link')).toHaveAttribute(
      attribute,
      expectedValue
    );
  };

const meta = {
  component: NavigationTile,
  title: 'Tester/NavigationTile',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    title: { table: { disable: true } },
    description: { table: { disable: true } },
    isExternal: { table: { disable: true } },
    hideLeftArrowIcon: { table: { disable: true } },
    svgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    // HTML
    href: { table: { disable: true } },
    target: { table: { disable: true } },
    download: { table: { disable: true } },
    // Aria
    ariaDescribedby: { table: { disable: true } },
    // Events
    onBlur: { table: { disable: true } },
    onClick: { table: { disable: true } },
    onFocus: { table: { disable: true } },
  },
} as Meta<typeof NavigationTile>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof NavigationTile> = (args) => (
  <NavigationTile {...args} onClick={(e): void => e.preventDefault()} />
);

const defaultArgs: NavigationTileProps = {
  title: defaultTitle,
  href: '#storybook-root',
  description: defaultDescription,
};

export const WithRef = {
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLAnchorElement | null): void => {
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
  play: verifyAttribute('id', 'dummyIdForwardedFromRef'),
} satisfies Story;

export const WithAttributes = {
  render: Template,
  name: 'With Attributes(FA2-5)',
  args: {
    ...defaultArgs,
    id: elementId,
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
    const link = canvas.getByRole('link');
    await expect(link).toHaveClass('dummyClassname');
    await expect(link).toHaveAttribute('id', elementId);
    await expect(link).toHaveAttribute('lang', 'nb');
    await expect(link).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  render: Template,
  name: 'Defaults (A???)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    href: { table: { disable: false } },
    title: { table: { disable: false } },
    description: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      hover: `${wrapper} > a`,
      focus: `${wrapper} > a`,
      click: `${wrapper} > a`,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    await expect(link).not.toHaveAttribute('rel');
    await expect(link).not.toHaveAttribute('target');
  },
} satisfies Story;

export const WithIcon = {
  render: Template,
  name: 'With Icon (A4, B2)',
  args: {
    ...defaultArgs,
    svgPath: CalendarSVGpath,
  },
  argTypes: {
    svgPath: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    // eslint-disable-next-line testing-library/no-node-access
    const svg = link.querySelector('svg');
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
    await expect(svg).toHaveAttribute('viewBox', systemIconViewBox);
  },
} satisfies Story;

export const WithExternalIcon = {
  render: Template,
  name: 'With External Icon (A5)',
  args: {
    ...defaultArgs,
    isExternal: true,
  },
  argTypes: {
    isExternal: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    // eslint-disable-next-line testing-library/no-node-access
    const svg = link.querySelector('svg');
    await expect(svg).toHaveAttribute(
      'aria-label',
      dsI18n.t('ds_buttons:shared.ExternalIcon')
    );
    await expect(svg).toHaveAttribute('viewBox', systemIconViewBox);
  },
} satisfies Story;

export const WithTarget = {
  render: Template,
  name: 'With Target (A2)',
  args: {
    ...defaultArgs,
    target: '_blank',
  },
  argTypes: {
    target: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    expect(link).toHaveAttribute('rel', 'noreferrer');
    expect(link).toHaveAttribute('target', '_blank');
  },
} satisfies Story;

export const WithAriaDescribedby = {
  render: Template,
  name: 'With AriaDescribedby (B3)',
  args: {
    ...defaultArgs,
    ariaDescribedby: elementId,
  },
  argTypes: {
    ariaDescribedby: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: verifyAttribute('aria-describedby', elementId),
} satisfies Story;

const nyLinkText = 'Ny tittel';
const OnClickTemplate: StoryFn<typeof NavigationTile> = (args) => {
  const [linkText, setLinkText] = useState(defaultTitle);
  return (
    <NavigationTile
      {...args}
      title={linkText}
      onClick={(e): void => {
        e.preventDefault();
        setLinkText(nyLinkText);
        args.onClick && args.onClick(e);
      }}
    />
  );
};

export const WithOnClick = {
  render: OnClickTemplate,
  name: 'With onClick (A3 delvis)',
  args: {
    ...defaultArgs,
    onClick: fn(),
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    await expect(link).toHaveTextContent(
      'Klikk på lenken for å teste onClick event'
    );
    await userEvent.click(link);
    await expect(link).toHaveTextContent(
      'Ny lenketekst slik at vi ser at event fungerte'
    );
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
} satisfies Story;
