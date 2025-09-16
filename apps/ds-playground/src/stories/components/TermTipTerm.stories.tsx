import { Meta, StoryObj } from '@storybook/react-vite';

import { TermTip } from '@skatteetaten/ds-overlays';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';

export default {
  component: TermTip.Term,
  title: 'Komponenter/TermTip/Term',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    hasIcon: { table: { category: category.props } },
    //Events
    onClick: { ...htmlEventDescription },
  },
  args: {
    children: 'arkskrift',
  },
} satisfies Meta<typeof TermTip.Term>;

export const Preview: StoryObj<typeof TermTip.Term> = {
  render: (args) => (
    <div className={'centerContent'}>
      <TermTip>
        <TermTip.Term {...args} />
        <TermTip.Content>{loremIpsum}</TermTip.Content>
      </TermTip>
    </div>
  ),
  args: {},
};
