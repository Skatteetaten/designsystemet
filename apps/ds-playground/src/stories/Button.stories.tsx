/* eslint-disable sonarjs/no-duplicate-string */
import {
  Button,
  ButtonProps,
  buttonVariantArr,
  getButtonVariantDefault,
} from '@skatteetaten/ds-buttons';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import { category, htmlEventDescription } from '../../.storybook/helpers';
import { SystemSVGPaths } from './utils/icon.systems';
import './classnames.stories.css';

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

const TemplateVariant: Story<ButtonProps> = (args) => (
  <>
    <div style={{ marginBottom: '1em' }}>
      <Button
        {...args}
        variant={'primary'}
        svgPath={args.svgPath}
        onClick={action('Button story klikk på primary')}
      >
        {'Primary knapp'}
      </Button>
    </div>
    <div style={{ marginBottom: '1em' }}>
      <Button
        {...args}
        variant={'secondary'}
        svgPath={args.svgPath}
        onClick={action('Button story klikk på secondary')}
      >
        {'Secondary knapp'}
      </Button>
    </div>
    <div style={{ marginBottom: '1em' }}>
      <Button
        {...args}
        variant={'tertiary'}
        svgPath={args.svgPath}
        onClick={action('Button story klikk på tertiary')}
      >
        {'Tertiary knapp'}
      </Button>
    </div>
    <div style={{ marginBottom: '1em' }}>
      <Button {...args} variant={'danger'} svgPath={args.svgPath}>
        {'Danger variant'}
      </Button>
    </div>
  </>
);

const buttonDefaultParameters = {
  design: [
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
  ],
};

export const ButtonDefault: Story<ButtonProps> = TemplateDefault.bind({});
ButtonDefault.storyName = 'Default';
const baseArgs = {
  children: 'Klikk',
};

ButtonDefault.args = {
  ...baseArgs,
  variant: 'primary',
};
ButtonDefault.parameters = buttonDefaultParameters;

export const Variants: Story<ButtonProps> = TemplateVariant.bind({});
Variants.args = {
  ...baseArgs,
  ariaDescribedby: 'elementid-satt-i-story',
  variant: 'secondary',
};
Variants.parameters = buttonDefaultParameters;
