import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, fireEvent, userEvent, within } from '@storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';

import { wrapper } from './testUtils/storybook.testing.utils';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerSkipLink } from '../../../../../libs/ds-layout/src/TopBannerSkipLink/TopBannerSkipLink';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerSkipLinkProps } from '../../../../../libs/ds-layout/src/TopBannerSkipLink/TopBannerSkipLink.types';
import { webComponent } from '../../../.storybook/webcomponent-decorator';

const meta = {
  component: TopBannerSkipLink,
  title: 'Tester/TopBanner/TopBannerSkipLink (intern)',
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
    shadowRootNode: {
      table: { disable: true },
    },
    target: { table: { disable: true } },
  },
} satisfies Meta<typeof TopBannerSkipLink>;
export default meta;
type Story = StoryObj<typeof meta>;

const skipLinkText = 'ds_layout:topbanner.SkipLinkText';
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
    skipLink.focus();
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (B2)',
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

export const WithTargetAndChildren = {
  render: MainTemplate,
  name: 'With Target And Children (A3 delvis)',
  args: {
    ...defaultArgs,
    target: `#${mainId}`,
    children: 'Snarvei til hovedinnhold',
  },
  argTypes: {
    target: { table: { disable: false } },
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
    skipLink.focus();
    await fireEvent.click(skipLink);
    await expect(main).toHaveFocus();
  },
} satisfies Story;

const TemplateWithShadowDom: StoryFn<typeof TopBannerSkipLink> = (args) => {
  const element = document.querySelector('skiplink-customelement');
  const shadowRoot = element?.shadowRoot;
  return (
    <div>
      <TopBannerSkipLink {...args} shadowRootNode={shadowRoot ?? undefined} />
      <main>{'Hovedinnholdet på siden'}</main>
    </div>
  );
};

export const WithShadowDom = {
  render: TemplateWithShadowDom,
  name: 'With ShadowDom',
  args: {
    ...defaultArgs,
  },
  decorators: [webComponent],
  parameters: {
    imageSnapshot: {
      disable: true,
    },
    customElementName: 'skiplink-customelement',
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    //skipLink finnes ikke utenfor shadowDom
    await expect(canvas.queryByRole('link')).not.toBeInTheDocument();

    const customElement = canvasElement.querySelector(`skiplink-customelement`);
    await expect(customElement).toBeInTheDocument();
    const skipLink =
      customElement?.shadowRoot && customElement.shadowRoot.querySelector('a');

    await expect(skipLink).toBeInTheDocument();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await userEvent.click(skipLink!);

    const main =
      customElement?.shadowRoot &&
      customElement.shadowRoot.querySelector('main:focus');
    await expect(main).toBeInTheDocument();
  },
} satisfies Story;
