import { Meta, StoryObj } from '@storybook/react-vite';

import { LinkGroup } from '@skatteetaten/ds-buttons';

import { category } from '../../../.storybook/helpers';

LinkGroup.Link.displayName = 'LinkGroup.Link';

const meta = {
  component: LinkGroup,
  title: 'Komponenter/LinkGroup',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
    color: { control: 'inline-radio', table: { category: category.props } },
    hasSpacing: { table: { category: category.props } },
    variant: { control: 'inline-radio', table: { category: category.props } },
  },
  args: {
    children: [
      <LinkGroup.Link
        key={'linkGroupLink1'}
        target={'_blank'}
        href={'#storybook-root'}
      >
        {'Er du pendler?'}
      </LinkGroup.Link>,
      <LinkGroup.Link key={'linkGroupLink2'} href={'#storybook-root'}>
        {'Pendler du mye?'}
      </LinkGroup.Link>,
      <LinkGroup.Link key={'linkGroupLink3'} href={'#storybook-root'}>
        {'Pendler du dagen lang?'}
      </LinkGroup.Link>,
    ],
  },
} satisfies Meta<typeof LinkGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
