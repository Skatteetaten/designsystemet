import { Link } from '@skatteetaten/ds-buttons';
import { linkColorArr } from '@skatteetaten/ds-core-utils';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

export default {
  component: Link,
  title: 'Komponenter/Link',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    color: {
      options: ['default', ...linkColorArr],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: 'default' },
        type: { summary: ['default', ...linkColorArr] },
      },
    },
    isExternal: {
      table: { category: category.props },
    },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    // HTML
    href: { table: { category: category.htmlAttribute } },
    target: { table: { category: category.htmlAttribute } },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
    // Events
    onClick: { ...htmlEventDescription },
  },
  parameters: {
    version: getVersion('ds-buttons'),
  },
} satisfies Meta<typeof Link>;

export const Preview: StoryObj<typeof Link> = {
  args: {
    children: 'Er du pendler?',
    href: '#',
  },
};

export const Example: StoryFn<typeof Link> = (_args) => (
  <>
    <div className={'exampleSpacing'}>
      <Link href={'#link'}>
        {'Rettledning til RF-1167 Næringsoppgave 2 for 2020 (pdf)'}
      </Link>
    </div>
    <div className={'exampleSpacing'}>
      <Link href={'#link'} isExternal>
        {'Kontakte Statens Vegvesen'}
      </Link>
    </div>
    <div className={'exampleSpacing'}>
      <Link href={'#link'} isExternal>
        {'Brukerveiledning for bilforhandlere'}
      </Link>
    </div>
  </>
);

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};
