import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Chips } from '@skatteetaten/ds-collections';
import { dsI18n } from '@skatteetaten/ds-core-utils';

const meta = {
  component: Chips.Removable,
  title: 'Tester/Chips/Removable',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    size: { table: { disable: true } },
    children: { table: { disable: true } },
    // HTML
    disabled: { table: { disable: true } },
    // Events
    onClose: { table: { disable: true } },
  },
  args: {
    children: 'Trondheim',
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof Chips.Removable>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLButtonElement | null): void => {
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
    const container = canvas.getByRole('button');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
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
    const container = canvas.getByRole('button');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A2, A3, B3 delvis)',
  args: {},
} satisfies Story;

export const WithSizeSmall = {
  name: 'With Size Small (A1)',
  args: {
    size: 'small',
  },
  argTypes: {
    size: { table: { disable: false } },
  },
} satisfies Story;

export const WithCloseIconAltText = {
  name: 'With Close Icon Alternative Text (B3 delvis)',
  args: {},
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByTitle(
      dsI18n.t('ds_collections:chips.RemoveFilter')
    );
    await expect(icon).toBeInTheDocument();
  },
} satisfies Story;
