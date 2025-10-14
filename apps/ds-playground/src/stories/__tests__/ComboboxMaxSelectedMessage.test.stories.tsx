import React, { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { dsI18n } from '@skatteetaten/ds-core-utils';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { ComboboxMaxSelectedMessage } from '../../../../../libs/ds-forms/src/Combobox/ComboboxMaxSelectedMessage';

type ComboboxMaxSelectedMessageProps = React.ComponentProps<
  typeof ComboboxMaxSelectedMessage
>;

const meta = {
  component: ComboboxMaxSelectedMessage,
  title: 'Tester/Combobox/MaxSelectedMessage',
  decorators: [(Story): JSX.Element => <Story />],
  argTypes: {
    // Props
    selectedCount: { table: { disable: true } },
    maxSelected: { table: { disable: true } },
    comboboxId: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
    a11y: { disable: true }, // Disable accessibility tests due to li[role="status"]
  },
} satisfies Meta<typeof ComboboxMaxSelectedMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: ComboboxMaxSelectedMessageProps = {
  selectedCount: 2,
  maxSelected: 5,
  comboboxId: 'test-combobox',
};

export const BasicRendering = {
  name: 'Renders the message with correct text',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const message =
      canvasElement.ownerDocument.querySelector('[role="status"]');
    await expect(message).toBeInTheDocument();
    await expect(message).toHaveTextContent(
      dsI18n.t('ds_forms:combobox.SelectedOfTotalPlural', {
        selected: 2,
        total: 5,
      })
    );
  },
} satisfies Story;

export const DifferentCountValues = {
  name: 'Renders correct text for different count values',
  args: {
    ...defaultArgs,
    selectedCount: 1,
    maxSelected: 3,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const message =
      canvasElement.ownerDocument.querySelector('[role="status"]');
    await expect(message).toHaveTextContent(
      dsI18n.t('ds_forms:combobox.SelectedOfTotalSingular', {
        selected: 1,
        total: 3,
      })
    );
  },
} satisfies Story;

export const AccessibilityAttributes = {
  name: 'Has correct ARIA attributes',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const message =
      canvasElement.ownerDocument.querySelector('[role="status"]');
    await expect(message).toHaveAttribute('role', 'status');
    await expect(message).toHaveAttribute('aria-live', 'polite');
    await expect(message).toHaveAttribute('aria-atomic', 'true');
  },
} satisfies Story;

export const CustomComboboxId = {
  name: 'Has correct id based on comboboxId',
  args: {
    ...defaultArgs,
    comboboxId: 'my-combobox',
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const message =
      canvasElement.ownerDocument.querySelector('[role="status"]');
    await expect(message).toHaveAttribute(
      'id',
      'my-combobox-max-selected-message'
    );
  },
} satisfies Story;

export const ComplexComboboxId = {
  name: 'Handles different comboboxId values',
  args: {
    ...defaultArgs,
    comboboxId: 'country-selector-123',
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const message =
      canvasElement.ownerDocument.querySelector('[role="status"]');
    await expect(message).toHaveAttribute(
      'id',
      'country-selector-123-max-selected-message'
    );
  },
} satisfies Story;

export const CssStyling = {
  name: 'Applies maxSelectedMessage CSS class',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const message =
      canvasElement.ownerDocument.querySelector('[role="status"]');
    // CSS modules will transform the class name
    await expect(message?.className).toMatch(/maxSelectedMessage/);
  },
} satisfies Story;

export const ComponentDisplayName = {
  name: 'Has correct displayName',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async (): Promise<void> => {
    await expect(ComboboxMaxSelectedMessage.displayName).toBe(
      'ComboboxMaxSelectedMessage'
    );
  },
} satisfies Story;

export const LargeNumbers = {
  name: 'Handles large numbers correctly',
  args: {
    ...defaultArgs,
    selectedCount: 999,
    maxSelected: 1000,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const message =
      canvasElement.ownerDocument.querySelector('[role="status"]');
    await expect(message).toHaveTextContent(
      dsI18n.t('ds_forms:combobox.SelectedOfTotalPlural', {
        selected: 999,
        total: 1000,
      })
    );
  },
} satisfies Story;

export const ZeroMaxSelected = {
  name: 'Handles zero maxSelected',
  args: {
    ...defaultArgs,
    selectedCount: 0,
    maxSelected: 0,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const message =
      canvasElement.ownerDocument.querySelector('[role="status"]');
    await expect(message).toHaveTextContent(
      dsI18n.t('ds_forms:combobox.SelectedOfTotalPlural', {
        selected: 0,
        total: 0,
      })
    );
  },
} satisfies Story;

export const SelectedEqualsMax = {
  name: 'Handles selectedCount equal to maxSelected',
  args: {
    ...defaultArgs,
    selectedCount: 10,
    maxSelected: 10,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const message =
      canvasElement.ownerDocument.querySelector('[role="status"]');
    await expect(message).toHaveTextContent(
      dsI18n.t('ds_forms:combobox.SelectedOfTotalPlural', {
        selected: 10,
        total: 10,
      })
    );
  },
} satisfies Story;
