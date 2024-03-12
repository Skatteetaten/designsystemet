import { ErrorSummary } from '@skatteetaten/ds-forms';
import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

const meta = {
  component: ErrorSummary.Error,
  title: 'Tester/ErrorSummary/Error',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
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
    referenceId: { table: { disable: true } },
  },
} satisfies Meta<typeof ErrorSummary.Error>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  children: 'Husk å fylle ut type varer',
  referenceId: 'referenceId_1',
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
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
    const error = canvas.getByRole('link');
    await expect(error).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
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
    const error = canvas.getByRole('link');
    await expect(error).toHaveAttribute('id', 'htmlid');
    await expect(error).toHaveClass('dummyClassname');
    await expect(error).toHaveAttribute('lang', 'nb');
    await expect(error).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    referenceId: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const error = canvas.getByRole('link');
    await expect(error).toHaveAttribute('href', '#referenceId_1');
  },
} satisfies Story;
