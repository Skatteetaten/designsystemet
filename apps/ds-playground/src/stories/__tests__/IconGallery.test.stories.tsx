import { Icon } from '@skatteetaten/ds-icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SystemSVGPaths } from '../utils/icon.systems';
import { ThemeSVGPaths } from '../utils/icon.themes';

export default {
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
} as ComponentMeta<typeof Icon>;

const TemplateSystemIcons: ComponentStory<typeof Icon> = () => (
  <div data-test-block>
    {Object.entries(SystemSVGPaths).map(([svgPathName, svgPath]) => (
      <Icon key={svgPathName} svgPath={svgPath} />
    ))}
  </div>
);

const TemplateThemeIcons: ComponentStory<typeof Icon> = () => (
  <div data-test-block>
    {Object.entries(ThemeSVGPaths).map(([svgPathName, svgPath]) => (
      <Icon key={svgPathName} svgPath={svgPath} variant={'themeIcon'} />
    ))}
  </div>
);

export const SystemIcons = TemplateSystemIcons.bind({});
SystemIcons.storyName = 'SystemIcons Image Snaphot';

export const ThemeIcons = TemplateThemeIcons.bind({});
ThemeIcons.storyName = 'ThemeIcons Image Snaphot';
