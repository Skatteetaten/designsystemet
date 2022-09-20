import { Button } from '@skatteetaten/ds-buttons';
import {
  AccountChildIcon,
  AccountEnkIcon,
  Icon as DefaultIcon,
  AccountMultipleIcon,
} from '@skatteetaten/ds-icons';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import './button.stories.css';
// import ButtonDocs from '../docs/button.mdx';

const iconList = {
  AccountChildIcon: <AccountChildIcon {...DefaultIcon.arguments} />,
  AccountEnkIcon: <AccountEnkIcon {...DefaultIcon.arguments} />,
  AccountMultipleIcon: <AccountMultipleIcon {...DefaultIcon.arguments} />,
};

export default {
  component: Button,
  title: 'Design System/Button',
  decorators: [
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    (Story) => <div style={{ margin: '1em' }}>{Story()}</div>,
  ],
  argTypes: {
    variant: {
      description: 'Button variant (primary | secondary | tertiary | danger)',
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      control: 'radio',
      table: { defaultValue: { summary: 'primary' } },
    },
    icon: {
      options: [''].concat(Object.keys(iconList)),
      control: 'select',
      mapping: iconList,
      description: 'Icon-komponent (optional)',
      table: { defaultValue: { summary: 'undefined' } },
    },
    disabled: {
      description:
        'Hvis knapp er disabled så overskrives variant-stilene med :disable stil',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      description: 'Tekst på knapp',
      control: 'text',
      table: { defaultValue: { summary: '' } },
    },
    className: {
      control: 'select',
      options: ['', 'buttonClassnameDark', 'buttonClassnameLight'],
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
    'aria-labelledby': {
      control: 'text',
      table: { defaultValue: { summary: '' } },
    },
    'aria-describedby': {
      control: 'text',
      table: { defaultValue: { summary: '' } },
    },
  },
} as ComponentMeta<typeof Button>;

const TemplateDefault: ComponentStory<typeof Button> = (args) => (
  <Button {...args} variant={args.variant}>
    {args.children}
  </Button>
);

const TemplateVariant: ComponentStory<typeof Button> = (args) => (
  <>
    <div style={{ marginBottom: '1em' }}>
      <Button
        {...args}
        variant={'primary'}
        aria-label={'Erstatningslabel satt direkte i komponenten som props'}
        /* Overskriver aria-label satt i Primary.args.['aria-label'] */
        icon={
          args.icon ? (
            <AccountEnkIcon
              /* NB. DefautlIcon.arguments er viktig. */
              {...DefaultIcon.arguments}
            />
          ) : undefined
        }
        onClick={action('KlikkEvent primary')}
      >
        {'Primary knapp'}
      </Button>
    </div>
    <div style={{ marginBottom: '1em' }}>
      <Button
        {...args}
        variant={'secondary'}
        icon={
          args.icon ? <AccountEnkIcon {...DefaultIcon.arguments} /> : undefined
        }
        onClick={action('KlikkEvent secondary')}
      >
        {'Secondary knapp'}
      </Button>
    </div>
    <div style={{ marginBottom: '1em' }}>
      <Button
        {...args}
        variant={'tertiary'}
        icon={
          args.icon ? <AccountEnkIcon {...DefaultIcon.arguments} /> : undefined
        }
        onClick={action('KlikkEvent tertiary')}
      >
        {'Tertiary knapp'}
      </Button>
    </div>
    <div style={{ marginBottom: '1em' }}>
      <Button
        {...args}
        variant={'danger'}
        icon={
          args.icon ? <AccountEnkIcon {...DefaultIcon.arguments} /> : undefined
        }
        onClick={action('danger')}
      >
        {'Danger variant'}
      </Button>
    </div>
  </>
);

export const Default = TemplateDefault.bind({});
export const Primary = TemplateVariant.bind({});
export const Secondary = TemplateVariant.bind({});

const baseArgs = {};
const designUrl =
  'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=1765%3A8640';

Default.args = {
  ...baseArgs,
  variant: 'primary',
};
Default.storyName = 'Standard';
Default.parameters = {
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

Primary.storyName = 'Button';
Primary.args = {
  ...baseArgs,
  'aria-label':
    'Alternativ tekst i aria-label satt som props i story for alle Primary-buttons',
  'aria-describedby': 'elementid satt i story',
  variant: 'secondary',
};
Primary.parameters = {
  design: [
    {
      name: 'Varianter',
      type: 'figma',
      url: designUrl,
    },
  ],
};

Secondary.storyName = 'Button med Icon';
Secondary.args = {
  ...baseArgs,
  icon: true,
};
Secondary.parameters = {
  design: [
    {
      name: 'Varianter',
      type: 'figma',
      url: designUrl,
    },
  ],
};
