import { Popover } from '@skatteetaten/ds-overlays';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { getVersion } from '../utils/version.utils';

export default {
  component: Popover.Content,
  title: 'Komponenter/Popover/Content',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    // Events
    onClose: { control: { type: null }, table: { category: category.event } },
  },
  parameters: {
    version: getVersion('ds-overlays'),
  },
} satisfies Meta<typeof Popover.Content>;

export const Preview: StoryObj<typeof Popover> = {
  render: (args) => (
    <div className={'centerContent'}>
      <Popover isOpen>
        <Popover.Content {...args}>{loremIpsum}</Popover.Content>
      </Popover>
    </div>
  ),

  args: {
    children: loremIpsum,
  },

  parameters: {
    viewport: {
      viewPortHeight: 1200,
    },
  },
};
