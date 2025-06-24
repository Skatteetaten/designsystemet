import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { sizeArr } from '@skatteetaten/ds-core-utils';
import {
  Icon,
  IconComponentCommonProps,
  AccountChildSVGpath,
  AndreForholdSVGpath,
} from '@skatteetaten/ds-icons';

import { SystemSVGPaths } from '../utils/icon.systems';
import { ThemeSVGPaths } from '../utils/icon.themes';

const systemIconSizeArr = sizeArr.filter((size) => size !== 'extraSmall');
const themeIconSizeArr = sizeArr.filter(
  (size) => size === 'medium' || size === 'large'
);

const meta = {
  component: Icon,
  title: 'Tester/Icon',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    size: {
      table: { disable: true },
      options: [...systemIconSizeArr],
    },
    svgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    title: { table: { disable: true } },
    variant: {
      table: { disable: true },
      control: 'text',
    },
    // Aria
    ariaLabel: { table: { disable: true } },
  },
} satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: IconComponentCommonProps = {
  svgPath: AccountChildSVGpath,
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: SVGSVGElement | null): void => {
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
    const icon = canvas.getByRole('img', { hidden: true });
    await expect(icon).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes(FA2-5)',
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
    const icon = canvas.getByRole('img', { hidden: true });
    await expect(icon).toHaveAttribute('id', 'htmlid');
    await expect(icon).toHaveClass('dummyClassname');
    await expect(icon).toHaveAttribute('lang', 'nb');
    await expect(icon).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Default - Variant SystemIcon (A1, B1, B5)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    svgPath: {
      table: { disable: false },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', { hidden: true });
    await expect(icon).toBeInTheDocument();
    await expect(icon).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(icon).toHaveAttribute('aria-hidden', 'true');
    await expect(icon).not.toHaveAttribute('aria-label');
    await expect(icon).not.toHaveAttribute('aria-labelledby');
  },
} satisfies Story;

export const WithVariant = {
  name: 'With Variant ThemeIcon (A1)',
  args: {
    ...defaultArgs,
    svgPath: AndreForholdSVGpath,
    variant: 'themeIcon',
  },
  argTypes: {
    svgPath: {
      table: { disable: false },
      options: Object.keys(ThemeSVGPaths),
      mapping: ThemeSVGPaths,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', { hidden: true });
    await expect(icon).toBeInTheDocument();
    await expect(icon).toHaveAttribute('viewBox', '0 0 48 48');
    await expect(icon.classList.toString()).toContain('themeIcon_medium');
  },
} satisfies Story;

export const WithCustomSVG = {
  name: 'With Custom SVG (A4)',
  args: {
    ...defaultArgs,
    svgPath: <path d={'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z'} />,
  },
  argTypes: {
    svgPath: {
      table: { disable: false },
      control: { disable: true },
    },
  },
} satisfies Story;

export const WithTitle = {
  name: 'With Title (B3)',
  args: {
    ...defaultArgs,
    title: 'Min custom title beskrivelse',
  },
  argTypes: {
    title: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img');
    await expect(icon).toBeInTheDocument();
    await expect(icon).toHaveAttribute('aria-hidden', 'false');
    await expect(icon).toHaveAttribute('aria-labelledby');
    await expect(icon).not.toHaveAttribute('aria-label');

    const titleText = 'Min custom title beskrivelse';
    const titleNode = canvas.getByTitle(titleText);
    await expect(titleNode).toBeInTheDocument();
    await expect(titleNode).toHaveAttribute('id');
    const svgNode = canvas.getByLabelText(titleText, { selector: 'svg' });
    await expect(svgNode).toBeInTheDocument();
  },
} satisfies Story;

export const WithAriaLabel = {
  name: 'With AriaLabel (B4)',
  args: {
    ...defaultArgs,
    ariaLabel: 'min custom aria-label beskrivelse',
  },
  argTypes: {
    ariaLabel: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img');
    await expect(icon).toBeInTheDocument();
    await expect(icon).toHaveAttribute('aria-hidden', 'false');
    await expect(icon).toHaveAttribute(
      'aria-label',
      'min custom aria-label beskrivelse'
    );
    await expect(icon).not.toHaveAttribute('aria-labelledby');

    const title = icon.querySelector('title');
    await expect(title).not.toBeInTheDocument();
  },
} satisfies Story;

export const SystemIconSizeSmall = {
  name: 'With Size Small - SystemIcon (A2)',
  args: {
    ...defaultArgs,
    svgPath: AccountChildSVGpath,
    variant: 'systemIcon',
    size: 'small',
  },
  argTypes: {
    size: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', { hidden: true });
    await expect(icon.classList.toString()).toContain('systemIcon_small');
  },
} satisfies Story;

export const SystemIconSizeMedium = {
  name: 'With Size Medium - SystemIcon (A2)',
  args: {
    ...defaultArgs,
    svgPath: AccountChildSVGpath,
    variant: 'systemIcon',
    size: 'medium',
  },
  argTypes: {
    size: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', { hidden: true });
    await expect(icon.classList.toString()).toContain('systemIcon_medium');
  },
} satisfies Story;

export const SystemIconSizeLarge = {
  name: 'With Size Large - SystemIcon (A2)',
  args: {
    ...defaultArgs,
    svgPath: AccountChildSVGpath,
    variant: 'systemIcon',
    size: 'large',
  },
  argTypes: {
    size: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', { hidden: true });
    await expect(icon.classList.toString()).toContain('systemIcon_large');
  },
} satisfies Story;

export const SystemIconSizeLargePlus = {
  name: 'With Size Large Plus - SystemIcon (A2)',
  args: {
    ...defaultArgs,
    svgPath: AccountChildSVGpath,
    variant: 'systemIcon',
    size: 'largePlus',
  },
  argTypes: {
    size: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', { hidden: true });
    await expect(icon.classList.toString()).toContain('systemIcon_largePlus');
  },
} satisfies Story;

export const SystemIconSizeExtraLarge = {
  name: 'With Size Extra Large - SystemIcon (A2)',
  args: {
    ...defaultArgs,
    svgPath: AccountChildSVGpath,
    variant: 'systemIcon',
    size: 'extraLarge',
  },
  argTypes: {
    size: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', { hidden: true });
    await expect(icon.classList.toString()).toContain('systemIcon_extraLarge');
  },
} satisfies Story;

export const ThemeIconSizeMedium = {
  name: 'With Size Medium - ThemeIcon (A3)',
  args: {
    ...defaultArgs,
    svgPath: AndreForholdSVGpath,
    variant: 'themeIcon',
    size: 'medium',
  },
  argTypes: {
    size: {
      table: { disable: false },
      options: [...themeIconSizeArr],
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', { hidden: true });
    await expect(icon.classList.toString()).toContain('themeIcon_medium');
  },
} satisfies Story;

export const ThemeIconSizeLarge = {
  name: 'With Size Large - ThemeIcon (A3)',
  args: {
    ...defaultArgs,
    svgPath: AndreForholdSVGpath,
    variant: 'themeIcon',
    size: 'large',
  },
  argTypes: {
    size: {
      table: { disable: false },
      options: [...themeIconSizeArr],
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', { hidden: true });
    await expect(icon.classList.toString()).toContain('themeIcon_large');
  },
} satisfies Story;
