import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { WordInfo } from '@skatteetaten/ds-overlays';

import { category, htmlEventDescription } from '../../../.storybook/helpers';

const meta = {
  component: WordInfo.Trigger,
  title: 'Tester/WordInfo/Trigger',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { category: category.htmlAttribute, disable: true } },
    //todo
    hasIcon: {
      table: { category: category.props, disable: true },
    },
    //Events
    onClick: { ...htmlEventDescription, table: { disable: true } },
  },
  args: {
    children: 'arkskrift',
  },
  render: (args): JSX.Element => (
    <WordInfo>
      <WordInfo.Trigger {...args} />
    </WordInfo>
  ),
  tags: ['test'],
} satisfies Meta<typeof WordInfo.Trigger>;
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
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
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
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'htmlId');
    await expect(button).toHaveClass('dummyClassname');
    await expect(button).toHaveAttribute('lang', 'en');
    await expect(button).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A1, A5, B2)',
  args: {},
  argTypes: {
    children: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: false },
    pseudoStates: ['hover', 'focus', 'active'],
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    const icon = canvas.getByRole('img', { hidden: true });
    await expect(icon).toBeInTheDocument();
    await expect(icon).toHaveAttribute('aria-hidden', 'true');
    const title = icon.querySelector('title');
    expect(title).toBeNull();
    const srOnlyText = canvas.getByText(
      dsI18n.t('ds_overlays:wordinfo.WordExplanation')
    );
    await expect(srOnlyText).toBeInTheDocument();
    await expect(srOnlyText.className).toContain('srOnly');
  },
} satisfies Story;

export const WithoutIcon = {
  name: 'Without Icon (A5)',
  args: {
    hasIcon: false,
  },
  argTypes: {
    hasIcon: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: false },
    pseudoStates: ['hover', 'focus', 'active'],
  },
} satisfies Story;

export const WithOnClick = {
  name: 'With OnClick (B1)',
  args: {
    onClick: fn(),
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
    await expect(button).toHaveAttribute('aria-expanded', 'true');
  },
} satisfies Story;
