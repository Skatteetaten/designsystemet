import { ExternalLayout } from '@skatteetaten/ds-core-utils';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: ExternalLayout,
  title: 'Layouts / External',
} as ComponentMeta<typeof ExternalLayout>;

const ExternalTemplate: ComponentStory<typeof ExternalLayout> = (args) => (
  <div style={{ backgroundColor: 'var(--palette-burgundy-10)' }}>
    <ExternalLayout {...args} />
  </div>
);

export const External = ExternalTemplate.bind({});
