import { Meta, StoryObj } from '@storybook/react-vite';

import { getPopoverContentAsDefault, Popover } from '@skatteetaten/ds-overlays';

import { category } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';

export default {
  component: Popover.Content,
  title: 'Komponenter/Popover/Content',
  argTypes: {
    // Props
    as: {
      table: {
        category: category.props,
        defaultValue: { summary: getPopoverContentAsDefault() },
      },
    },
    children: {
      control: 'text',
      table: { category: category.props },
      description:
        'Innhold i popup-boksen. NB. Hvis as-prop er satt til span, må innholdet være en string eller et HTML-element som er tillatt i en span. Finn ut hvilke <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content" target="_blank">elementer som er tillatt i en span</a>.',
    },
    classNames: { control: false, table: { category: category.props } },
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
};
