import {
  getLinkGroupVariantDefault,
  Link,
  LinkGroup,
  linkGroupVariantArr,
} from '@skatteetaten/ds-buttons';
import { linkColorArr } from '@skatteetaten/ds-core-utils';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
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
  parameters: {
    version: getVersion('ds-buttons'),
    docs: { source: { type: 'code' } },
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

const TemplateExample: ComponentStory<typeof LinkGroup> = () => (
  <>
    <LinkGroup hasSpacing>
      <LinkGroup.Link key={'linkGroupLink_1'} href={'#root'}>
        {'Rettledning til RF-1167 Næringsoppgave 2 for 2020 (PDF)'}
      </LinkGroup.Link>
      <LinkGroup.Link key={'linkGroupLink_2'} href={'#root'}>
        {'Rettledning til RF-1167 Næringsoppgave 2 for 2020 (Word)'}
      </LinkGroup.Link>
    </LinkGroup>
    <LinkGroup>
      <LinkGroup.Link key={'linkGroupLink_1'} href={'#root'}>
        {'Kontakt oss'}
      </LinkGroup.Link>
      <LinkGroup.Link key={'linkGroupLink_2'} href={'#root'}>
        {'Jobb i Skatteetaten'}
      </LinkGroup.Link>
      <LinkGroup.Link key={'linkGroupLink_3'} href={'#root'}>
        {'Om oss'}
      </LinkGroup.Link>
      <LinkGroup.Link key={'linkGroupLink_4'} href={'#root'}>
        {'Analyse og rapporter'}
      </LinkGroup.Link>
      <LinkGroup.Link key={'linkGroupLink_5'} href={'#root'}>
        {'Forskning'}
      </LinkGroup.Link>
    </LinkGroup>
  </>
);

export const LinkGroupDefault = TemplateDefault.bind({});
export const LinkGroupExample = TemplateExample.bind({});
LinkGroupDefault.storyName = 'Default';
LinkGroupExample.storyName = 'Example';
LinkGroupExample.parameters = {
  controls: { disabled: true },
};

LinkGroupDefault.args = {
  variant: getLinkGroupVariantDefault(),
};
