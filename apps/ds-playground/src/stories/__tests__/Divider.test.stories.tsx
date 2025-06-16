import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';

import { Divider } from '@skatteetaten/ds-content';

const meta = {
  component: Divider,
  title: 'Tester/Divider',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    spacingTop: { table: { disable: true } },
    spacingBottom: { table: { disable: true } },
    variant: { table: { disable: true } },
    // Aria
    ariaHidden: { table: { disable: true } },
  },
} satisfies Meta<typeof Divider>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLHRElement | null): void => {
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
    const divider = canvas.getByRole('separator');
    await expect(divider).toHaveAttribute('id', 'dummyIdForwardedFromRef');
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
    const divider = canvas.getByRole('separator');
    await expect(divider).toHaveClass('dummyClassname');
    await expect(divider).toHaveAttribute('id', 'htmlId');
    await expect(divider).toHaveAttribute('lang', 'nb');
    await expect(divider).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A1)',
} satisfies Story;

export const WithStrong = {
  name: 'With Strong (A3)',
  args: {
    variant: 'strong',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
} satisfies Story;

export const IsHRElement = {
  name: 'Is <hr>-element (B1)',
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('separator').nodeName).toBe('HR');
  },
} satisfies Story;

export const WithAriaHidden = {
  name: 'With ariaHidden (B2)',
  args: {
    ariaHidden: 'true',
  },
  argTypes: {
    ariaHidden: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const divider = canvas.getByRole('separator', { hidden: true });
    await expect(divider).toHaveAttribute('aria-hidden', 'true');
  },
} satisfies Story;
