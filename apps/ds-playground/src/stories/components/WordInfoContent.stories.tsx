import { Meta, StoryObj } from '@storybook/react-vite';

import { WordInfo } from '@skatteetaten/ds-overlays';

import { category } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';

export default {
  component: WordInfo.Content,
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
  },
} satisfies Meta<typeof WordInfo.Content>;

export const Preview: StoryObj<typeof WordInfo.Content> = {
  render: (args) => (
    <div className={'centerContent'}>
      <WordInfo isOpen>
        <WordInfo.Content {...args}>{loremIpsum}</WordInfo.Content>
      </WordInfo>
    </div>
  ),
  args: {
    children: loremIpsum,
  },
};
