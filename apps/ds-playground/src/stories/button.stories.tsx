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
    icon: {
      name: 'icon',
      description: 'Alternativt ikon',
      control: {
        type: 'text',
      },
    },
    variant: {
      description: 'Button variant (primary | secondary | tertiary | danger)',
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      control: {
        type: 'radio',
      },
    },
    disabled: {
      description:
        'Hvis knapp er disabled så overskrives variant stilene med :disable stil',
      control: {
        type: 'boolean',
      },
    },
    children: {
      description: 'Tekst på knapp',
      control: {
        type: 'text',
      },
    },
    className: {
      description:
        'Verdien til blir satt etter designsystemets stilsett for komponent',
      control: {
        type: 'text',
      },
    },
    role: {
      description: 'Ikke sett role hvis du ønsker role=button',
      control: 'text',
    },
    ariaLabel: { control: 'text' },
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
      />
    </div>
    <div style={{ marginBottom: '1em' }}>
      <Button
        {...args}
        variant={'secondary'}
        onClick={action('KlikkEvent secondary')}
      />
    </div>
    <div style={{ marginBottom: '1em' }}>
      <Button
        {...args}
        variant={'tertiary'}
        onClick={action('KlikkEvent tertiary')}
      />
    </div>
    <div style={{ marginBottom: '1em' }}>
      <Button {...args} variant={'danger'} onClick={action('danger')} />
    </div>
  </>
);

export const Default = TemplateDefault.bind({});
export const Primary = TemplateVariant.bind({});
export const Secondary = TemplateVariant.bind({});

const baseArgs = {};

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
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=1765%3A8640',
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
  variant: 'primary',
};
Primary.parameters = {
  design: [
    {
      name: 'Varianter',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=1765%3A8640',
    },
  ],
};

Secondary.storyName = 'Button og Icon (wip)';
Secondary.args = {
  ...baseArgs,
  variant: 'secondary',
  icon: 'arrow',
};
Secondary.parameters = {
  design: [
    {
      name: 'Varianter',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=1765%3A8640',
    },
  ],
};
