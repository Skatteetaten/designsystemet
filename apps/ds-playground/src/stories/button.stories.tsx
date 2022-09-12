import { Button } from '@skatteetaten/ds-buttons';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// import ButtonDocs from '../docs/button.mdx';

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
    },
    icon: {
      name: 'icon',
      description: 'Alternativt ikon',
      control: 'text',
    },
    disabled: {
      description:
        'Hvis knapp er disabled så overskrives variant-stilene med :disable stil',
      control: 'boolean',
    },
    children: {
      description: 'Tekst på knapp',
      control: 'text',
    },
    className: {
      description:
        'Verdien til blir satt etter designsystemets stilsett for komponent',
      control: 'text',
    },
    tabIndex: {
      control: 'text',
    },
    'aria-label': { control: 'text' },
    'aria-hidden': { control: 'boolean' },
    'aria-labelledby': { control: 'text' },
    'aria-describedby': { control: 'text' },
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
        onClick={action('KlikkEvent primary')}
        /* Overskriver aria-label satt i Primary.args.['aria-label'] */
        aria-label={'Erstatningslabel satt direkte i komponenten som props'}
      >
        {'Primary knapp'}
      </Button>
    </div>
    <div style={{ marginBottom: '1em' }}>
      <Button
        {...args}
        variant={'secondary'}
        onClick={action('KlikkEvent secondary')}
      >
        {'Secondary knapp'}
      </Button>
    </div>
    <div style={{ marginBottom: '1em' }}>
      <Button
        {...args}
        variant={'tertiary'}
        onClick={action('KlikkEvent tertiary')}
      >
        {'Tertiary knapp'}
      </Button>
    </div>
    <div style={{ marginBottom: '1em' }}>
      <Button {...args} variant={'danger'} onClick={action('danger')}>
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
  'aria-describedby': 'jaj',
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
  icon: 'arrow',
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
