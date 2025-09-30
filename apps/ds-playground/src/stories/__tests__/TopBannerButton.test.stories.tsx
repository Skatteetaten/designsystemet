import { MouseEvent, useState } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within, waitFor, fn } from 'storybook/test';

import {
  LockOutlineSVGpath,
  MenuSVGpath,
  PersonSVGpath,
} from '@skatteetaten/ds-icons';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerButton } from '../../../../../libs/ds-layout/src/TopBannerButton/TopBannerButton';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TopBannerButtonProps } from '../../../../../libs/ds-layout/src/TopBannerButton/TopBannerButton.types';
import { SystemSVGPaths } from '../utils/icon.systems';

const meta = {
  component: TopBannerButton,
  title: 'Tester/TopBanner/TopBannerButton (intern)',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    classNames: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    svgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    title: { table: { disable: true } },
    variant: { table: { disable: true } },
    // Aria
    ariaExpanded: { table: { disable: true } },
    // Events
    onClick: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} as Meta<typeof TopBannerButton>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultButtonText = 'Meny';
const defaultArgs: TopBannerButtonProps = {
  children: defaultButtonText,
  svgPath: MenuSVGpath,
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
    imageSnapshot: { disableSnapshot: true },
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
  parameters: {
    a11y: {
      test: 'off',
    },
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

export const WithClassNames = {
  name: 'With ClassNames (FA3, Username A2)',
  args: {
    ...defaultArgs,
    classNames: {
      container: 'dummyClassname',
      text: 'dummyClassname',
    },
  },
  argTypes: {
    classNames: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    const span = canvas.getByText(defaultButtonText);
    await expect(button).toHaveClass('dummyClassname');
    await expect(span).toHaveClass('dummyClassname');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (LoginButton A1, A2)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    children: { table: { disable: false } },
    svgPath: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus', 'active'] },
  },
  globals: {
    viewport: {
      value: '--breakpoint-m',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: defaultButtonText,
    });
    const svg = canvas.getByRole('img', { hidden: true });
    await expect(button).toBeInTheDocument();
    await expect(svg).toBeInTheDocument();
  },
} satisfies Story;

export const WithVariantFilled = {
  name: 'Variant Filled (LoginButton A1, A2)',
  args: {
    ...defaultArgs,
    children: 'Logg inn',
    svgPath: LockOutlineSVGpath,
    variant: 'filled',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus', 'active'] },
  },
  globals: {
    viewport: {
      value: '--breakpoint-m',
    },
  },
} satisfies Story;

export const WithTitle = {
  name: 'With Title (Username A2)',
  args: {
    ...defaultArgs,
    variant: 'filled',
    svgPath: PersonSVGpath,
    title: 'Title',
    children: 'Knotten, Gudleik',
  },
  argTypes: {
    title: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const title = canvas.getByText('Title');
    await expect(title).toBeInTheDocument();
  },
} satisfies Story;

export const DefaultsOnMobileScreen = {
  name: 'Defaults On Mobile Screen  (LoginButton A1, A2)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    children: { table: { disable: false } },
    svgPath: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus', 'active'] },
  },
  globals: {
    viewport: {
      value: '--mobile',
    },
  },
} satisfies Story;

export const VariantFilledOnMobileScreen = {
  name: 'Variant Filled On Mobile Screen  (LoginButton A1, A2)',
  args: {
    ...defaultArgs,
    children: 'Logg inn',
    svgPath: LockOutlineSVGpath,
    variant: 'filled',
  },
  argTypes: {
    children: { table: { disable: false } },
    svgPath: { table: { disable: false } },
    variant: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus', 'active'] },
  },
  globals: {
    viewport: {
      value: '--mobile',
    },
  },
} satisfies Story;

const EventHandlersTemplate: StoryFn<typeof TopBannerButton> = (args) => {
  const [buttonText, setButtonText] = useState('Klikk på meg');
  return (
    <TopBannerButton
      {...args}
      onClick={(event: MouseEvent<HTMLButtonElement>): void => {
        setButtonText('Blitt klikket på');
        args.onClick && args.onClick(event);
      }}
    >
      {buttonText}
    </TopBannerButton>
  );
};

export const WithEventHandlers = {
  render: EventHandlersTemplate,
  name: 'With EventHandlers (LoginButton A3, Username A4)',
  args: {
    ...defaultArgs,
    onClick: fn(),
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
} satisfies Story;
