import React, { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import type { ComboboxOption } from '@skatteetaten/ds-forms';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { ComboboxAccessibilityAnnouncer } from '../../../../../libs/ds-forms/src/Combobox/ComboboxAccessibilityAnnouncer';

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
    isLoading: { table: { disable: true } },
    loadingMessage: { table: { disable: true } },
    isOpen: { table: { disable: true } },
    displayOptions: { table: { disable: true } },
    searchTerm: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
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
  isLoading: false,
  loadingMessage: dsI18n.t('ds_progress:spinner.LoadingLabel'),
  isOpen: false,
  displayOptions: [],
  searchTerm: '',
};

export const LoadingStateAnnouncement = {
  name: 'Loading message when isLoading is true',
  args: {
    ...defaultArgs,
    loadingMessage: dsI18n.t('ds_progress:spinner.LoadingLabel'),
    isLoading: true,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );
    await expect(announcer).toHaveTextContent(
      dsI18n.t('ds_progress:spinner.LoadingLabel')
    );
  },
} satisfies Story;

export const LoadingPriority = {
  name: 'Loading message prioritized over other states',
  args: {
    ...defaultArgs,
    loadingMessage: dsI18n.t('ds_progress:spinner.LoadingLabel'),
    displayOptions: mockOptions,
    searchTerm: 'test',
    isOpen: true,
    isLoading: true,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );
    await expect(announcer).toHaveTextContent(
      dsI18n.t('ds_progress:spinner.LoadingLabel')
    );
  },
} satisfies Story;

export const OptionsAvailableAnnouncement = {
  name: 'Available options count when open with options',
  args: {
    ...defaultArgs,
    displayOptions: mockOptions,
    isOpen: true,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );
    await expect(announcer).toHaveAttribute('aria-live', 'polite');
    await expect(announcer).toHaveTextContent(
      dsI18n.t('ds_forms:combobox.OptionsAvailable', { count: 3 })
    );
  },
} satisfies Story;

export const SingleOptionAnnouncement = {
  name: 'Single option announcement',
  args: {
    ...defaultArgs,
    displayOptions: [{ label: 'Single Option', value: '1' }],
    isOpen: true,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );
    await expect(announcer).toHaveTextContent(
      dsI18n.t('ds_forms:combobox.OneOptionAvailable')
    );
  },
} satisfies Story;

export const NoResultsAnnouncement = {
  name: 'No results when open with search term but no options',
  args: {
    ...defaultArgs,
    displayOptions: [],
    searchTerm: 'xyz',
    isOpen: true,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );
    await expect(announcer).toHaveAttribute('aria-live', 'polite');
    await expect(announcer).toHaveTextContent(
      dsI18n.t('ds_forms:combobox.NoResults', { searchTerm: 'xyz' })
    );
  },
} satisfies Story;

export const NoResultsWhenClosed = {
  name: 'No results announcement should not appear when closed',
  args: {
    ...defaultArgs,
    isOpen: false,
    displayOptions: [],
    searchTerm: 'xyz',
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );
    await expect(announcer).toHaveTextContent('');
  },
} satisfies Story;

export const NoResultsWithoutSearchTerm = {
  name: 'No results announcement should not appear without search term',
  args: {
    ...defaultArgs,
    displayOptions: [],
    searchTerm: '',
    isOpen: true,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );
    await expect(announcer).toHaveTextContent('');
  },
} satisfies Story;

export const AccessibilityAttributes = {
  name: 'Correct ARIA attributes',
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
    const announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );
    await expect(announcer).toHaveAttribute('aria-live', 'polite');
    await expect(announcer).toHaveAttribute('aria-atomic', 'true');
  },
} satisfies Story;

export const CustomComboboxId = {
  name: 'Correct id based on comboboxId',
  args: {
    ...defaultArgs,
    comboboxId: 'country-selector',
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const announcer = canvasElement.ownerDocument.getElementById(
      'country-selector-status'
    );
    await expect(announcer).toHaveAttribute('id', 'country-selector-status');
  },
} satisfies Story;

