import { Meta, StoryObj } from '@storybook/react-vite';

import { TermTip } from '@skatteetaten/ds-overlays';

import { category } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';

export default {
  component: TermTip.Content,
  title: 'Komponenter/TermTip/Content',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
  },
} satisfies Meta<typeof TermTip.Content>;

export const Preview: StoryObj<typeof TermTip> = {
  render: (args) => (
    <div className={'centerContent'}>
      <TermTip isOpen>
        <TermTip.Content {...args}>{loremIpsum}</TermTip.Content>
      </TermTip>
    </div>
  ),
  args: {
    children: loremIpsum,
  },
};
