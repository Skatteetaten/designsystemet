import { sizeArr } from '@skatteetaten/ds-core-utils';
import { WarningSVGpath } from '@skatteetaten/ds-icons';
import { Chip } from '@skatteetaten/ds-status';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { SystemSVGPaths } from '../utils/icon.systems';

const meta = {
  component: Chip,
  title: 'Tester/Chip',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: {
      table: { disable: false },
      control: 'text',
    },
    svgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    color: {
      table: { disable: true },
    },
    size: {
      options: [sizeArr[1], sizeArr[2]],
      control: 'radio',
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Chip>;
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
      table: { disable: true },
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
      table: { disable: true },
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
      table: { disable: true },
    },
  },
} satisfies Story;

export const DefaultGrey = {
  name: 'Variant (graphite) (A3)',
  args: {
    ...defaultArgs,
    color: 'graphite',
  },
  argTypes: {
    color: {
      table: { disable: true },
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
      table: { disable: true },
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
