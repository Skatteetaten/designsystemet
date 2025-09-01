import { MouseEvent, useState } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within, waitFor, fn } from 'storybook/test';

import { wrapper } from './testUtils/storybook.testing.utils';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerLangPickerButton } from '../../../../../libs/ds-layout/src/TopBannerLangPickerButton/TopBannerLangPickerButton';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerLangPickerButtonProps } from '../../../../../libs/ds-layout/src/TopBannerLangPickerButton/TopBannerLangPickerButton.types';
import { ReactComponent as NorwegianFlagIcon } from '../../assets/no-flag.svg';

const meta = {
  component: TopBannerLangPickerButton,
  title: 'Tester/TopBanner/TopBannerLangPickerButton (intern)',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    classNames: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    flagIcon: { table: { disable: true } },
    children: { table: { disable: true } },
    // Aria
    ariaCurrent: { table: { disable: true } },
    // Events
    onClick: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    chromatic: { disableSnapshot: false },
  },
} as Meta<typeof TopBannerLangPickerButton>;
export default meta;
type Story = StoryObj<typeof meta>;

const buttonText = 'Bokmål';
const defaultArgs: TopBannerLangPickerButtonProps = {
  flagIcon: <NorwegianFlagIcon />,
  children: buttonText,
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
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
    chromatic: { disableSnapshot: true },
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
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'htmlid');
    await expect(button).toHaveClass('dummyClassname');
    await expect(button).toHaveAttribute('lang', 'nb');
    await expect(button).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (LanguagePicker A1, B1, B2, C1 delvis)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    flagIcon: { table: { disable: false } },
    children: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      focus: `${wrapper} > button`,
      hover: `${wrapper} > button`,
      click: `${wrapper} > button`,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: buttonText });
    await expect(button).toBeInTheDocument();

    const flagSvg = button.querySelector('svg');
    await expect(flagSvg).toBeInTheDocument();
    await expect(flagSvg).toHaveAttribute('aria-hidden', 'true');
  },
} satisfies Story;

export const WithAriaCurrent = {
  name: 'With AriaCurrent (LanguagePicker A1, B2)',
  args: {
    ...defaultArgs,
    ariaCurrent: true,
  },
  argTypes: {
    ariaCurrent: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: buttonText });
    await expect(button).toHaveAttribute('aria-current', 'true');

    const checkSvg = button.querySelectorAll('svg')[1];
    await expect(checkSvg).toBeInTheDocument();
    await expect(checkSvg).toHaveAttribute('aria-hidden', 'true');
  },
} satisfies Story;

const EventHandlersTemplate: StoryFn<typeof TopBannerLangPickerButton> = (
  args
) => {
  const [buttonText, setButtonText] = useState('Klikk på meg');
  return (
    <TopBannerLangPickerButton
      {...args}
      onClick={(event: MouseEvent<HTMLButtonElement>): void => {
        setButtonText('Blitt klikket på');
        args.onClick && args.onClick(event);
      }}
    >
      {buttonText}
    </TopBannerLangPickerButton>
  );
};

export const WithEventHandlers = {
  render: EventHandlersTemplate,
  name: 'With EventHandlers (LanguagePicker A4)',
  args: {
    ...defaultArgs,
    onClick: fn(),
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
} satisfies Story;
