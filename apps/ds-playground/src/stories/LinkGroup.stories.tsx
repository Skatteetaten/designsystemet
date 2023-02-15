import {
  getLinkGroupVariantDefault,
  LinkGroup,
  linkGroupVariantArr,
} from '@skatteetaten/ds-buttons';
import { linkColorArr } from '@skatteetaten/ds-core-utils';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category } from '../../.storybook/helpers';

export default {
  component: LinkGroup,
  title: 'Design System/LinkGroup',
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
} as ComponentMeta<typeof LinkGroup>;

const TemplateDefault: ComponentStory<typeof LinkGroup> = (args) => (
  <LinkGroup {...args}>
    <LinkGroup.Link key={'linkGroupLink_1'} href={'#root'}>
      {'Er du pendler?'}
    </LinkGroup.Link>
    <LinkGroup.Link key={'linkGroupLink_2'} href={'#root'}>
      {'Pendler du mye?'}
    </LinkGroup.Link>
    <LinkGroup.Link key={'linkGroupLink_3'} href={'#root'}>
      {'Pendler du dagen lang?'}
    </LinkGroup.Link>
  </LinkGroup>
);

const linkGroupDefaultParameters = {
  design: [
    {
      name: 'Varianter og tilstander',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=14%3A200',
    },
    {
      name: 'Luft og fontstørrelser',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=14%3A188',
    },
  ],
};

export const LinkGroupDefault = TemplateDefault.bind({});
LinkGroupDefault.storyName = 'Default';
LinkGroupDefault.args = {
  variant: getLinkGroupVariantDefault(),
};
LinkGroupDefault.parameters = linkGroupDefaultParameters;
