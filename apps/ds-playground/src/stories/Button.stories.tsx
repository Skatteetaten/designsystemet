/* eslint-disable sonarjs/no-duplicate-string */
import {
  Button,
  ButtonProps,
  buttonVariantArr,
  getButtonVariantDefault,
} from '@skatteetaten/ds-buttons';
import { Story, Meta } from '@storybook/react';

import { category, htmlEventDescription } from '../../.storybook/helpers';
import { SystemSVGPaths } from './utils/icon.systems';
import './classnames.stories.css';
import { getParameters } from './utils/parameters.utils';

export default {
  component: Button,
  title: 'Design System/Button',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    variant: {
      options: [...buttonVariantArr],
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getButtonVariantDefault() },
      },
    },
    // HTML
    accessKey: {
      table: { category: category.htmlAttribute },
    },
    disabled: {
      control: 'boolean',
      table: {
        category: category.htmlAttribute,
      },
    },
    type: {
      control: 'text',
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: 'button' },
      },
    },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
    // Events
    onBlur: { ...htmlEventDescription },
    onClick: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
  },
} as Meta<ButtonProps>;

const TemplateDefault: Story<ButtonProps> = (args) => (
  <Button {...args} variant={args.variant}>
    {args.children}
  </Button>
);

const TemplateExample: Story<ButtonProps> = () => (
  <div>
    <Button className={'exampleSpacing'} variant={'primary'}>
      {'Send inn skjema'}
    </Button>
    <Button className={'exampleSpacing'} variant={'secondary'}>
      {'Avbryt'}
    </Button>
    <div>
      <Button className={'exampleSpacing'} variant={'tertiary'}>
        {'Logg inn'}
      </Button>
    </div>
    <Button className={'exampleSpacing'} variant={'danger'}>
      {'Slett'}
    </Button>
  </div>
);

const designParameters = [
  {
    name: 'Varianter og tilstander',
    type: 'figma',
    url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=1765%3A8640',
  },
  {
    name: 'Luft og fontstørrelser',
    type: 'figma',
    url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=123%3A1494',
  },
];

export const ButtonDefault = TemplateDefault.bind({});
export const ButtonExample = TemplateExample.bind({});
ButtonDefault.storyName = 'Default';
ButtonExample.storyName = 'Example';
ButtonDefault.parameters = getParameters(designParameters);
ButtonExample.parameters = getParameters(designParameters);

ButtonDefault.args = {
  children: 'Klikk',
  variant: 'primary',
};
