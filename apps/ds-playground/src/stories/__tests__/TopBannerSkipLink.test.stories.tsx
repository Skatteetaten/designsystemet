import { dsI18n } from '@skatteetaten/ds-core-utils';
import { expect } from '@storybook/jest';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { fireEvent, within } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerSkipLink } from '../../../../../libs/ds-layout/src/TopBannerSkipLink/TopBannerSkipLink';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerSkipLinkProps } from '../../../../../libs/ds-layout/src/TopBannerSkipLink/TopBannerSkipLink.types';

const meta = {
  component: TopBannerSkipLink,
  title: 'Tester/TopBannerSkipLink (intern)',
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
    // HTML
    href: { table: { disable: true } },
  },
} satisfies Meta<typeof TopBannerSkipLink>;
export default meta;
type Story = StoryObj<typeof meta>;

const skipLinkText = 'ds_pages:topbanner.SkipLinkText';
const defaultArgs: TopBannerSkipLinkProps = {};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
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
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const skipLink = canvas.getByRole('link');
    await expect(skipLink).toHaveAttribute('id', 'dummyIdForwardedFromRef');
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
    const skipLink = canvas.getByRole('link');
    await expect(skipLink).toHaveAttribute('id', 'htmlId');
    await expect(skipLink).toHaveClass('dummyClassname');
    await expect(skipLink).toHaveAttribute('lang', 'nb');
    await expect(skipLink).toHaveAttribute('data-testid', '123ID');
    await skipLink.focus();
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (B2)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    href: { table: { disable: false } },
    children: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      focus: `${wrapper} a`,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const skipLink = canvas.getByRole('link', {
      name: dsI18n.t(skipLinkText),
    });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink.tagName).toBe('A');
  },
} satisfies Story;

const mainId = 'hovedinnhold';
const MainTemplate: StoryFn<typeof TopBannerSkipLink> = (args) => (
  <>
    <TopBannerSkipLink {...args} />
    <main id={mainId}>{'Hovedinnholdet på siden'}</main>
  </>
);

export const WithHrefAndChildren = {
  render: MainTemplate,
  name: 'With Href And Children (A3 delvis)',
  args: {
    ...defaultArgs,
    href: `#${mainId}`,
    children: 'Snarvei til hovedinnhold',
  },
  argTypes: {
    href: { table: { disable: false } },
    children: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const skipLink = canvas.getByRole('link', {
      name: 'Snarvei til hovedinnhold',
    });
    await expect(skipLink).toBeInTheDocument();
    await expect(skipLink).toHaveAttribute('href', `#${mainId}`);
    await fireEvent.click(skipLink);
    const main = canvas.getByRole('main');
    await expect(main).toHaveFocus();
  },
} satisfies Story;

export const ClickSkipLink = {
  render: MainTemplate,
  name: 'Click SkipLink (A3, C1 delvis)',
  args: {
    ...defaultArgs,
  },
  argTypes: {},
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const main = canvas.getByRole('main');
    const skipLink = canvas.getByRole('link', {
      name: dsI18n.t(skipLinkText),
    });
    await skipLink.focus();
    await fireEvent.click(skipLink);
    await expect(main).toHaveFocus();
  },
} satisfies Story;
