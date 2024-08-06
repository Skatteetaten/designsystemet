import { useState } from 'react';

import { dsI18n, headingAsArr } from '@skatteetaten/ds-core-utils';
import { AccountEnkSVGpath, CalendarSVGpath } from '@skatteetaten/ds-icons';
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
    classNames: { table: { disable: true } },
    title: { control: 'text', table: { disable: true } },
    titleAs: { table: { disable: true } },
    description: { control: 'text', table: { disable: true } },
    isExternal: { table: { disable: true } },
    hideArrowIcon: { table: { disable: true } },
    size: { table: { disable: true } },
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
    ariaLabel: { table: { disable: true } },
    // Events
    onClick: { table: { disable: true } },
  },
} as Meta<typeof NavigationTile>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof NavigationTile> = (args) => (
  <NavigationTile {...args} onClick={(e): void => e.preventDefault()} />
);

const newTitleText = 'Ny tittel';
const OnClickTemplate: StoryFn<typeof NavigationTile> = (args) => {
  const [linkText, setLinkText] = useState(defaultTitle);
  return (
    <NavigationTile
      {...args}
      title={linkText}
      onClick={(e): void => {
        e.preventDefault();
        setLinkText(newTitleText);
        args.onClick && args.onClick(e);
      }}
    />
  );
};

const TemplateWithAllHeadings: StoryFn<typeof NavigationTile> = (args) => (
  <nav className={'flex flexColumn gapXs'}>
    {headingAsArr.map((headingLevel, item) => {
      return (
        <NavigationTile
          key={`level_${item}`}
          {...args}
          titleAs={headingLevel}
          title={`Heading ${headingLevel}`}
        />
      );
    })}
  </nav>
);

const TemplateWithMultipleTiles: StoryFn<typeof NavigationTile> = (args) => (
  <nav className={'flex gapS'}>
    <NavigationTile {...args} />
    <NavigationTile {...args} />
  </nav>
);

const defaultArgs: NavigationTileProps = {
  title: defaultTitle,
  href: '#storybook-root',
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
  name: 'Defaults (A1, A7)',
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
    const title = canvas.getByRole('heading');
    await expect(link).not.toHaveAttribute('rel');
    await expect(link).not.toHaveAttribute('target');
    await expect(title.tagName).toBe('H2');
  },
} satisfies Story;

export const WithIcon = {
  render: Template,
  name: 'With Icon (A2, B2)',
  args: {
    ...defaultArgs,
    svgPath: CalendarSVGpath,
  },
  argTypes: {
    svgPath: { table: { disable: false } },
    size: { table: { disable: false } },
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
  name: 'With External Icon (A6)',
  args: {
    ...defaultArgs,
    isExternal: true,
  },
  argTypes: {
    isExternal: { table: { disable: false } },
    size: { table: { disable: false } },
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

export const WithHiddenArrowIcon = {
  render: Template,
  name: 'With Hidden Arrow Icon (A5)',
  args: {
    ...defaultArgs,
    hideArrowIcon: true,
  },
  argTypes: {
    hideArrowIcon: { table: { disable: false } },
    size: { table: { disable: false } },
  },
} satisfies Story;

export const WithDescription = {
  render: Template,
  name: 'With Description (A4)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
  },
  argTypes: {
    isExternal: { table: { disable: false } },
  },
} satisfies Story;

export const WithSizeMedium = {
  render: Template,
  name: 'With Size Medium (A1)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    size: 'medium',
  },
} satisfies Story;

export const WithSizeLarge = {
  render: Template,
  name: 'With Size Large (A1)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    size: 'large',
  },
} satisfies Story;

export const WithSizeExtraLarge = {
  render: Template,
  name: 'With Size ExtraLarge (A1)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    size: 'extraLarge',
    svgPath: AccountEnkSVGpath,
  },
} satisfies Story;

export const WithTarget = {
  render: Template,
  name: 'With Target (A8)',
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
  name: 'With AriaDescribedby (B4)',
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
    await expect(link).toHaveTextContent(defaultTitle);
    await userEvent.click(link);
    await expect(link).toHaveTextContent('Ny tittel');
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
} satisfies Story;

export const WithTitleAs = {
  render: TemplateWithAllHeadings,
  name: 'With TitleAs (B3)',
  args: {
    ...defaultArgs,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const headings = canvas.getAllByRole('heading');
    for (const [index, heading] of headings.entries()) {
      await expect(heading.tagName).toBe(
        headingAsArr[index].toLocaleUpperCase()
      );
    }
  },
} satisfies Story;

export const WithTilesInColumns = {
  render: TemplateWithMultipleTiles,
  name: 'With Tiles in Columns (A9)',
  args: {
    ...defaultArgs,
    size: 'extraLarge',
    svgPath: AccountEnkSVGpath,
  },
  argTypes: {
    size: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const WithCustomClassNames = {
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    classNames: {
      container: 'dummyClassname',
      title: 'dummyClassname',
      description: 'dummyClassname',
    },
  },
  argTypes: {
    classNames: {
      table: { disable: false },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('link');
    const title = canvas.getByText(defaultTitle);
    const description = canvas.getByText(defaultDescription);

    await expect(container).toHaveClass('dummyClassname');
    await expect(title).toHaveClass('dummyClassname');
    await expect(description).toHaveClass('dummyClassname');
  },
} satisfies Story;
