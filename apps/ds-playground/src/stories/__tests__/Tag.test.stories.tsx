import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { WarningSVGpath } from '@skatteetaten/ds-icons';
import { Tag } from '@skatteetaten/ds-status';

import { SystemSVGPaths } from '../utils/icon.systems';

const meta = {
  component: Tag,
  title: 'Tester/Tag',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    canBeManuallyFocused: { table: { disable: true } },
    children: {
      table: { disable: true },
      control: 'text',
    },
    svgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    color: { table: { disable: true } },
    size: { table: { disable: true } },
  },
  tags: ['test'],
} satisfies Meta<typeof Tag>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultText = 'Særavgift';

const defaultArgs = {
  children: defaultText,
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLDivElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
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
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'en');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const DefaultYellow = {
  name: 'Default Variant (ochre) (A3)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    color: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const DefaultGreen = {
  name: 'Variant (forest) (A3)',
  args: {
    ...defaultArgs,
    color: 'forest',
  },
  argTypes: {
    color: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const DefaultRed = {
  name: 'Variant (burgundy) (A3)',
  args: {
    ...defaultArgs,
    color: 'burgundy',
  },
  argTypes: {
    color: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const DefaultGrey: Story = {
  name: 'Variant (graphite) (A3)',
  args: {
    ...defaultArgs,
    color: 'graphite',
  },
  argTypes: {
    color: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const Small = {
  name: 'Small (A1)',
  args: {
    ...defaultArgs,
    size: 'small',
  },
  argTypes: {
    size: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const WithCustomIcon = {
  name: 'With Custom Icon (A5)',
  args: {
    ...defaultArgs,
    svgPath: WarningSVGpath,
    color: 'burgundy',
  },
  argTypes: {
    svgPath: {
      table: { disable: false },
    },
  },
} satisfies Story;

export const WithCanBeManuallyFocused: Story = {
  args: {
    ...defaultArgs,
    svgPath: WarningSVGpath,
    canBeManuallyFocused: true,
  },
  argTypes: {
    canBeManuallyFocused: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const tag = canvas.getByText(defaultText);
    tag.focus();
    await expect(tag).toBeInTheDocument();
    await expect(tag).toHaveAttribute('tabIndex', '-1');
  },
} satisfies Story;
