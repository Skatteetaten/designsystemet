import { Meta } from '@storybook/react-vite';

import { InlineButton } from '@skatteetaten/ds-buttons';

import * as InlineButtonStories from './InlineButton.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/InlineButton',
  component: InlineButton,
  tags: ['chromatic', '!autodocs'],
  parameters: {
    pseudoSelector: '> button',
  },
} satisfies Meta<typeof InlineButton>;
export default meta;
export const Snapshots = createSingleStory(InlineButtonStories, meta);
