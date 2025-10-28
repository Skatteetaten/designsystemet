import { Meta } from '@storybook/react-vite';

import { Combobox } from '@skatteetaten/ds-forms';

import * as ComboboxStories from './Combobox.test.stories';
import { createSingleStory } from '../../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Combobox',
  component: Combobox,
  tags: ['chromatic', '!autodocs'],
  parameters: {
    pseudoSelector: 'input',
  },
} satisfies Meta<typeof Combobox>;
export default meta;

export const Snapshots = createSingleStory(ComboboxStories, meta);
