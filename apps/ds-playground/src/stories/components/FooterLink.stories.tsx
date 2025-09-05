import { Meta, StoryObj } from '@storybook/react-vite';

import { Link, LinkProps } from '@skatteetaten/ds-buttons';
import { Footer } from '@skatteetaten/ds-layout';

import LinkMeta from './Link.stories';

const meta = {
  component: Link,
  argTypes: {
    ...LinkMeta.argTypes,
    color: { table: { disable: true } },
  },
  args: {
    children: 'Satser',
    href: '#',
  },
} satisfies Meta<LinkProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  globals: {
    backgrounds: { value: 'themePrimary' },
  },
  render: (args) => <Footer.Link {...args}>{args.children}</Footer.Link>,
} satisfies Story;
