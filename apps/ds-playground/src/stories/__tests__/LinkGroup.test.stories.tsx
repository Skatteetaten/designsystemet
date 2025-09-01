import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { LinkGroup, LinkGroupProps } from '@skatteetaten/ds-buttons';
import { linkColorArr } from '@skatteetaten/ds-core-utils';
import { CalendarSVGpath } from '@skatteetaten/ds-icons';

import { wrapper } from './testUtils/storybook.testing.utils';

const meta = {
  component: LinkGroup,
  title: 'Tester/LinkGroup',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: {
      table: { disable: true },
      control: { disable: true },
    },
    hasSpacing: { table: { disable: true } },
    color: {
      table: { disable: true },
      options: [undefined, ...linkColorArr],
      control: 'inline-radio',
    },
    variant: {
      table: { disable: true },
      control: 'inline-radio',
    },
  },
  tags: ['test'],
  parameters: {
    chromatic: { disableSnapshot: false },
  },
} satisfies Meta<typeof LinkGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: LinkGroupProps = {
  children: [
    <LinkGroup.Link
      key={'linkGroupLink_1'}
      href={'#storybook-root'}
      onClick={(e): void => e.preventDefault()}
    >
      {'Er du pendler?'}
    </LinkGroup.Link>,
    <LinkGroup.Link
      key={'linkGroupLink_2'}
      href={'#storybook-root'}
      onClick={(e): void => e.preventDefault()}
    >
      {'Pendler du mye?'}
    </LinkGroup.Link>,
    <LinkGroup.Link
      key={'linkGroupLink_3'}
      href={'#storybook-root'}
      onClick={(e): void => e.preventDefault()}
    >
      {'Pendler du dagen lang?'}
    </LinkGroup.Link>,
  ],
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLUListElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const linkGroup = canvas.getByRole('list');
    await expect(linkGroup).toHaveAttribute('id', 'dummyIdForwardedFromRef');
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
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const linkGroup = canvas.getByRole('list');
    await expect(linkGroup).toHaveClass('dummyClassname');
    await expect(linkGroup).toHaveAttribute('id', 'htmlId');
    await expect(linkGroup).toHaveAttribute('lang', 'nb');
    await expect(linkGroup).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults Variant List (A1 delvis, A4 delvis, A5)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    children: {
      table: { disable: false },
    },
  },
  parameters: {
    imageSnapshot: {
      hover: `${wrapper} > ul > li:first-child > a`,
      focus: `${wrapper} > ul > li:first-child > a`,
      click: `${wrapper} > ul > li:first-child > a`,
    },
  },
} satisfies Story;

export const VariantAnchors = {
  name: 'Variant Anchors (A1 delvis, A4 delvis, A6)',
  args: {
    ...defaultArgs,
    variant: 'anchors',
  },
  argTypes: {
    variant: {
      table: {
        disable: false,
      },
    },
  },
  parameters: {
    imageSnapshot: {
      hover: `${wrapper} > ul > li:first-child > a`,
    },
  },
} satisfies Story;

export const WithLongTextAndIcons = {
  name: 'With Long Text And Icons (A2)',
  args: {
    ...defaultArgs,
    children: [
      <LinkGroup.Link
        key={'linkGroupLink_1'}
        href={'#storybook-root'}
        isExternal
      >
        {'Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert ' +
          'uansett om ikon eller ikke og får et hengende innrykk.'}
      </LinkGroup.Link>,
      <LinkGroup.Link
        key={'linkGroupLink_2'}
        href={'#storybook-root'}
        svgPath={CalendarSVGpath}
      >
        {'Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert ' +
          'uansett om ikon eller ikke og får et hengende innrykk.'}
      </LinkGroup.Link>,
    ],
  },
  argTypes: {
    children: { table: { disable: false } },
  },
} satisfies Story;

const TemplateWithTwoLinkGroups: StoryFn<typeof LinkGroup> = (args) => (
  <>
    <LinkGroup {...args} />
    <LinkGroup {...args} />
  </>
);

export const WithSpacing = {
  render: TemplateWithTwoLinkGroups,
  name: 'With Spacing (A3)',
  args: {
    ...defaultArgs,
    hasSpacing: true,
  },
  argTypes: {
    hasSpacing: { table: { disable: false } },
  },
} satisfies Story;

export const WithColor = {
  name: 'With Color (A7)',
  args: {
    ...defaultArgs,
    color: 'white',
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
      hover: `${wrapper} > ul > li:first-child > a`,
      focus: `${wrapper} > ul > li:first-child > a`,
      click: `${wrapper} > ul > li:first-child > a`,
    },
  },
} satisfies Story;
