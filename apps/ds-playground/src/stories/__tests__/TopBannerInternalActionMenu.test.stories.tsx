import { useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { expect, fireEvent, userEvent, waitFor, within } from '@storybook/test';

import { InlineButton } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import {
  ActionMenuActionsRef,
  TopBannerInternal,
} from '@skatteetaten/ds-layout';

import { wrapper } from './testUtils/storybook.testing.utils';

const meta = {
  component: TopBannerInternal.ActionMenu,
  title: 'Tester/TopBanner/TopBannerInternalActionMenu',
  argTypes: {
    children: { control: 'text', table: { disable: true } },
    id: { table: { disable: true } },
    className: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    menuActionsRef: { table: { disable: true } },
  },
  args: {
    children: 'Menu Content',
  },
  parameters: {
    backgrounds: { default: 'themePrimary' },
  },
} satisfies Meta<typeof TopBannerInternal.ActionMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithAttributes = {
  name: 'With Attributes',
  args: {
    id: 'actionMenuId',
    className: 'actionMenuClassname',
    lang: 'en',
    'data-testid': 'actionMenuTestId',
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const actionMenu = canvas.getByTestId('actionMenuTestId');
    await expect(actionMenu).toHaveClass('actionMenuClassname');
    await expect(actionMenu).toHaveAttribute('id', 'actionMenuId');
    await expect(actionMenu).toHaveAttribute('lang', 'en');
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
} satisfies Story;

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
} satisfies Story;

export const WithImperativeActions = {
  name: 'With Imperative Actions (A2, A3, A5, A6, B1, C2)',
  render: (_args): JSX.Element => {
    const actionsRef = useRef<ActionMenuActionsRef>(null);
    return (
      <>
        <TopBannerInternal.ActionMenu menuActionsRef={actionsRef}>
          {'Menu Content'}
          <InlineButton onClick={() => actionsRef?.current?.close?.()}>
            {'Lukk'}
          </InlineButton>
        </TopBannerInternal.ActionMenu>
        <InlineButton
          brightness={'light'}
          className={'marginLeftL'}
          onClick={() => actionsRef?.current?.open?.()}
        >
          {'Åpne'}
        </InlineButton>
      </>
    );
  },
  play: async ({ canvasElement }): Promise<void> => {
    const buttonText = dsI18n.t('ds_layout:topbannerbutton.Menu');
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', { name: buttonText });
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await fireEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    const menuContent = canvas.getByText('Menu Content');
    await expect(menuContent).toBeInTheDocument();
    const closeButton = canvas.getByText('Lukk');
    await fireEvent.click(closeButton);
    await expect(menuContent).not.toBeInTheDocument();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(menuButton).toHaveFocus();
    await expect(menuContent).not.toBeInTheDocument();
    const openButton = canvas.getByText('Åpne');
    await fireEvent.click(openButton);
    await expect(canvas.getByText('Menu Content')).toBeInTheDocument();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    await userEvent.keyboard('{Escape}');
    await expect(menuContent).not.toBeInTheDocument();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(menuButton).toHaveFocus();
  },
  parameters: {
    imageSnapshot: {
      click: `${wrapper} > :first-child`,
    },
  },
} satisfies Story;
