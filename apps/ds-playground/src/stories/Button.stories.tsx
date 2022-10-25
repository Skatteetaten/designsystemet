/* eslint-disable sonarjs/no-duplicate-string */
import {
  Button,
  ButtonProps,
  getButtonVariantDefault,
} from '@skatteetaten/ds-buttons';
import { getCommonDisabledDefault } from '@skatteetaten/ds-core-utils';
import {
  EditSVGpath,
  SendSVGpath,
  AddOutlineSVGpath,
} from '@skatteetaten/ds-icons';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import { category, storyDefault } from '../../.storybook/helpers';
import './classnames.stories.css';

const iconList = {
  Send: SendSVGpath,
  Edit: EditSVGpath,
  AddOutlineSVGpath: AddOutlineSVGpath,
};

export default {
  component: Button,
  title: 'Design System/Button',
  argTypes: {
    accessKey: {
      control: 'text',
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: '' },
      },
    },
    ariaDescribedby: { table: { category: category.aria } },
    children: { table: { category: category.props } },
    className: { ...storyDefault.className },
    disabled: {
      control: 'boolean',
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: getCommonDisabledDefault() },
      },
    },
    id: { ...storyDefault.id },
    key: { ...storyDefault.key },
    onClick: { ...storyDefault.onEvent },
    onFocus: { ...storyDefault.onEvent },
    onBlur: { ...storyDefault.onEvent },
    ref: { ...storyDefault.ref },
    svgPath: {
      options: [''].concat(Object.keys(iconList)),
      control: 'select',
      mapping: iconList,
      table: { category: category.props },
    },
    tabIndex: { table: { category: category.htmlAttribute } },
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getButtonVariantDefault() },
      },
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
