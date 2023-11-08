import { RadioGroup } from '@skatteetaten/ds-forms';
import { Meta, StoryObj } from '@storybook/react';

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
  },
} satisfies Meta<typeof RadioGroup.Radio>;

export const Preview = {
  args: {
    children: 'Enkeltpersonsforetak',
  },
} satisfies StoryObj<typeof RadioGroup.Radio>;
