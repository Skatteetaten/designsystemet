import { JSX } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { RoleBanner } from '@skatteetaten/ds-layout';

const meta = {
  component: RoleBanner,
  title: 'Tester/RoleBanner',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    id: { table: { disable: true } },
    className: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    user: { table: { disable: true } },
    isSticky: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof RoleBanner>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  user: {
    name: 'navn navnerson',
    role: 'meg' as const,
    identifier: '123456789',
  },
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLDivElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: { imageSnapshot: { disableSnapshot: true } },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('region');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    user: {
      name: 'navn navnerson',
      role: 'meg',
      identifier: '123456789',
    },
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('region');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A1, B1)',
  args: {
    ...defaultArgs,
  },
  argTypes: {},
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('region');
    expect(container).toHaveAccessibleName(
      dsI18n.t('ds_layout:rolebanner.AriaLabel')
    );
    const nameNode = canvas.getByText('navn navnerson');
    await expect(nameNode).toBeInTheDocument();
    const identifierNode = canvas.getByText('(123456789)');
    await expect(identifierNode).toBeInTheDocument();
  },
} satisfies Story;

export const AllRoles = {
  name: 'All Role Variants (A2, A5 B2)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    a11y: {
      test: 'off',
    },
  },
  render: (): JSX.Element => (
    <>
      <RoleBanner
        className={'bottomSpacingXL'}
        user={{ name: 'Ola Nordmann', role: 'meg', identifier: '010199 12345' }}
      />
      <RoleBanner
        className={'bottomSpacingXL'}
        user={{
          name: 'Kari Hansen',
          role: 'andre',
          identifier: '020299 54321',
        }}
      />
      <RoleBanner
        user={{
          name: 'Bedriften AS',
          role: 'virksomhet',
          identifier: '999 888 777',
        }}
      />
    </>
  ),
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const banners = canvas.getAllByRole('region');
    await expect(banners).toHaveLength(3);

    await expect(banners[0]).toHaveAttribute('data-user', 'meg');
    await expect(banners[1]).toHaveAttribute('data-user', 'andre');
    await expect(banners[2]).toHaveAttribute('data-user', 'virksomhet');

    // 'meg' har ingen srOnly-tekst
    const megSrOnly = banners[0].querySelector('[class*="srOnly"]');
    await expect(megSrOnly).toBeNull();

    // 'andre' har srOnly-tekst "person"
    const personText = dsI18n.t('ds_layout:rolebanner.Person');
    const andreSrOnly = within(banners[1]).getByText(personText);
    await expect(andreSrOnly).toBeInTheDocument();

    // 'virksomhet' har srOnly-tekst "virksomhet"
    const businessText = dsI18n.t('ds_layout:rolebanner.Business');
    const virksomhetSrOnly = within(banners[2]).getByText(businessText);
    await expect(virksomhetSrOnly).toBeInTheDocument();
  },
} satisfies Story;

const TemplateWithTallContent: StoryFn<typeof RoleBanner> = (args) => (
  <div className={'height200vh'}>
    <RoleBanner {...args} />
    <p>{'Innhold under banneret'}</p>
  </div>
);

export const MobileAndScrolled = {
  render: TemplateWithTallContent,
  name: 'Mobile Scrolled (A8, A9)',
  args: {
    user: {
      name: 'Et veldig langt navn som vil bli avkortet når man scroller på mobil',
      role: 'virksomhet',
      identifier: '999 888 777',
    },
  },
  globals: {
    viewport: {
      value: '--mobile',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const banner = canvas.getByRole('region');
    // Manuelt sette data-scrolled for visuell testing
    banner.setAttribute('data-scrolled', 'true');
    await expect(banner).toHaveAttribute('data-scrolled', 'true');
  },
} satisfies Story;

export const Mobile = {
  render: TemplateWithTallContent,
  name: 'Mobile (A7)',
  args: {
    user: {
      name: 'Et veldig langt navn som vil bli avkortet når man scroller på mobil',
      role: 'virksomhet',
      identifier: '999 888 777',
    },
  },
  globals: {
    viewport: {
      value: '--mobile',
    },
  },
} satisfies Story;
