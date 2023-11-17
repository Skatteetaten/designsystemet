import {
  LinkGroup,
  getLinkGroupVariantDefault,
} from '@skatteetaten/ds-buttons';
import { linkColorArr } from '@skatteetaten/ds-core-utils';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
LinkGroup.Link = { ...LinkGroup.Link };
LinkGroup.Link.displayName = 'LinkGroup.Link';

export default {
  component: LinkGroup,
  title: 'Komponenter/LinkGroup',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    color: {
      options: [undefined, ...linkColorArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        type: { summary: linkColorArr },
      },
    },
    hasSpacing: { table: { category: category.props } },
    variant: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getLinkGroupVariantDefault() },
      },
    },
  },
  parameters: {
    version: getVersion('ds-buttons'),
  },
} as Meta<typeof LinkGroup>;

export const Preview: StoryObj<typeof LinkGroup> = {
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
};

export const Example: StoryFn<typeof LinkGroup> = (_args) => (
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

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};
