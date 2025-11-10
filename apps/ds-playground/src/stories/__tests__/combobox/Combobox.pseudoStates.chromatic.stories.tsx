import { Meta } from '@storybook/react-vite';

import { Combobox } from '@skatteetaten/ds-forms';

import * as ComboboxStories from './Combobox.pseudoStates.test.stories';
import { createSingleStory } from '../../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Combobox',
  component: Combobox,
  tags: ['chromatic', '!autodocs'],
  parameters: {
    pseudoSelector: [
      'input',
      'div[data-chevron-button="true"]',
      'button',
      'li:nth-child(3)',
    ],
  },
} satisfies Meta<typeof Combobox>;
export default meta;
export const Snapshots = createSingleStory(ComboboxStories, meta);
