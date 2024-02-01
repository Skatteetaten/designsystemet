import { Link, LinkProps } from '@skatteetaten/ds-buttons';
import { Footer } from '@skatteetaten/ds-layout';
import { Meta, StoryObj } from '@storybook/react';

import LinkMeta from './Link.stories';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Link,
  title: 'Komponenter/Footer/Link',
  argTypes: {
    ...LinkMeta.argTypes,
    color: { table: { disable: true } },
  },
  args: {
    children: 'Satser',
    href: '#',
  },
  parameters: {
    version: getVersion('ds-layout'),
  },
} satisfies Meta<LinkProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  parameters: {
    backgrounds: { default: 'themePrimary' },
  },
  render: (args) => <Footer.Link {...args}>{args.children}</Footer.Link>,
};
