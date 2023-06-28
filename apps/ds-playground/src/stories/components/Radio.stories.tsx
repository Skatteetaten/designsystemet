import { RadioGroup } from '@skatteetaten/ds-forms';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: RadioGroup.Radio,
  title: 'Komponenter/RadioGroup/Radio',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    description: { table: { category: category.props } },
    // HTML
    value: {
      table: { category: category.htmlAttribute },
    },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
  },
  parameters: {
    version: getVersion('ds-forms'),
    docs: { source: { type: 'code' } },
  },
} as ComponentMeta<typeof RadioGroup.Radio>;

const TemplateDefault: ComponentStory<typeof RadioGroup.Radio> = (args) => {
  return <RadioGroup.Radio {...args} />;
};

export const RadioDefault = TemplateDefault.bind({});
RadioDefault.storyName = 'Default';
RadioDefault.args = {
  children: 'Enkeltpersonsforetak',
};
