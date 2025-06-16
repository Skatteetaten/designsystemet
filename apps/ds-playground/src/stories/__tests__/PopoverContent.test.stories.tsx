import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';

import { Popover } from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import { loremIpsum } from './testUtils/storybook.testing.utils';

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
    children: {
      table: { disable: true },
      control: 'text',
    },
    // Aria
  },
  render: (args): JSX.Element => (
    <Popover isOpen>
      <Popover.Content {...args} />
    </Popover>
  ),
} satisfies Meta<typeof Popover.Content>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultText =
  'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.';

const defaultArgs = {
  children: defaultText,
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
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    console.log(canvas.getAllByRole('generic'));
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

export const WithMarkup = {
  name: 'With Markup (A2)',
  args: {
    ...defaultArgs,
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
