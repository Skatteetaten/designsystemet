import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Popover } from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import { loremIpsum } from './testUtils/storybook.testing.utils';

const defaultText =
  'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.';

const meta = {
  component: Popover.Content,
  title: 'Tester/Popover/Content',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    as: { table: { disable: true } },
    children: {
      table: { disable: true },
      control: 'text',
    },
    classNames: { table: { disable: true } },
  },
  render: (args): JSX.Element => (
    <Popover isOpen>
      <Popover.Content {...args} />
    </Popover>
  ),
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
  args: {
    children: defaultText,
  },
} satisfies Meta<typeof Popover.Content>;
export default meta;
type Story = StoryObj<typeof meta>;

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
    imageSnapshot: { disableSnapshot: true },
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
    imageSnapshot: { disableSnapshot: true },
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

export const WithCustomClassNames = {
  name: 'With Custom ClassNames (FA3)',
  args: {
    classNames: {
      contentWrapper: 'dummyClassName',
      closeButton: 'dummyClassName',
    },
  },
  argTypes: {
    classNames: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    const contentWrapper = container.querySelector(
      '[class*="popoverContentWrapper"]'
    );
    await expect(contentWrapper).toHaveClass('dummyClassName');
    const closeButton = canvas.getByRole('button');
    await expect(closeButton).toHaveClass('dummyClassName');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults',
  args: {},
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container.tagName.toLowerCase()).toBe('div');
  },
} satisfies Story;

export const WithMarkup = {
  name: 'With Markup (A6)',
  args: {
    children: (
      <>
        <Heading as={'h1'} level={4}>
          {'Avvist av kortutsteder'}
        </Heading>
        <Paragraph>
          {'Ta kontakt med kortutsteder for '}
          <a href={'#storybook-root'}>{'mer informasjon'}</a>
        </Paragraph>
      </>
    ),
  },
  argTypes: {
    children: {
      table: { disable: false },
      control: { disable: true },
    },
  },
} satisfies Story;

export const VerticalScroll = {
  name: 'With Scroll (A7)',
  args: {
    children: loremIpsum.repeat(100),
  },
} satisfies Story;

export const AsSpan = {
  name: 'As Span (A11)',
  args: {
    as: 'span',
  },
  argTypes: {
    as: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container.tagName.toLowerCase()).toBe('span');
  },
} satisfies Story;
