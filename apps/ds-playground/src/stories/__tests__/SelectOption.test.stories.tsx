import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Select } from '@skatteetaten/ds-forms';

const meta = {
  component: Select.Option,
  title: 'Tester/Select/Option',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    // HTML
    value: { table: { disable: true } },
  },
} satisfies Meta<typeof Select.Option>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Select.Option> = (args) => (
  <Select.Option {...args} />
);

const optionText = 'Option 1';
const optionValue = 'option1';
const defaultArgs = {
  children: optionText,
};

export const WithRef = {
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLOptionElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const option = canvas.getByText(optionText);
    await expect(option).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  render: Template,
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const optionNode = canvas.getByText(optionText);
    await expect(optionNode).toHaveAttribute('id', 'htmlid');
    await expect(optionNode).toHaveAttribute('data-testid', '123ID');
    await expect(optionNode).toHaveClass('dummyClassname');
    await expect(optionNode).toHaveAttribute('lang', 'nb');
  },
} satisfies Story;

export const WithChildrenAndValue = {
  render: Template,
  name: 'With Children And Value',
  args: {
    ...defaultArgs,
    value: optionValue,
  },
  argTypes: {
    children: { table: { disable: false } },
    value: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const optionNode = canvas.getByText(optionText);
    await expect(optionNode).toBeInTheDocument();
    await expect(optionNode).toHaveValue(optionValue);
  },
} satisfies Story;
