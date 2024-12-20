import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { DescriptionList } from '@skatteetaten/ds-content';

const meta = {
  component: DescriptionList.Element,
  title: 'Tester/DescriptionList/Element',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: {
      table: { disable: true },
    },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: {
      table: { disable: true },
    },
    term: {
      table: { disable: true },
    },
  },
  args: {
    term: 'Ansvarlig fagperson',
    children: 'Kenneth Performance',
  },
  decorators: [
    (Story): JSX.Element => (
      <dl>
        <Story />
      </dl>
    ),
  ],
} satisfies Meta<typeof DescriptionList.Element>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    'data-testid': '123ID',
    ref: (instance: HTMLDListElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: { imageSnapshot: { disable: true } },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId('123ID');
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
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId('123ID');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveAttribute('lang', 'nb');
  },
} satisfies Story;
