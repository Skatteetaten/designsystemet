import { Link } from '@skatteetaten/ds-buttons';
import { linkColorArr } from '@skatteetaten/ds-core-utils';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { category, htmlEventDescription } from '../../.storybook/helpers';
import { SystemSVGPaths } from './utils/icon.systems';
import { getParameters } from './utils/parameters.utils';

export default {
  component: Link,
  title: 'Design System/Link',
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

const designParameters = [
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
];

export const LinkDefault = TemplateDefault.bind({});
export const LinkExample = TemplateExample.bind({});
LinkDefault.storyName = 'Default';
LinkExample.storyName = 'Example';
LinkDefault.parameters = getParameters(designParameters);
LinkExample.parameters = getParameters(designParameters);

LinkDefault.args = {
  href: '#',
  children: 'Er du pendler?',
};
