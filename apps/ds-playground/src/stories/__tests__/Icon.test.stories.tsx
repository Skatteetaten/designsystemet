import { sizeArr } from '@skatteetaten/ds-core-utils';
import {
  Icon,
  IconComponentCommonProps,
  AccountChildSVGpath,
  AndreForholdSVGpath,
} from '@skatteetaten/ds-icons';
import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { SystemSVGPaths } from '../utils/icon.systems';
import { ThemeSVGPaths } from '../utils/icon.themes';

export default {
  component: Icon,
  title: 'Tester/Icon',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    size: { table: { disable: true } },
    svgPath: { table: { disable: true } },
    title: { table: { disable: true } },
    variant: {
      table: { disable: true },
      control: 'text',
    },
    // Aria
    ariaLabel: { table: { disable: true } },
  },
} as ComponentMeta<typeof Icon>;

const defaultArgs: IconComponentCommonProps = {
  svgPath: AccountChildSVGpath,
};

const Template: ComponentStory<typeof Icon> = (args) => (
  <div data-test-block>
    <Icon {...args} />
  </div>
);

// Når Icon har en ref, så får svg elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: SVGSVGElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.argTypes = {
  ...WithRef.argTypes,
  ref: { table: { disable: false } },
};
WithRef.parameters = {
  imageSnapshot: { disable: true },
};
WithRef.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const icon = canvas.getByRole('img', { hidden: true });
  await expect(icon).toHaveAttribute('id', 'dummyIdForwardedFromRef');
};

// Når Icon har en id, så har svg-elementet id'en satt
// Når Icon har en custom className, så har svg-elementet className satt og custom stil vises
// Når Icon har en lang, så har svg-elementet lang satt
// Når Icon har en data-testid, så har svg-elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes(FA2-5)';
WithAttributes.args = {
  ...defaultArgs,
  id: 'htmlid',
  className: 'dummyClassname',
  lang: 'nb',
  'data-testid': '123ID',
};
WithAttributes.argTypes = {
  ...WithAttributes.argTypes,
  id: { table: { disable: false } },
  className: { table: { disable: false } },
  lang: { table: { disable: false } },
  'data-testid': { table: { disable: false } },
};
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const icon = canvas.getByRole('img', { hidden: true });
  await expect(icon).toHaveAttribute('id', 'htmlid');
  await expect(icon).toHaveClass('dummyClassname');
  await expect(icon).toHaveAttribute('lang', 'nb');
  await expect(icon).toHaveAttribute('data-testid', '123ID');
};

// Når Icon instansieres, får den riktig defaults
export const Defaults = Template.bind({});
Defaults.storyName = 'With Default - Variant SystemIcon (A1, B1, B5)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  ...Defaults.argTypes,
  svgPath: {
    table: { disable: false },
    options: Object.keys(SystemSVGPaths),
    mapping: SystemSVGPaths,
  },
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const icon = canvas.getByRole('img', { hidden: true });
  await expect(icon).toBeInTheDocument();
  await expect(icon).toHaveAttribute('viewBox', '0 0 24 24');
  await expect(icon).toHaveAttribute('aria-hidden', 'true');
  await expect(icon).not.toHaveAttribute('aria-label');
  await expect(icon).not.toHaveAttribute('aria-labelledby');
};

// Når Icon instansieres med variant="themeIcon", får den riktig viewBox og className
export const WithVariant = Template.bind({});
WithVariant.storyName = 'With Variant ThemeIcon (A1)';
WithVariant.args = {
  ...defaultArgs,
  svgPath: AndreForholdSVGpath,
  variant: 'themeIcon',
};
WithVariant.argTypes = {
  ...WithVariant.argTypes,
  svgPath: {
    table: { disable: false },
    options: Object.keys(ThemeSVGPaths),
    mapping: ThemeSVGPaths,
  },
  variant: { table: { disable: false } },
};
WithVariant.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const icon = canvas.getByRole('img', { hidden: true });
  await expect(icon).toBeInTheDocument();
  await expect(icon).toHaveAttribute('viewBox', '0 0 48 48');
  await expect(icon.classList.toString()).toContain('Icon_themeIcon_medium');
};

// Når Icon instansieres med en custom svgPath, så rendres den riktig
export const WithCustomSVG = Template.bind({});
WithCustomSVG.storyName = 'With Custom SVG (A4)';
WithCustomSVG.args = {
  ...defaultArgs,
  svgPath: <path d={'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z'} />,
};
WithCustomSVG.argTypes = {
  ...WithCustomSVG.argTypes,
  svgPath: {
    table: { disable: false },
    control: { type: null },
  },
};

// Når Icon har en title, får den riktig <title> tag og aria attributer
export const WithTitle = Template.bind({});
WithTitle.storyName = 'With Title (B3)';
WithTitle.args = {
  ...defaultArgs,
  title: 'Min custom title beskrivelse',
};
WithTitle.argTypes = {
  ...WithTitle.argTypes,
  title: { table: { disable: false } },
};
WithTitle.parameters = {
  imageSnapshot: { disable: true },
};
WithTitle.play = async ({ canvasElement }): Promise<void> => {
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
};

