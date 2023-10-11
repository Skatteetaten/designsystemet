import { sizeArr } from '@skatteetaten/ds-core-utils';
import {
  Icon,
  IconProps,
  getIconVariantDefault,
  getIconSizeDefault,
  SystemSVGPathsAndIcons,
  ThemeSVGPathsAndIcons,
  iconVariantArr,
} from '@skatteetaten/ds-icons';
import { ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { SystemIconLabels, SystemSVGPaths } from '../utils/icon.systems';
import { ThemeIconLabels, ThemeSVGPaths } from '../utils/icon.themes';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Icon,
  title: 'Komponenter/Icon',
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof meta>;

const commonArgTypes = {
  // Props
  title: {
    table: {
      category: category.props,
    },
  },
  // Aria
  ariaLabel: { table: { category: category.aria } },
};

const iconDefaultParameters = {
  docs: {
    page: (): JSX.Element => <ArgsTable story={PRIMARY_STORY} />,
  },
  version: getVersion('ds-icons'),
};

const defaultSystemIconVariant = getIconVariantDefault();

const Template: StoryFn<typeof Icon> = (args) => (
  <div>
    <Icon {...args} />
  </div>
);

export const SystemIcon = {
  render: Template,

  argTypes: {
    ...commonArgTypes,
    size: {
      control: 'select',
      options: [...sizeArr].slice(1),
      table: {
        type: { summary: sizeArr.toString() },
        category: category.props,
        defaultValue: { summary: getIconSizeDefault() },
      },
    },
    svgPath: {
      control: {
        type: 'select',
        labels: SystemIconLabels,
      },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    variant: {
      name: 'variant',
      control: { type: null },
      table: {
        type: { summary: iconVariantArr.toString() },
        category: category.props,
        defaultValue: { summary: defaultSystemIconVariant },
      },
    },
  },

  args: {
    size: getIconSizeDefault(),
    svgPath: SystemSVGPathsAndIcons.AccountChildSVGpath,
    variant: defaultSystemIconVariant,
  },

  parameters: iconDefaultParameters,
} satisfies Story;

export const ThemeIcon: StoryObj<IconProps> = {
  render: Template,

  argTypes: {
    ...commonArgTypes,
    size: {
      control: 'select',
      options: [sizeArr[2], sizeArr[3]],
      table: {
        type: { summary: sizeArr.toString() },
        category: category.props,
        defaultValue: { summary: getIconSizeDefault() },
      },
    },
    svgPath: {
      options: Object.keys(ThemeSVGPaths),
      mapping: ThemeSVGPaths,
      control: {
        labels: ThemeIconLabels,
      },
      table: { category: category.props },
    },
    variant: {
      name: 'variant',
      control: { type: null },
      table: {
        type: { summary: iconVariantArr.toString() },
        category: category.props,
        defaultValue: { summary: 'themeIcon' },
      },
    },
  },

  args: {
    size: getIconSizeDefault(),
    svgPath: ThemeSVGPathsAndIcons.AndreForholdSVGpath,
    variant: 'themeIcon',
  },

  parameters: iconDefaultParameters,
} satisfies Story;
