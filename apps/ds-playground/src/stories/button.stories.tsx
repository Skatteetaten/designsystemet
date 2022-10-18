import {
  Button,
  ButtonProps,
  getVariantDefault,
  getDisabledDefault,
} from '@skatteetaten/ds-buttons';
import {
  EditSVGpath,
  SendSVGpath,
  AddOutlineSVGpath,
} from '@skatteetaten/ds-icons';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import './classnames.stories.css';

const iconList = {
  Send: { svgPath: SendSVGpath },
  Edit: { svgPath: EditSVGpath },
  AddOutlineSVGpath: { svgPath: AddOutlineSVGpath },
};

export default {
  component: Button,
  title: 'Design System/Button',
  argTypes: {
    variant: {
      /*       description: 'Button variant (primary | secondary | tertiary | danger)', */
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      control: 'radio',
      table: { defaultValue: { summary: getVariantDefault() } },
    },
    iconProps: {
      options: [''].concat(Object.keys(iconList)),
      control: 'select',
      mapping: iconList,
      description: 'Icon-komponent (optional)',
      table: { defaultValue: { summary: 'undefined' } },
    },
    disabled: {
      /* description:
        'Hvis knapp er disabled så overskrives variant-stilene med :disable stil', */
      control: 'boolean',
      table: { defaultValue: { summary: getDisabledDefault() } },
    },
    children: {
      description: 'Tekst på knapp',
      control: 'text',
      table: { defaultValue: { summary: '' } },
    },
    className: {
      control: 'select',
      options: ['', 'buttonClassnameGreen', 'buttonClassnameBlue'],
      description:
        'Verdien appended til designsystemets stilsett for komponent',
      table: { defaultValue: { summary: '' } },
    },
    tabIndex: {
      control: 'text',
      table: { defaultValue: { summary: '' } },
    },
    'aria-label': {
      control: 'text',
      table: { defaultValue: { summary: '' } },
    },
    'aria-hidden': {
      control: 'boolean',
      table: { defaultValue: { summary: '' } },
    },
    'aria-describedby': {
      control: 'text',
      table: { defaultValue: { summary: '' } },
    },
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
        /* Overskriver aria-label satt i Primary.args.['aria-label'] */
        aria-label={'Erstatningslabel satt direkte i komponenten som props'}
        iconProps={args.iconProps}
        onClick={action('Button story klikk på primary')}
      >
        {'Primary knapp'}
      </Button>
    </div>
    <div style={{ marginBottom: '1em' }}>
      <Button
        {...args}
        variant={'secondary'}
        iconProps={args.iconProps}
        onClick={action('Button story klikk på secondary')}
      >
        {'Secondary knapp'}
      </Button>
    </div>
    <div style={{ marginBottom: '1em' }}>
      <Button
        {...args}
        variant={'tertiary'}
        iconProps={args.iconProps}
        onClick={action('Button story klikk på tertiary')}
      >
        {'Tertiary knapp'}
      </Button>
    </div>
    <div style={{ marginBottom: '1em' }}>
      <Button {...args} variant={'danger'} iconProps={args.iconProps}>
        {'Danger variant'}
      </Button>
    </div>
  </>
);

export const ButtonDefault: Story<ButtonProps> = TemplateDefault.bind({});
ButtonDefault.storyName = 'Default';
const baseArgs = {
  children: 'Klikk',
};
const designUrl =
  'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=1765%3A8640';

ButtonDefault.args = {
  ...baseArgs,
  variant: 'primary',
  disabled: false,
};
ButtonDefault.parameters = {
  displayName: 'Hei verden',
  design: [
    {
      name: 'Varianter',
      type: 'figma',
      url: designUrl,
    },
  ],
  backgrounds: {
    values: [
      { name: 'Svart', value: '#000' },
      { name: 'Hvit', value: '#fff' },
    ],
  },
};

export const Variants: Story<ButtonProps> = TemplateVariant.bind({});
Variants.args = {
  ...baseArgs,
  'aria-label':
    'Alternativ tekst i aria-label satt som props i story for alle Primary-buttons',
  'aria-describedby': 'elementid satt i story',
  variant: 'secondary',
};
Variants.parameters = {
  controls: { include: ['disabled', 'className'] },
  design: [
    {
      name: 'Varianter',
      type: 'figma',
      url: designUrl,
    },
  ],
};

export const VariantsWithIcon: Story<ButtonProps> = TemplateVariant.bind({});
VariantsWithIcon.args = {
  ...baseArgs,
  iconProps: { svgPath: SendSVGpath },
};
VariantsWithIcon.parameters = {
  controls: { include: ['disabled', 'className'] },
  design: [
    {
      name: 'Varianter',
      type: 'figma',
      url: designUrl,
    },
  ],
};
