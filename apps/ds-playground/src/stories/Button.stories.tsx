import {
  Button,
  ButtonProps,
  getCommonClassNameDefault,
  getCommonDisabledDefault,
  getButtonVariantDefault,
} from '@skatteetaten/ds-buttons';
import {
  EditSVGpath,
  SendSVGpath,
  AddOutlineSVGpath,
} from '@skatteetaten/ds-icons';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import './classnames.stories.css';

// TODO FRONT-935 Endre fra iconProps til svgPath.
const iconList = {
  Send: SendSVGpath,
  Edit: EditSVGpath,
  AddOutlineSVGpath: AddOutlineSVGpath,
};

export default {
  component: Button,
  title: 'Design System/Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      control: 'radio',
      table: { defaultValue: { summary: getButtonVariantDefault() } },
    },
    iconProps: {
      options: [''].concat(Object.keys(iconList)),
      control: 'select',
      mapping: iconList,
      table: { defaultValue: { summary: '' } },
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: getCommonDisabledDefault() } },
    },
    className: {
      control: 'select',
      options: ['', 'dummyClassname'],
      table: { defaultValue: { summary: getCommonClassNameDefault() } },
    },
    onClick: {
      control: false,
    },
    onFocus: {
      control: false,
    },
    onBlur: {
      control: false,
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

export const ButtonDefault: Story<ButtonProps> = TemplateDefault.bind({});
ButtonDefault.storyName = 'Default';
const baseArgs = {
  children: 'Klikk',
};
// TODO Endre url til riktig side i Figma på Button sin design-fane
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
  ariaDescribedby: 'elementid-satt-i-story',
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
