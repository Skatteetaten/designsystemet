import { InternalLayout } from '@skatteetaten/ds-core-utils';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: InternalLayout,
  title: 'Layouts / Internal',
} as ComponentMeta<typeof InternalLayout>;

const InternalTemplate: ComponentStory<typeof InternalLayout> = (args) => (
  <div style={{ backgroundColor: 'var(--palette-burgundy-10)' }}>
    <InternalLayout {...args} />
  </div>
);

export const Internal = InternalTemplate.bind({});
