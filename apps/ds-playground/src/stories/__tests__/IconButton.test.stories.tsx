import { FocusEvent, MouseEvent, useState } from 'react';

import { StoryFn, Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { IconButton, IconButtonProps } from '@skatteetaten/ds-buttons';
import { getCommonButtonTypeDefault } from '@skatteetaten/ds-core-utils';
import {
  AttachFileSVGpath,
  BellOutlineSVGpath,
  CircleDownSVGpath,
  DeleteSVGpath,
} from '@skatteetaten/ds-icons';

import { SystemSVGPaths } from '../utils/icon.systems';

const defaultSVGPath = AttachFileSVGpath;
const alternativeSVGPathFocus = CircleDownSVGpath;
const alternativeSVGPathBlur = BellOutlineSVGpath;
const alternativeSVGPathClick = DeleteSVGpath;

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole('button');
    await expect(iconButton).toBeInTheDocument();
    await expect(iconButton).toHaveAttribute(attribute, expectedValue);
  };

const meta = {
  component: IconButton,
  title: 'Tester/IconButton',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    brightness: { table: { disable: true } },
    hasSpinner: { table: { disable: true } },
    spinnerTitle: { table: { disable: true } },
    isOutlined: { table: { disable: true } },
    size: { table: { disable: true } },
    svgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    title: { table: { disable: true } },
    // HTML
    accessKey: { table: { disable: true } },
    disabled: { table: { disable: true } },
    type: { table: { disable: true } },
    // Aria
    ariaDescribedby: { table: { disable: true } },
    ariaExpanded: { table: { disable: true } },
    // Events
    onBlur: { table: { disable: true } },
    onClick: { table: { disable: true } },
    onFocus: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof IconButton>;
export default meta;
type Story = StoryObj<typeof meta>;

const accessibleName = 'dummy tekst accessible name';

const defaultArgs: IconButtonProps = {
  svgPath: defaultSVGPath,
  title: accessibleName,
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
    imageSnapshot: {
      disable: true,
    },
  },
  play: verifyAttribute('id', 'dummyIdForwardedFromRef'),
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes(FA2-5)',
  args: {
    ...defaultArgs,
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
    a11y: {
      test: 'off',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole('button');
    await expect(iconButton).toHaveClass('dummyClassname');
    await expect(iconButton).toHaveAttribute('id', 'htmlId');
    await expect(iconButton).toHaveAttribute('lang', 'nb');
    await expect(iconButton).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A1, B1, B2)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    svgPath: { table: { disable: false } },
    title: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible', 'active'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole('button');
    expect(iconButton).toHaveAttribute('type', getCommonButtonTypeDefault());

    const svg = iconButton.querySelector('svg');
    await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(svg).toHaveAttribute('aria-hidden', 'false');

    await expect(canvas.getByTitle(accessibleName)).toBeInTheDocument();
  },
} satisfies Story;

export const WithOutline = {
  name: 'With Outline (A1)',
  args: {
    ...defaultArgs,
    isOutlined: true,
  },
  argTypes: {
    isOutlined: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible', 'active'] },
  },
} satisfies Story;

export const WithCustomSVGPath = {
  name: 'With Custom SVGPath (A1)',
  args: {
    ...defaultArgs,
    svgPath: <path d={'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'} />,
  },
  argTypes: {
    svgPath: {
      table: { disable: false },
      control: { disable: true },
    },
  },
} satisfies Story;

export const WithSizeExtraSmall = {
  name: 'With Size Extra Small (A1)',
  args: {
    ...defaultArgs,
    size: 'extraSmall',
  },
  argTypes: {
    size: { table: { disable: false } },
  },
} satisfies Story;

export const WithSizeSmall = {
  name: 'With Size Small (A1)',
  args: {
    ...defaultArgs,
    size: 'small',
  },
  argTypes: {
    size: { table: { disable: false } },
  },
} satisfies Story;

