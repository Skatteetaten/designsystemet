import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Breadcrumbs } from '@skatteetaten/ds-navigation';

const meta = {
  component: Breadcrumbs.Item,
  title: 'Tester/Breadcrumbs/Item',
  decorators: [
    (Story): JSX.Element => (
      <ol>
        <Story />
      </ol>
    ),
  ],
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
  args: {
    children: (
      <Breadcrumbs.Link href={'#'}>
        {'Bedrift og organisasjon'}
      </Breadcrumbs.Link>
    ),
  },
} satisfies Meta<typeof Breadcrumbs.Item>;
export default meta;
type Story = StoryObj<typeof meta>;

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
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('listitem')).toHaveAttribute(
      'id',
      'dummyIdForwardedFromRef'
    );
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes(FA2-5)',
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
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('listitem');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const WithAriaCurrent = {
  name: 'With AriaCurrent (B3)',
  args: {
    ariaCurrent: 'page',
  },
  argTypes: {},
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('listitem');
    await expect(container).toHaveAttribute('aria-current', 'page');
  },
} satisfies Story;
