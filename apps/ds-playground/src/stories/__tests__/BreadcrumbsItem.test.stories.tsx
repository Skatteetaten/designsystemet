import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { BreadcrumbsItemProps, Breadcrumbs } from '@skatteetaten/ds-navigation';

const elementId = 'htmlId';

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('listitem')).toHaveAttribute(
      attribute,
      expectedValue
    );
  };

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
    chromatic: { disableSnapshot: false },
  },
} satisfies Meta<typeof Breadcrumbs.Item>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: BreadcrumbsItemProps = {
  children: (
    <Breadcrumbs.Link href={'#'}>{'Bedrift og organisasjon'}</Breadcrumbs.Link>
  ),
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
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
    chromatic: { disableSnapshot: true },
  },
  play: verifyAttribute('id', 'dummyIdForwardedFromRef'),
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes(FA2-5)',
  args: {
    ...defaultArgs,
    id: elementId,
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
    const container = canvas.getByRole('listitem');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', elementId);
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const WithAriaCurrent = {
  name: 'With AriaCurrent (B3)',
  args: {
    ...defaultArgs,
    ariaCurrent: 'page',
  },
  argTypes: {},
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('listitem');
    await expect(container).toHaveAttribute('aria-current', 'page');
  },
} satisfies Story;
