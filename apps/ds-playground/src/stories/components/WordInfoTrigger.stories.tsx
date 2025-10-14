import { Meta, StoryObj } from '@storybook/react-vite';

import { WordInfo, getWordInfoHasIconDefault } from '@skatteetaten/ds-overlays';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';

export default {
  component: WordInfo.Trigger,
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    hasIcon: {
      table: { category: category.props },
      defaultValue: { summary: getWordInfoHasIconDefault().toString() },
    },
    //Events
    onClick: { ...htmlEventDescription },
  },
  args: {
    children: 'arkskrift',
  },
} satisfies Meta<typeof WordInfo.Trigger>;

export const Preview: StoryObj<typeof WordInfo.Trigger> = {
  render: (args) => (
    <div className={'centerContent'}>
      <WordInfo>
        <WordInfo.Trigger {...args} />
        <WordInfo.Content>{loremIpsum}</WordInfo.Content>
      </WordInfo>
    </div>
  ),
  args: {},
};
