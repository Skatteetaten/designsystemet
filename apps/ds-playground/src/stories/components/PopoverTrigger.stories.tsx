import { getIconButtonSizeDefault } from '@skatteetaten/ds-buttons';
import { sizeArr } from '@skatteetaten/ds-core-utils';
import { Popover } from '@skatteetaten/ds-overlays';
import { Meta, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { SystemSVGPaths } from '../utils/icon.systems';

const availableSizes = [...sizeArr].slice(0, 4);
export default {
  component: Popover.Trigger,
  title: 'Komponenter/Popover/Trigger',
  argTypes: {
    // Props
    size: {
      control: 'radio',
      options: availableSizes,
      table: {
        category: category.props,
        defaultValue: { summary: getIconButtonSizeDefault() },
      },
    },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },

    //HTML
    title: { table: { category: category.htmlAttribute } },
    //Aria
    ariaDescribedby: { table: { category: category.aria } },
    //Events
    onClick: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
    onBlur: { ...htmlEventDescription },
  },
} satisfies Meta<typeof Popover.Trigger>;

export const Preview: StoryObj<typeof Popover.Trigger> = {
  render: (args) => (
    <div className={'centerContent'}>
      <Popover>
        <Popover.Trigger {...args} />
        <Popover.Content>{loremIpsum}</Popover.Content>
      </Popover>
    </div>
  ),
  args: {},
  parameters: {
    viewport: {
      viewPortHeight: 1200,
    },
  },
};