// Når Icon har en aria-label, får den ikke noe <title> tag, og riktig aria attributer
export const WithAriaLabel = Template.bind({});
WithAriaLabel.storyName = 'With AriaLabel (B4)';
WithAriaLabel.args = {
  ...defaultArgs,
  ariaLabel: 'min custom aria-label beskrivelse',
};
WithAriaLabel.argTypes = {
  ...WithAriaLabel.argTypes,
  ariaLabel: { table: { disable: false } },
};
WithAriaLabel.parameters = {
  imageSnapshot: { disable: true },
};
WithAriaLabel.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const icon = canvas.getByRole('img');
  await expect(icon).toBeInTheDocument();
  await expect(icon).toHaveAttribute('aria-hidden', 'false');
  await expect(icon).toHaveAttribute(
    'aria-label',
    'min custom aria-label beskrivelse'
  );
  await expect(icon).not.toHaveAttribute('aria-labelledby');
  // eslint-disable-next-line testing-library/no-node-access
  const title = icon.querySelector('title');
  await expect(title).not.toBeInTheDocument();
};

// Når Icon har en variant og en size, får den riktig className og ser riktig ut
export const SystemIconSizeSmall = Template.bind({});
SystemIconSizeSmall.storyName = 'With Size Small - SystemIcon (A2)';
SystemIconSizeSmall.args = {
  ...defaultArgs,
  svgPath: AccountChildSVGpath,
  variant: 'systemIcon',
  size: 'small',
};
SystemIconSizeSmall.argTypes = {
  ...SystemIconSizeSmall.argTypes,
  size: {
    table: { disable: false },
    control: 'select',
    options: [...sizeArr].slice(1),
  },
};
SystemIconSizeSmall.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const icon = canvas.getByRole('img', { hidden: true });
  await expect(icon.classList.toString()).toContain('Icon_systemIcon_small');
};

// Når Icon har en variant og en size, får den riktig className og ser riktig ut
export const SystemIconSizeMedium = Template.bind({});
SystemIconSizeMedium.storyName = 'With Size Medium - SystemIcon (A2)';
SystemIconSizeMedium.args = {
  ...defaultArgs,
  svgPath: AccountChildSVGpath,
  variant: 'systemIcon',
  size: 'medium',
};
SystemIconSizeMedium.argTypes = {
  ...SystemIconSizeMedium.argTypes,
  size: {
    table: { disable: false },
    control: 'select',
    options: [...sizeArr].slice(1),
  },
};
SystemIconSizeMedium.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const icon = canvas.getByRole('img', { hidden: true });
  await expect(icon.classList.toString()).toContain('Icon_systemIcon_medium');
};

// Når Icon har en variant og en size, får den riktig className og ser riktig ut
export const SystemIconSizeLarge = Template.bind({});
SystemIconSizeLarge.storyName = 'With Size Large - SystemIcon (A2)';
SystemIconSizeLarge.args = {
  ...defaultArgs,
  svgPath: AccountChildSVGpath,
  variant: 'systemIcon',
  size: 'large',
};
SystemIconSizeLarge.argTypes = {
  ...SystemIconSizeLarge.argTypes,
  size: {
    table: { disable: false },
    control: 'select',
    options: [...sizeArr].slice(1),
  },
};
SystemIconSizeLarge.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const icon = canvas.getByRole('img', { hidden: true });
  await expect(icon.classList.toString()).toContain('Icon_systemIcon_large');
};

// Når Icon har en variant og en size, får den riktig className og ser riktig ut
export const SystemIconSizeExtraLarge = Template.bind({});
SystemIconSizeExtraLarge.storyName = 'With Size Extra Large - SystemIcon (A2)';
SystemIconSizeExtraLarge.args = {
  ...defaultArgs,
  svgPath: AccountChildSVGpath,
  variant: 'systemIcon',
  size: 'extraLarge',
};
SystemIconSizeExtraLarge.argTypes = {
  ...SystemIconSizeExtraLarge.argTypes,
  size: {
    table: { disable: false },
    control: 'select',
    options: [...sizeArr].slice(1),
  },
};
SystemIconSizeExtraLarge.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const icon = canvas.getByRole('img', { hidden: true });
  await expect(icon.classList.toString()).toContain(
    'Icon_systemIcon_extraLarge'
  );
};

// Når Icon har en variant og en size, får den riktig className og ser riktig ut
export const ThemeIconSizeMedium = Template.bind({});
ThemeIconSizeMedium.storyName = 'With Size Medium - ThemeIcon (A3)';
ThemeIconSizeMedium.args = {
  ...defaultArgs,
  svgPath: AndreForholdSVGpath,
  variant: 'themeIcon',
  size: 'medium',
};
ThemeIconSizeMedium.argTypes = {
  ...ThemeIconSizeMedium.argTypes,
  size: {
    table: { disable: false },
    control: 'select',
    options: [sizeArr[2], sizeArr[3]],
  },
};
ThemeIconSizeMedium.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const icon = canvas.getByRole('img', { hidden: true });
  await expect(icon.classList.toString()).toContain('Icon_themeIcon_medium');
};

// Når Icon har en variant og en size, får den riktig className og ser riktig ut
export const ThemeIconSizeLarge = Template.bind({});
ThemeIconSizeLarge.storyName = 'With Size Large - ThemeIcon (A3)';
ThemeIconSizeLarge.args = {
  ...defaultArgs,
  svgPath: AndreForholdSVGpath,
  variant: 'themeIcon',
  size: 'large',
};
ThemeIconSizeLarge.argTypes = {
  ...ThemeIconSizeLarge.argTypes,
  size: {
    table: { disable: false },
    control: 'select',
    options: [sizeArr[2], sizeArr[3]],
  },
};
ThemeIconSizeLarge.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const icon = canvas.getByRole('img', { hidden: true });
  await expect(icon.classList.toString()).toContain('Icon_themeIcon_large');
};
