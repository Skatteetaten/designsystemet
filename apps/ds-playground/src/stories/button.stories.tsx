import { Button } from '@skatteetaten/ds-buttons';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// import ButtonDocs from '../docs/button.mdx';

export default {
  component: Button,
  title: 'Design System/Button',
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
  },
} as ComponentMeta<typeof Button>;

const TemplateDefault: ComponentStory<typeof Button> = (args) => (
  <Button {...args} variant={args.variant}>
    {args.children}
  </Button>
);

const TemplateVariant: ComponentStory<typeof Button> = (args) => (
  <>
    <Button
      {...args}
      variant={'primary'}
      onClick={action('KlikkEvent primary')}
    />
    <Button
      {...args}
      variant={'secondary'}
      onClick={action('KlikkEvent secondary')}
    />
    <Button
      {...args}
      variant={'tertiary'}
      onClick={action('KlikkEvent tertiary')}
    />
    <Button {...args} variant={'danger'} onClick={action('danger')} />
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
  design: [
    {
      name: 'Varianter',
      type: 'figma',
      url: 'https://www.figma.com/file/nuVtE8FTaeGVs6eZQbEzyM/Funksjonelle-beskrivelser---eksempler?node-id=1765%3A8640',
    },
  ],
  backgrounds: {
    values: [
      { name: 'white', value: '#000' },
      { name: 'black', value: '#fff' },
    ],
  },
};

Primary.storyName = 'Button';
Primary.args = {
  ...baseArgs,
  variant: 'primary',
};

Secondary.storyName = 'Button og Icon';
Secondary.args = {
  ...baseArgs,
  variant: 'secondary',
  icon: 'arrow',
};
