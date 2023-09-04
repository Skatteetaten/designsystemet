import { RadioGroup } from '@skatteetaten/ds-forms';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: RadioGroup.Radio,
  title: 'Komponenter/RadioGroup/Radio',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    description: { table: { category: category.props } },
    // HTML
    value: {
      table: { category: category.htmlAttribute },
    },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
  },
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-forms'),
    docs: { source: { type: 'code' } },
  },
} satisfies Meta<typeof RadioGroup.Radio>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateDefault: StoryFn<typeof RadioGroup.Radio> = (args) => {
  return <RadioGroup.Radio {...args} />;
};

export const RadioDefault = {
  render: TemplateDefault,
  name: 'Default',

  args: {
    children: 'Enkeltpersonsforetak',
  },
} satisfies Story;
