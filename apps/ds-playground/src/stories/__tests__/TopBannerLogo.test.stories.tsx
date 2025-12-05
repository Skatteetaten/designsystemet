import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fireEvent, fn, waitFor, within } from 'storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerLogo } from '../../../../../libs/ds-layout/src/TopBannerExternal/TopBannerLogo/TopBannerLogo';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerLogoProps } from '../../../../../libs/ds-layout/src/TopBannerExternal/TopBannerLogo/TopBannerLogo.types';
import customLogo from '../../assets/custom-logo.svg';
import customMobileLogo from '../../assets/custom-mobile-logo.svg';

const meta = {
  component: TopBannerLogo,
  title: 'Tester/TopBannerExternal/Logo (intern)',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    as: {
      table: { disable: true },
      control: 'inline-radio',
    },
    logo: {
      table: { disable: true },
      control: 'select',
      options: ['', customLogo],
    },
    mobileLogo: {
      table: { disable: true },
      control: 'select',
      options: ['', customMobileLogo],
    },
    // HTML
    alt: { table: { disable: true } },
    href: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof TopBannerLogo>;
export default meta;
type Story = StoryObj<typeof meta>;

const logoLinkText = dsI18n.t('ds_layout:topbanner.SkeLogoLinkText');
const logoText = dsI18n.t('ds_layout:topbanner.SkeLogoImageText');
const defaultArgs: TopBannerLogoProps = {};

export const WithRef = {
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
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    await expect(link).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'en',
    'data-testid': '123ID',
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  parameters: {
    a11y: {
      test: 'off',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    await expect(link).toHaveAttribute('id', 'htmlId');
    await expect(link).toHaveClass('dummyClassname');
    await expect(link).toHaveAttribute('lang', 'en');
    await expect(link).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A8, A9)',
  args: {
    ...defaultArgs,
  },
  argTypes: {},
  parameters: {
    pseudoStates: ['focus-visible'],
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute('href', 'https://www.skatteetaten.no/');
    const logo = canvas.getByRole('img', {
      name: logoLinkText,
    });
    await expect(logo).toBeInTheDocument();
  },
} satisfies Story;

export const WithAs = {
  name: 'With As (A8)',
  args: {
    ...defaultArgs,
    as: 'div',
  },
  argTypes: {
    as: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    await expect(canvasElement.querySelector('a')).not.toBeInTheDocument();
    const logo = canvas.getByRole('img', {
      name: logoText,
    });
    await expect(logo).toBeInTheDocument();
  },
} satisfies Story;

export const WithLogoMobileLogoAltAndHref = {
  name: 'With Logo, MobileLogo, Alt, And Href (A8, A10)',
  args: {
    ...defaultArgs,
    as: 'a',
    logo: customLogo,
    mobileLogo: customMobileLogo,
    alt: 'custom alt text',
    href: '#',
  },
  argTypes: {
    logo: { table: { disable: false } },
    mobileLogo: { table: { disable: false } },
    alt: { table: { disable: false } },
    href: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', {
      name: 'custom alt text',
    });
    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute('href', '#');
  },
} satisfies Story;

export const WithOnClick = {
  name: 'With OnClick',
  args: {
    ...defaultArgs,
    onClick: fn((e) => {
      e.preventDefault();
    }),
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const logo = canvas.getByRole('img', {
      name: logoLinkText,
    });
    await fireEvent.click(logo);

    await waitFor(() => expect(args.onClick).toHaveBeenCalledOnce());
  },
} satisfies Story;
