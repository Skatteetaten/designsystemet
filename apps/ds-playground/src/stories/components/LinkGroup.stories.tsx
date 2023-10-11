import {
  getLinkGroupVariantDefault,
  Link,
  LinkGroup,
  linkGroupVariantArr,
} from '@skatteetaten/ds-buttons';
import { linkColorArr } from '@skatteetaten/ds-core-utils';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: LinkGroup,
  subcomponents: {
    'LinkGroup.Link': Link,
  },
  title: 'Komponenter/LinkGroup',
  argTypes: {
    // Props
    children: { control: 'object', table: { category: category.props } },
    color: {
      options: ['default', ...linkColorArr],
      mapping: {
        default: '',
        ...linkColorArr,
      },
      defaultValue: 'default',
      control: 'inline-radio',
      table: {
        category: category.props,
      },
    },
    hasSpacing: { control: 'boolean', table: { category: category.props } },
    variant: {
      options: [...linkGroupVariantArr],
      control: 'inline-radio',
      table: { category: category.props },
    },
  },
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-buttons'),
  },
} as Meta<typeof LinkGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateExample: StoryFn<typeof LinkGroup> = () => (
  <>
    <LinkGroup hasSpacing>
      <LinkGroup.Link key={'linkGroupLink_1'} href={'#storybook-root'}>
        {'Rettledning til RF-1167 Næringsoppgave 2 for 2020 (PDF)'}
      </LinkGroup.Link>
      <LinkGroup.Link key={'linkGroupLink_2'} href={'#storybook-root'}>
        {'Rettledning til RF-1167 Næringsoppgave 2 for 2020 (Word)'}
      </LinkGroup.Link>
    </LinkGroup>
    <LinkGroup>
      <LinkGroup.Link key={'linkGroupLink_1'} href={'#storybook-root'}>
        {'Kontakt oss'}
      </LinkGroup.Link>
      <LinkGroup.Link key={'linkGroupLink_2'} href={'#storybook-root'}>
        {'Jobb i Skatteetaten'}
      </LinkGroup.Link>
      <LinkGroup.Link key={'linkGroupLink_3'} href={'#storybook-root'}>
        {'Om oss'}
      </LinkGroup.Link>
      <LinkGroup.Link key={'linkGroupLink_4'} href={'#storybook-root'}>
        {'Analyse og rapporter'}
      </LinkGroup.Link>
      <LinkGroup.Link key={'linkGroupLink_5'} href={'#storybook-root'}>
        {'Forskning'}
      </LinkGroup.Link>
    </LinkGroup>
  </>
);

export const LinkGroupDefault = {
  name: 'Default',
  args: {
    variant: getLinkGroupVariantDefault(),
    children: [
      <LinkGroup.Link
        key={'linkGroupLink_1'}
        target={'_blank'}
        href={'#storybook-root'}
      >
        {'Er du pendler?'}
      </LinkGroup.Link>,
      <LinkGroup.Link key={'linkGroupLink_2'} href={'#storybook-root'}>
        {'Pendler du mye?'}
      </LinkGroup.Link>,
      <LinkGroup.Link key={'linkGroupLink_3'} href={'#storybook-root'}>
        {'Pendler du dagen lang?'}
      </LinkGroup.Link>,
    ],
  },
} satisfies Story;

export const LinkGroupExample = {
  render: TemplateExample,
  name: 'Example',
  parameters: {
    controls: { disable: true },
  },
} satisfies Story;
