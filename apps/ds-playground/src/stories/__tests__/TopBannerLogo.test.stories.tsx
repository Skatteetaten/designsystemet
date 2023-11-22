import { dsI18n } from '@skatteetaten/ds-core-utils';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { wrapper } from './testUtils/storybook.testing.utils';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerLogo } from '../../../../../libs/ds-layout/src/TopBannerLogo/TopBannerLogo';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerLogoProps } from '../../../../../libs/ds-layout/src/TopBannerLogo/TopBannerLogo.types';
import customLogo from '../../assets/custom-logo.svg';
import customMobileLogo from '../../assets/custom-mobile-logo.svg';

const meta = {
  component: TopBannerLogo,
  title: 'Tester/TopBannerLogo (intern)',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
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
    noLinkLogo: { table: { disable: true } },
    // HTML
    alt: { table: { disable: true } },
    href: { table: { disable: true } },
  },
} satisfies Meta<typeof TopBannerLogo>;
export default meta;
type Story = StoryObj<typeof meta>;

const frontPageText = dsI18n.t('ds_pages:topbannerexternal.SkeLogoLinkText');
const logoText = dsI18n.t('ds_pages:topbannerexternal.SkeLogoImageText');
const defaultArgs: TopBannerLogoProps = {};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLDivElement | null): void => {
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
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
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
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'en');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A8, A9)',
  args: {
    ...defaultArgs,
  },
  argTypes: {},
  parameters: {
    imageSnapshot: {
      focus: `${wrapper} a`,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute('href', 'https://www.skatteetaten.no/');
    const logo = canvas.getByRole('img', {
      name: frontPageText,
    });
    await expect(logo).toBeInTheDocument();
  },
} satisfies Story;

export const WithNoLinkLogo = {
  name: 'With NoLinkLogo (A8)',
  args: {
    ...defaultArgs,
    noLinkLogo: true,
  },
  argTypes: {
    noLinkLogo: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    // eslint-disable-next-line testing-library/no-node-access
    const link = canvasElement.querySelector('a');
    await expect(link).not.toBeInTheDocument();
    const logo = canvas.getByRole('img', {
      name: logoText,
    });
    await expect(logo).toBeInTheDocument();
  },
} satisfies Story;

export const WithLogoMobileLogoAltAndHref = {
  name: 'With Logo MobileLogo Alt And Href (A8, A10)',
  args: {
    ...defaultArgs,
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

export const WithBreakpointXS = {
  name: 'With Breakpoint-xs',
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
    },
  },
} satisfies Story;

export const WithBreakpointS = {
  name: 'With Breakpoint-s',
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-s',
    },
  },
} satisfies Story;
