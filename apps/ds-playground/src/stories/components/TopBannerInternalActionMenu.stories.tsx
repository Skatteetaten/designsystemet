import { Meta, StoryObj } from '@storybook/react-vite';

import { TopBannerInternal } from '@skatteetaten/ds-layout';

// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  defaultMenuSvgPath,
  getDefaultMenuLabel,
} from '../../../../../libs/ds-layout/src/TopBannerInternal/TopBannerInternalActionMenu/TopBannerInternalActionMenu';
import { category, svgPathDescription } from '../../../.storybook/helpers';

const meta = {
  component: TopBannerInternal.ActionMenu,
  title: 'Komponenter/TopBannerInternal/ActionMenu',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    menuActionsRef: { control: false, table: { category: category.props } },
    menuLabel: {
      table: {
        category: category.props,
        defaultValue: { summary: getDefaultMenuLabel() },
      },
    },
    svgPath: {
      ...svgPathDescription,
      table: {
        category: category.props,
        defaultValue: { summary: defaultMenuSvgPath.name },
      },
    },
  },
  args: {
    children: 'Menu Content',
  },
  globals: {
    backgrounds: { value: 'themePrimary' },
  },
} satisfies Meta<typeof TopBannerInternal.ActionMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
