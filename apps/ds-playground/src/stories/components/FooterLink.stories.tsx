import { Link } from '@skatteetaten/ds-buttons';
import { Footer } from '@skatteetaten/ds-layout';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import LinkMeta from './Link.stories';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Link,
  title: 'Komponenter/Footer/Link',
  argTypes: {
    ...LinkMeta.argTypes,
    color: { table: { disable: true } },
    titleFirstColumn: { table: { disable: true } },
  },
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-layout'),
  },
} satisfies Meta<typeof Footer.Link>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateDefault: StoryFn<typeof Footer.Link> = (args) => (
  <Footer {...args}>
    <Footer.Link href={'#'}>{'Satser'}</Footer.Link>
    <Footer.Link href={'#'}>{'Skjema og tjenester'}</Footer.Link>
    <Footer.Link href={'#'}>{'RSS'}</Footer.Link>
    <Footer.Link href={'#'}>{'Tips oss'}</Footer.Link>
    <Footer.Link href={'#'} isExternal>
      {'Koronatiltak'}
    </Footer.Link>
  </Footer>
);

export const FooterDefault = {
  render: TemplateDefault,
  name: 'Default',
  args: {
    titleFirstColumn: 'Om Skatteetaten',
  },
} satisfies Story;
