import { Meta, StoryObj } from '@storybook/react-vite';

import { RadioGroup } from '@skatteetaten/ds-forms';

import { category, htmlEventDescription } from '../../../.storybook/helpers';

const meta = {
  component: RadioGroup.Radio,
  title: 'Komponenter/RadioGroup/Radio',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    description: { table: { category: category.props } },
    // HTML
    value: { control: 'text', table: { category: category.htmlAttribute } },
    form: { table: { category: category.htmlAttribute } },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
    // Events
    onBlur: { ...htmlEventDescription },
    onChange: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
  },
  args: {
    children: 'Enkeltpersonsforetak',
  },
} satisfies Meta<typeof RadioGroup.Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