export const WithSizeLarge = {
  name: 'With Size Large (A1)',
  args: {
    ...defaultArgs,
    size: 'large',
  },
  argTypes: {
    size: { table: { disable: false } },
  },
} satisfies Story;

export const WithSizeExtraSmallAndOutline = {
  name: 'With Size Extra Small and Outline (A1)',
  args: {
    ...defaultArgs,
    size: 'extraSmall',
    isOutlined: true,
  },
  argTypes: {
    size: { table: { disable: false } },
    isOutlined: { table: { disable: false } },
  },
} satisfies Story;

export const WithSizeSmallAndOutline = {
  name: 'With Size Small and Outline (A1)',
  args: {
    ...defaultArgs,
    size: 'small',
    isOutlined: true,
  },
  argTypes: {
    size: { table: { disable: false } },
    isOutlined: { table: { disable: false } },
  },
} satisfies Story;

export const WithSizeLargeAndOutline = {
  name: 'With Size Large and Outline (A1)',
  args: {
    ...defaultArgs,
    size: 'large',
    isOutlined: true,
  },
  argTypes: {
    size: { table: { disable: false } },
    isOutlined: { table: { disable: false } },
  },
} satisfies Story;

export const WithDisabled = {
  name: 'With Disabled (B5)',
  args: {
    ...defaultArgs,
    disabled: true,
  },
  argTypes: {
    disabled: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible', 'active'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toBeDisabled();
  },
} satisfies Story;

export const WithDisabledAndOutline = {
  name: 'With Disabled And Outline (B5)',
  args: {
    ...defaultArgs,
    isOutlined: true,
    disabled: true,
  },
  argTypes: {
    isOutlined: { table: { disable: false } },
    disabled: { table: { disable: false } },
  },
} satisfies Story;