export const ScreenReaderOnlyStyling = {
  name: 'Screen reader only styling applied',
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
    const announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );
    await expect(announcer?.className).toMatch(/srOnly/);
  },
} satisfies Story;

export const StateTransitionClosedState = {
  name: 'State transition test - initially closed',
  args: {
    ...defaultArgs,
    isOpen: false,
    displayOptions: mockOptions,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );
    // When closed, should have empty text (representing initial state before user opens)
    await expect(announcer).toHaveTextContent('');
  },
} satisfies Story;

export const StateTransitionOpenState = {
  name: 'State transition test - after opening',
  args: {
    ...defaultArgs,
    isOpen: true,
    displayOptions: mockOptions,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );
    // After opening, should show options available message
    await expect(announcer).toHaveTextContent(
      dsI18n.t('ds_forms:combobox.OptionsAvailable', { count: 3 })
    );
  },
} satisfies Story;

export const StateTransitionLoadingState = {
  name: 'State transition test - during loading',
  args: {
    ...defaultArgs,
    isLoading: true,
    loadingMessage: dsI18n.t('ds_progress:spinner.LoadingLabel'),
    displayOptions: [],
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );
    // During loading, should show loading message
    await expect(announcer).toHaveTextContent(
      dsI18n.t('ds_progress:spinner.LoadingLabel')
    );
  },
} satisfies Story;

export const StateTransitionLoadedState = {
  name: 'State transition test - after loading complete',
  args: {
    ...defaultArgs,
    isLoading: false,
    displayOptions: mockOptions,
    isOpen: true,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );
    // After loading completes, should not show loading and should show options
    const loadingText = dsI18n.t('ds_progress:spinner.LoadingLabel');
    await expect(announcer).not.toHaveTextContent(loadingText);
    await expect(announcer).toHaveTextContent(
      dsI18n.t('ds_forms:combobox.OptionsAvailable', { count: 3 })
    );
  },
} satisfies Story;

export const StateChangeClosedToOpen = {
  name: 'Message updates when changing from closed to open state',
  args: {
    ...defaultArgs,
    isOpen: false,
    displayOptions: mockOptions,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ args, canvasElement, mount }): Promise<void> => {
    // First render with closed state
    await mount();
    let announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );

    // Initially closed - should have empty text
    await expect(announcer).toHaveTextContent('');

    // Re-render with open state to simulate opening the combobox
    await mount(
      React.createElement(ComboboxAccessibilityAnnouncer, {
        ...args,
        isOpen: true,
      })
    );
    announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );

    // After opening, should show options available message
    await expect(announcer).toHaveTextContent(
      dsI18n.t('ds_forms:combobox.OptionsAvailable', { count: 3 })
    );
  },
} satisfies Story;

export const StateChangeLoadingToLoaded = {
  name: 'Message updates when transitioning from loading to loaded',
  args: {
    ...defaultArgs,
    isLoading: true,
    loadingMessage: dsI18n.t('ds_progress:spinner.LoadingLabel'),
    displayOptions: [],
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ args, canvasElement, mount }): Promise<void> => {
    // First render with loading state
    await mount();
    let announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );

    // Initially loading - should show loading message
    await expect(announcer).toHaveTextContent(
      dsI18n.t('ds_progress:spinner.LoadingLabel')
    );

    // Re-render with loaded state (no loading, with options, open)
    await mount(
      React.createElement(ComboboxAccessibilityAnnouncer, {
        ...args,
        isLoading: false,
        displayOptions: mockOptions,
        isOpen: true,
      })
    );
    announcer = canvasElement.ownerDocument.getElementById(
      'test-combobox-status'
    );

    // After loading completes, should show options available message and not loading
    await expect(announcer).not.toHaveTextContent(
      dsI18n.t('ds_progress:spinner.LoadingLabel')
    );
    await expect(announcer).toHaveTextContent(
      dsI18n.t('ds_forms:combobox.OptionsAvailable', { count: 3 })
    );
  },
} satisfies Story;
