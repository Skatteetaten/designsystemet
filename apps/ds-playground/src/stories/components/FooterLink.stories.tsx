import { Link } from '@skatteetaten/ds-buttons';
import { Footer } from '@skatteetaten/ds-layout';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import LinkMeta from './Link.stories';
import { getVersion } from '../utils/version.utils';

export default {
  component: Link,
  title: 'Komponenter/Footer/Link',
  argTypes: {
    ...LinkMeta.argTypes,
    color: { table: { disable: true } },
  },
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-layout'),
  },
} satisfies Meta<typeof Link>;

const Template: StoryFn<typeof Footer.Link> = () => (
  <Footer titleFirstColumn={'Om Skatteetaten'}>
    <Footer.Link href={'#'}>{'Satser'}</Footer.Link>
    <Footer.Link href={'#'}>{'Skjema og tjenester'}</Footer.Link>
    <Footer.Link href={'#'}>{'RSS'}</Footer.Link>
    <Footer.Link href={'#'}>{'Tips oss'}</Footer.Link>
    <Footer.Link href={'#'} isExternal>
      {'Koronatiltak'}
    </Footer.Link>
  </Footer>
);

export const Preview = {
  render: Template,
  args: {
    children: 'dummy',
    href: '#',
  },
} satisfies StoryObj<typeof Link>;