export const WithType = {
  name: 'With Type (B1)',
  args: {
    ...defaultArgs,
    type: 'submit',
  },
  argTypes: {
    type: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
  play: verifyAttribute('type', 'submit'),
} satisfies Story;

export const WithAriaDescribedby = {
  name: 'With AriaDescribedby (B3)',
  args: {
    ...defaultArgs,
    ariaDescribedby: 'araiDescId',
  },
  argTypes: {
    ariaDescribedby: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
  play: verifyAttribute('aria-describedby', 'araiDescId'),
} satisfies Story;

export const WithAriaExpanded = {
  name: 'With AriaExpanded (B6)',
  args: {
    ...defaultArgs,
    ariaExpanded: true,
  },
  argTypes: {
    ariaExpanded: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
  play: verifyAttribute('aria-expanded', 'true'),
} satisfies Story;

export const WithAccesskey = {
  name: 'With AccessKey (B4)',
  args: {
    ...defaultArgs,
    accessKey: 'a',
  },
  argTypes: {
    accessKey: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
  play: verifyAttribute('accessKey', 'a'),
} satisfies Story;

const EventHandlersTemplate: StoryFn<typeof IconButton> = (args) => {
  const [svgPath, setSvgPath] = useState(defaultSVGPath);
  return (
    <IconButton
      {...args}
      svgPath={svgPath}
      onFocus={(event: FocusEvent<HTMLButtonElement>): void => {
        setSvgPath(alternativeSVGPathFocus);
        args.onFocus && args.onFocus(event);
      }}
      onBlur={(event: FocusEvent<HTMLButtonElement>): void => {
        setSvgPath(alternativeSVGPathBlur);
        args.onBlur && args.onBlur(event);
      }}
      onClick={(event: MouseEvent<HTMLButtonElement>): void => {
        setSvgPath(alternativeSVGPathClick);
        args.onClick && args.onClick(event);
      }}
    />
  );
};

export const WithEventHandlers = {
  render: EventHandlersTemplate,
  name: 'With EventHandlers (A2 delvis)',
  args: {
    ...defaultArgs,
    onFocus: fn(),
    onBlur: fn(),
    onClick: fn(),
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole('button');
    await expect(iconButton).toBeInTheDocument();
    iconButton.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    await userEvent.click(iconButton);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
} satisfies Story;

const TemplateWithSpinner: StoryFn<typeof IconButton> = (args) => (
  <>
    <div className={'bottomSpacingXL'}>
      <IconButton
        {...args}
        hasSpinner={false}
        size={'extraSmall'}
        className={'marginRightM'}
        isOutlined
      />
      <IconButton
        {...args}
        hasSpinner={false}
        size={'small'}
        className={'marginRightM'}
        isOutlined
      />
      <IconButton
        {...args}
        hasSpinner={false}
        className={'marginRightM'}
        isOutlined
      />
      <IconButton {...args} hasSpinner={false} size={'large'} isOutlined />
    </div>
    <div className={'bottomSpacingXL'}>
      <IconButton
        {...args}
        size={'extraSmall'}
        className={'marginRightM'}
        isOutlined
      />
      <IconButton
        {...args}
        size={'small'}
        className={'marginRightM'}
        isOutlined
      />
      <IconButton {...args} className={'marginRightM'} isOutlined />
      <IconButton {...args} size={'large'} isOutlined />
    </div>
    <div className={'bottomSpacingXL'}>
      <IconButton
        {...args}
        hasSpinner={false}
        size={'extraSmall'}
        className={'marginRightM'}
      />
      <IconButton
        {...args}
        hasSpinner={false}
        size={'small'}
        className={'marginRightM'}
      />
      <IconButton {...args} hasSpinner={false} className={'marginRightM'} />
      <IconButton {...args} hasSpinner={false} size={'large'} />
    </div>
    <IconButton {...args} size={'extraSmall'} className={'marginRightM'} />
    <IconButton {...args} size={'small'} className={'marginRightM'} />
    <IconButton {...args} className={'marginRightM'} />
    <IconButton {...args} size={'large'} />
  </>
);

export const WithSpinner = {
  render: TemplateWithSpinner,
  name: 'With Spinner (A4)',
  args: {
    ...defaultArgs,
    hasSpinner: true,
  },
  argTypes: {
    hasSpinner: { table: { disable: false } },
  },
} satisfies Story;

export const WithBrightness = {
  name: 'With Brightness (A5)',
  args: {
    ...defaultArgs,
    brightness: 'light',
  },
  argTypes: {
    brightness: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible', 'active'] },
  },
  globals: {
    backgrounds: {
      value: 'themePrimary',
    },
  },
} satisfies Story;

export const WithBrightnessAndOutline = {
  name: 'With Brightness And Outline (A5)',
  args: {
    ...defaultArgs,
    brightness: 'light',
    isOutlined: true,
  },
  argTypes: {
    brightness: { table: { disable: false } },
    isOutlined: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible', 'active'] },
  },
  globals: {
    backgrounds: {
      value: 'themePrimary',
    },
  },
} satisfies Story;

export const WithBrightnessAndSpinner = {
  name: 'With Brightness And Spinner (A5)',
  args: {
    ...defaultArgs,
    brightness: 'light',
    hasSpinner: true,
  },
  argTypes: {
    brightness: { table: { disable: false } },
    hasSpinner: { table: { disable: false } },
  },
  globals: {
    backgrounds: {
      value: 'themePrimary',
    },
  },
} satisfies Story;

export const WithBrightnessAndDisabled = {
  name: 'With Brightness And Disabled (A5)',
  args: {
    ...defaultArgs,
    brightness: 'light',
    isOutlined: true,
    disabled: true,
  },
  argTypes: {
    brightness: { table: { disable: false } },
    isOutlined: { table: { disable: false } },
    disabled: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible', 'active'] },
  },
  globals: {
    backgrounds: {
      value: 'themePrimary',
    },
  },
} satisfies Story;
