import { Button } from '@skatteetaten/ds-buttons';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const wrapper = '[data-test-block]';
const defaultButtonText = 'Standardtekst på knapp';

export default {
  component: Button,
  title: 'Tests/Button',
  decorators: [
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    (Story) => (
      <div style={{ margin: '1em' }} {...{ wrapper }}>
        {Story()}
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} variant={args.variant}>
    {args.children}
  </Button>
);

export const ButtonDefaults = Template.bind({});

const baseArgs = {
  children: defaultButtonText,
};

ButtonDefaults.args = {
  ...baseArgs,
  variant: 'primary',
};
