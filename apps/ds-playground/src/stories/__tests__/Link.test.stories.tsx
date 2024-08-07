import { useState } from 'react';

import { Link, LinkProps } from '@skatteetaten/ds-buttons';
import { dsI18n, linkColorArr } from '@skatteetaten/ds-core-utils';
import { AddOutlineSVGpath, CalendarSVGpath } from '@skatteetaten/ds-icons';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';

import { wrapper } from './testUtils/storybook.testing.utils';
import { SystemSVGPaths } from '../utils/icon.systems';

const elementId = 'htmlId';
const systemIconViewBox = '0 0 24 24';
const defaultLinkText = 'Er du pendler?';

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
  component: Link,
  title: 'Tester/Link',
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
    isExternal: { table: { disable: true } },
    color: {
      table: { disable: true },
      options: [undefined, ...linkColorArr],
      control: 'inline-radio',
    },
    svgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    title: { table: { disable: true } },
    // HTML
    href: { table: { disable: true } },
    target: { table: { disable: true } },
    download: { table: { disable: true } },
    // Aria
    ariaCurrent: { table: { disable: true } },
    ariaDescribedby: { table: { disable: true } },
    // Events
    onBlur: { table: { disable: true } },
    onClick: { table: { disable: true } },
    onFocus: { table: { disable: true } },
  },
} as Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Link> = (args) => (
  <Link {...args} onClick={(e): void => e.preventDefault()}>
    {/* eslint-disable-next-line testing-library/no-node-access */}
    {args.children}
  </Link>
);

const defaultArgs: LinkProps = {
  href: '#storybook-root',
  children: defaultLinkText,
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
  name: 'Defaults (A1 delvis, A2, A3 delvis, B1)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    href: { table: { disable: false } },
    children: { table: { disable: false } },
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
    // eslint-disable-next-line testing-library/no-node-access
    const svg = link.querySelector('svg');
    await expect(svg).not.toBeInTheDocument();
    expect(link).toHaveTextContent(defaultLinkText);
  },
} satisfies Story;

export const WithLongText = {
  render: Template,
  name: 'With Long Text (A1 delvis)',
  args: {
    ...defaultArgs,
    children:
      'Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert uansett om ikon eller ikke.',
  },
  argTypes: {
    children: { table: { disable: false } },
  },
} satisfies Story;

export const WithLongTextIconAndExternalIcon = {
  render: Template,
  name: 'With Long Text And Icons (A1 delvis)',
  args: {
    ...defaultArgs,
    isExternal: true,
    svgPath: CalendarSVGpath,
    children:
      'Denne lenken har en veldig lang tekst med ikon på venstre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert.',
  },
  argTypes: {
    isExternal: { table: { disable: false } },
    svgPath: { table: { disable: false } },
    children: { table: { disable: false } },
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

export const WithColor = {
  render: Template,
  name: 'With Color (A6)',
  args: {
    ...defaultArgs,
    color: 'white',
    isExternal: true,
    svgPath: AddOutlineSVGpath,
  },
  argTypes: {
    color: {
      table: { disable: false },
    },
  },
  parameters: {
    backgrounds: {
      default: 'themePrimary',
    },
    imageSnapshot: {
      hover: `${wrapper} > a`,
      focus: `${wrapper} > a`,
    },
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

export const WithDownload = {
  render: Template,
  name: 'With Download',
  args: {
    ...defaultArgs,
    download: 'testFil.txt',
  },
  argTypes: {
    download: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    expect(link).toHaveAttribute('download', 'testFil.txt');
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

export const WithAriaCurrent = {
  name: 'With AriaCurrent',
  args: {
    ...defaultArgs,
    ariaCurrent: true,
  },
  argTypes: {
    ariaCurrent: { table: { disable: false } },
  },
  play: verifyAttribute('aria-current', 'true'),
} satisfies Story;

const nyLinkText = 'Ny lenketekst slik at vi ser at event fungerte';
const OnClickTemplate: StoryFn<typeof Link> = (args) => {
  const [linkText, setLinkText] = useState(
    'Klikk på lenken for å teste onClick event'
  );
  return (
    <Link
      {...args}
      onClick={(e): void => {
        e.preventDefault();
        setLinkText(nyLinkText);
        args.onClick && args.onClick(e);
      }}
    >
      {linkText}
    </Link>
  );
};

export const WithOnClick = {
  render: OnClickTemplate,
  name: 'With onClick (A3 delvis)',
  args: {
    ...defaultArgs,
    svgPath: CalendarSVGpath,
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
