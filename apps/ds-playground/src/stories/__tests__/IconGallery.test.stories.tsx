import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Icon } from '@skatteetaten/ds-icons';

import { SystemSVGPaths } from '../utils/icon.systems';
import { ThemeSVGPaths } from '../utils/icon.themes';

const meta = {
  component: Icon,
  title: 'Tester/Icon Gallery',
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
} satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateSystemIcons: StoryFn<typeof Icon> = () => (
  <>
    {Object.entries(SystemSVGPaths).map(([svgPathName, svgPath]) => (
      <Icon key={svgPathName} svgPath={svgPath} />
    ))}
  </>
);

const TemplateThemeIcons: StoryFn<typeof Icon> = () => (
  <>
    {Object.entries(ThemeSVGPaths).map(([svgPathName, svgPath]) => (
      <Icon key={svgPathName} svgPath={svgPath} variant={'themeIcon'} />
    ))}
  </>
);

export const SystemIcons = {
  render: TemplateSystemIcons,
  name: 'SystemIcons Image Snaphot',
} as Story;

export const ThemeIcons = {
  render: TemplateThemeIcons,
  name: 'ThemeIcons Image Snaphot',
} as Story;
