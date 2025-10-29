import React, { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import type { ComboboxOption } from '@skatteetaten/ds-forms';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { ComboboxAccessibilityAnnouncer } from '../../../../../../libs/ds-forms/src/Combobox/ComboboxAccessibilityAnnouncer';

type ComboboxAccessibilityAnnouncerProps = React.ComponentProps<
  typeof ComboboxAccessibilityAnnouncer
>;

const meta = {
  component: ComboboxAccessibilityAnnouncer,
  title: 'Tester/Combobox/AccessibilityAnnouncer',
  decorators: [(Story): JSX.Element => <Story />],
  argTypes: {
    // Props
    comboboxId: { table: { disable: true } },
    isOpen: { table: { disable: true } },
    displayOptions: { table: { disable: true } },
    searchTerm: { table: { disable: true } },
  },
  tags: ['test'],
} satisfies Meta<typeof ComboboxAccessibilityAnnouncer>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockOptions: ComboboxOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

const defaultArgs: ComboboxAccessibilityAnnouncerProps = {
  comboboxId: 'test-combobox',
  isOpen: false,
  displayOptions: mockOptions,
  searchTerm: '',
};

export const MultipleOptionsAnnouncement = {
  name: 'Multiple options announcement (B1)',
  args: {
    ...defaultArgs,
    isOpen: true,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );
    await expect(announcer).toHaveTextContent(
      dsI18n.t('ds_forms:combobox.OptionsAvailable', { count: 3 })
    );
  },
} satisfies Story;

export const SingleOptionAnnouncement = {
  name: 'Single option announcement (B1)',
  args: {
    ...defaultArgs,
    displayOptions: [{ label: 'Single Option', value: '1' }],
    isOpen: true,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );
    await expect(announcer).toHaveTextContent(
      dsI18n.t('ds_forms:combobox.OneOptionAvailable')
    );
  },
} satisfies Story;

export const NoResultsAnnouncement = {
  name: 'No results (B1)',
  args: {
    ...defaultArgs,
    displayOptions: [],
    searchTerm: 'xyz',
    isOpen: true,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );
    await expect(announcer).toHaveTextContent(
      dsI18n.t('ds_forms:combobox.NoResults', { searchTerm: 'xyz' })
    );
  },
} satisfies Story;

export const WithId = {
  name: 'With Id',
  args: {
    ...defaultArgs,
    comboboxId: 'country-selector',
  },
  play: async ({ canvasElement }): Promise<void> => {
    const announcer = canvasElement.ownerDocument.getElementById(
      'country-selector-status'
    );
    await expect(announcer).toHaveAttribute('id', 'country-selector-status');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults',
  args: {
    ...defaultArgs,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );
    await expect(announcer).toHaveAttribute('aria-live', 'polite');
    await expect(announcer).toHaveAttribute('aria-atomic', 'true');
    await expect(announcer).toHaveTextContent('');
  },
} satisfies Story;
