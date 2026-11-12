import { useRef, JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fireEvent, userEvent, waitFor, within } from 'storybook/test';

import { InlineButton } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { CircleDownSVGpath } from '@skatteetaten/ds-icons';
import {
  ActionMenuActionsRef,
  defaultMenuSvgPath,
  TopBannerInternal,
} from '@skatteetaten/ds-layout';

import { testLanguageChange } from './testUtils/storybook.testing.utils';

const meta = {
  component: TopBannerInternal.ActionMenu,
  title: 'Tester/TopBannerInternal/ActionMenu',
  argTypes: {
    children: { control: 'text', table: { disable: true } },
    id: { table: { disable: true } },
    className: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    menuActionsRef: { table: { disable: true } },
    menuLabel: { table: { disable: true } },
    svgPath: { table: { disable: true } },
  },
  args: {
    children: 'Menu Content',
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
    // color contrast issue
    a11y: {
      test: 'off',
    },
  },
  globals: {
    backgrounds: {
      value: 'themePrimary',
    },
  },
} satisfies Meta<typeof TopBannerInternal.ActionMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

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
    imageSnapshot: { disableSnapshot: true },
  },
} satisfies Story;

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
    imageSnapshot: { disableSnapshot: true },
  },
} satisfies Story;

export const WithLanguageChange = {
  parameters: {
    imageSnapshot: { disableSnapshot: true },
    chromatic: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await testLanguageChange(async () => {
      await expect(
        await canvas.findByRole('button', {
          name: dsI18n.t('ds_layout:topbannerbutton.Menu'),
        })
      ).toBeInTheDocument();
    });
  },
} satisfies Story;

export const WithDefaults = {
  name: 'Defaults',
  args: {},
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_layout:topbannerbutton.Menu'),
    });
    await expect(menuButton).toBeInTheDocument();
    const svg = menuButton.querySelector('svg');
    await expect(svg).not.toBeNull();
    const path = svg?.querySelector('path');
    await expect(path).not.toBeNull();
    await expect(path).toHaveAttribute('d', defaultMenuSvgPath.svgPath.props.d);
    await fireEvent.click(menuButton);
    await expect(canvas.getByText('Menu Content')).toBeInTheDocument();
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible', 'active'] },
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
          className={'ml-l'}
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
} satisfies Story;

export const WithCustomMenuLabel = {
  name: 'With Custom Menu Label',
  args: {
    menuLabel: 'Custom Menu',
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', { name: 'Custom Menu' });
    await expect(menuButton).toBeInTheDocument();
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
} satisfies Story;

export const WithCustomSvgPath = {
  name: 'With Custom SVG Path',
  args: {
    svgPath: <path d={CircleDownSVGpath.props.d} />,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const path = canvas.getByRole('button').querySelector('path');
    await expect(path).toHaveAttribute('d', CircleDownSVGpath.props.d);
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
} satisfies Story;

const expectMenuPosition = async (
  { canvasElement }: { canvasElement: HTMLElement },
  isShifted = false,
  placement: 'top' | 'bottom' = 'bottom'
): Promise<void> => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  await userEvent.click(button);

  await waitFor(async () => {
    const menu = canvasElement.querySelector('[data-placement]');
    const arrow = menu?.lastElementChild;
    if (!menu || !arrow) {
      throw new Error('Expected an open menu with an arrow');
    }

    const buttonRect = button.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();
    const arrowRect = arrow.getBoundingClientRect();
    const buttonCenter = buttonRect.left + buttonRect.width / 2;
    const menuCenter = menuRect.left + menuRect.width / 2;
    const arrowCenter = arrowRect.left + arrowRect.width / 2;

    await expect(menu).toHaveAttribute('data-placement', placement);
    if (isShifted) {
      await expect(Math.abs(menuCenter - buttonCenter)).toBeGreaterThan(1);
      // Floating UI avrunder posisjonen til nærmeste fysiske piksel.
      await expect(menuRect.left).toBeGreaterThan(-1);
      await expect(
        menuRect.right - canvasElement.ownerDocument.documentElement.clientWidth
      ).toBeLessThan(1);
    } else {
      await expect(Math.abs(menuCenter - buttonCenter)).toBeLessThan(1);
    }
    await expect(Math.abs(arrowCenter - buttonCenter)).toBeLessThan(1);
    await expect(arrowRect.left).toBeGreaterThan(menuRect.left);
    await expect(arrowRect.right).toBeLessThan(menuRect.right);
    if (placement === 'top') {
      await expect(buttonRect.top - arrowRect.bottom).toBeGreaterThanOrEqual(5);
      await expect(arrowRect.bottom).toBeGreaterThan(menuRect.bottom);
    } else {
      await expect(arrowRect.top - buttonRect.bottom).toBeGreaterThanOrEqual(5);
      await expect(arrowRect.top).toBeLessThan(menuRect.top);
    }
    await expect(button).toHaveFocus();
  });
};

export const WithLongMenuLabelAndShortContent = {
  name: 'With Long Menu Label And Short Content',
  args: {
    menuLabel: 'Handlinger og snarveier for saksbehandling',
    children: 'Kort',
  },
  play: expectMenuPosition,
} satisfies Story;

export const WithShortContent = {
  name: 'With Short Content',
  args: {
    children: 'X',
  },
  play: expectMenuPosition,
} satisfies Story;

export const WithWideContent = {
  name: 'With Wide Content',
  args: {
    children: 'Handlinger og snarveier for saksbehandling',
  },
  render: (args): JSX.Element => (
    <div className={'flex justify-content-center'}>
      <TopBannerInternal.ActionMenu {...args} />
    </div>
  ),
  play: expectMenuPosition,
} satisfies Story;

export const WithWideContentAtLeftEdge = {
  name: 'With Wide Content At Left Edge',
  args: WithWideContent.args,
  play: (context): Promise<void> => expectMenuPosition(context, true),
} satisfies Story;

export const WithWideContentAtRightEdge = {
  name: 'With Wide Content At Right Edge',
  args: WithWideContent.args,
  render: (args): JSX.Element => (
    <div className={'flex justify-content-end'}>
      <TopBannerInternal.ActionMenu {...args} />
    </div>
  ),
  play: (context): Promise<void> => expectMenuPosition(context, true),
} satisfies Story;

export const WithMenuAboveButton = {
  name: 'With Menu Above Button',
  render: (args): JSX.Element => (
    <div
      className={
        'height100vh flex flex-column justify-content-end align-items-center'
      }
    >
      <TopBannerInternal.ActionMenu {...args} />
    </div>
  ),
  play: (context): Promise<void> => expectMenuPosition(context, false, 'top'),
} satisfies Story;
