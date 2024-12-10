import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { expect, fireEvent, fn, within } from '@storybook/test';

import { InlineButton, Link } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { HelpOutlineSVGpath, SettingsSVGpath } from '@skatteetaten/ds-icons';
import { TopBannerInternal } from '@skatteetaten/ds-layout';

import { wrapper } from './testUtils/storybook.testing.utils';
import customLogo from '../../assets/custom-mobile-logo.svg';

const meta = {
  component: TopBannerInternal,
  title: 'Tester/TopBanner/TopBannerInternal',
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
      control: 'text',
      table: { disable: true },
    },
    title: { table: { disable: true } },
    description: { table: { disable: true } },
    skipLink: { table: { disable: true } },
    user: { table: { disable: true } },
    isUnderConstruction: { table: { disable: true } },
    constructionBandTitle: { table: { disable: true } },
    logo: { table: { disable: true } },
    logoHref: { table: { disable: true } },
    logoAltText: { table: { disable: true } },
    // Events
    onLogoClick: { table: { disable: true } },
  },
  args: {
    logoHref: '#',
    logoAltText: 'til startsiden kakeportalen',
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TopBannerInternal>;
export default meta;
type Story = StoryObj<typeof meta>;

const skipLinkText = dsI18n.t('ds_layout:topbanner.SkipLinkText');

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLElement | null): void => {
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
    const header = canvas.getByRole('banner');
    await expect(header).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    id: 'htmlId',
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
    const header = canvas.getByRole('banner');
    await expect(header).toHaveClass('dummyClassname');
    await expect(header).toHaveAttribute('id', 'htmlId');
    await expect(header).toHaveAttribute('lang', 'nb');
    await expect(header).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const WithDefaults = {
  name: 'With Defaults (B1)',
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole('banner');
    await expect(header.tagName).toBe('HEADER');

    await expect(header.firstChild).toHaveAttribute('href');
    const skipLink = canvas.getByText(skipLinkText);
    await expect(skipLink).toBeInTheDocument();
  },
} satisfies Story;

export const WithChildren = {
  name: 'With Children (A1, A4)',
  args: {
    children: (
      <>
        <Link
          className={'marginL'}
          svgPath={HelpOutlineSVGpath}
          href={'/hjelp'}
          color={'white'}
        >
          {'Hjelp'}
        </Link>
        <InlineButton className={'marginL'} svgPath={SettingsSVGpath}>
          {'Tilpass løsningen'}
        </InlineButton>
        <InlineButton className={'marginL'} svgPath={SettingsSVGpath}>
          {'Meld feil'}
        </InlineButton>
      </>
    ),
    user: 'Johansen, Krystall Pepsi',
    title: 'Saksbehandlingsløsning med en overskrift som er lang',
    description: 'En sekundær overskrift som også er lang',
  },
  argTypes: {
    children: { table: { disable: false } },
  },
  parameters: {
    a11y: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('Hjelp');
    expect(label).toBeInTheDocument();
  },
} satisfies Story;

export const SkipLinkFocusedMobileScreen = {
  name: 'SkipLink Focused On Mobile Screen (B2)',
  parameters: {
    viewport: {
      defaultViewport: '--mobile',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const skipLink = canvas.getByRole('link', {
      name: skipLinkText,
    });
    skipLink.focus();
  },
} satisfies Story;

export const SkipLinkFocusedBreakpointL = {
  name: 'SkipLink Focused On Breakpoint-l (B2)',
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-l',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const skipLink = canvas.getByRole('link', {
      name: skipLinkText,
    });
    skipLink.focus();
  },
} satisfies Story;

export const WithTitleDescriptionUser = {
  name: 'With Title description (A4)',
  args: {
    title: 'kakeportalen',
    description: 'kaka er en løgn',
    user: 'Sandra Saksbehandler',
  },
  argTypes: {
    title: { table: { disable: false } },
    description: { table: { disable: false } },
    user: { table: { disable: false } },
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-l',
    },
    imageSnapshot: {
      focus: `${wrapper} > header > div > div > a`,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const title = canvas.getByText('kakeportalen');
    const description = canvas.getByText('kaka er en løgn');
    await expect(title).toBeInTheDocument();
    await expect(description).toBeInTheDocument();
  },
} satisfies Story;

export const WithLongTitleDescriptionMobile = {
  name: 'With Long Title description Username (A2, A4, A7)',
  argTypes: {
    title: { table: { disable: false } },
    description: { table: { disable: false } },
    user: { table: { disable: false } },
  },
  args: {
    title: 'kakeportalen '.repeat(4),
    description: 'kaka er en løgn'.repeat(4),
    user: 'Sandra Saksbehandler',
  },
  parameters: {
    viewport: {
      defaultViewport: '--mobile',
    },
  },
} satisfies Story;

export const WithCustomLogo = {
  name: 'With Custom Logo (A5)',
  argTypes: {
    logo: { table: { disable: false }, control: { disable: true } },
  },
  args: {
    logo: customLogo,
  },
} satisfies Story;

export const WithDemoMode = {
  name: 'With Demo Mode (A8)',
  argTypes: {
    isUnderConstruction: { table: { disable: false } },
    constructionBandTitle: { table: { disable: false } },
  },
  args: {
    isUnderConstruction: true,
    constructionBandTitle: 'demo',
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const title = canvas.getByText('demo');
    await expect(title).toBeInTheDocument();
  },
} satisfies Story;

export const WithLogoClick = {
  name: 'With onClickLogo LogoAltText LogoHref (A6)',
  argTypes: {
    isUnderConstruction: { table: { disable: false } },
    constructionBandTitle: { table: { disable: false } },
  },
  args: {
    onLogoClick: fn(),
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement, args }): Promise<void> => {
    const canvas = within(canvasElement);
    const logo = canvas.getByAltText('til startsiden kakeportalen');
    await fireEvent.click(logo);

    await expect(logo).toBeInTheDocument();
    await expect(args.onLogoClick).toHaveBeenCalledOnce();
  },
} satisfies Story;

export const WithCustomTheme = {
  name: 'With Custom Theme (A3)',
  argTypes: {
    className: {
      table: { disable: false },
      options: ['', 'dummyCustomTheme'],
    },
  },
  args: {
    className: 'dummyCustomTheme',
  },
  render: (args): JSX.Element => <TopBannerInternal {...args} />,
} satisfies Story;
