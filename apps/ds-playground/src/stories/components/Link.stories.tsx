import { Link } from '@skatteetaten/ds-buttons';
import { linkColorArr } from '@skatteetaten/ds-core-utils';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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

    isExternal: {
      control: 'boolean',
      table: { category: category.props },
    },
    svgPath: {
      options: [''].concat(Object.keys(SystemSVGPaths)),
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
} as ComponentMeta<typeof Link>;

const TemplateDefault: ComponentStory<typeof Link> = (args) => (
  <Link {...args} onClick={action('KlikkEvent Link')} />
);

const TemplateExample: ComponentStory<typeof Link> = () => (
  <div>
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
  </div>
);

export const LinkDefault = TemplateDefault.bind({});
export const LinkExample = TemplateExample.bind({});
LinkDefault.storyName = 'Default';
LinkExample.storyName = 'Example';
LinkExample.parameters = {
  controls: { disabled: true },
};

LinkDefault.args = {
  href: '#',
  children: 'Er du pendler?',
};
