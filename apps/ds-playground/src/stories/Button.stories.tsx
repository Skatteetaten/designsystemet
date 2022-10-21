/* eslint-disable sonarjs/no-duplicate-string */
import {
  Button,
  ButtonProps,
  getButtonVariantDefault,
} from '@skatteetaten/ds-buttons';
import {
  getCommonClassNameDefault,
  getCommonDisabledDefault,
} from '@skatteetaten/ds-core-utils';
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
      table: {
        category: 'Props',
        defaultValue: { summary: getButtonVariantDefault() },
      },
    },
    svgPath: {
      options: [''].concat(Object.keys(iconList)),
      control: 'select',
      mapping: iconList,
      table: { category: 'Props', defaultValue: { summary: '' } },
    },
    disabled: {
      control: 'boolean',
      table: {
        category: 'HTML-attributt',
        defaultValue: { summary: getCommonDisabledDefault() },
      },
    },
    className: {
      control: 'select',
      options: ['', 'dummyClassname'],
      table: {
        category: 'HTML-attributt',
        defaultValue: { summary: getCommonClassNameDefault() },
      },
    },
    onClick: {
      table: { category: 'Event' },
      control: false,
    },
    onFocus: {
      table: { category: 'Event' },
      control: false,
    },
    onBlur: {
      table: { category: 'Event' },
      control: false,
    },
    // TODO Test av gruppering
    /* Vi tester med gruppering.
    påfølgende argTypes blir lagt til for å få satt riktig gruppe.
    Hvis OK så må det jobbes med hvordan dette gjøres.
    F.eks så skal HTML-attributer kunne være default. 
    I teorien skal det kunne gå ann å definere Global argTypes i preview.js 
    Ref https://storybook.js.org/docs/react/api/argtypes#global-argtypes
        export const argTypes = { table: { category: 'HTML-attributt' } };
    */
    key: { table: { category: 'Props' } },
    ref: { table: { category: 'HTML-attributt' } },
    id: { table: { category: 'HTML-attributt' } },
    tabIndex: { table: { category: 'HTML-attributt' } },
    children: { table: { category: 'Props' } },
    accessKey: { table: { category: 'HTML-attributt' } },
    ariaDescribedby: { table: { category: 'HTML-attributt' } },
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
