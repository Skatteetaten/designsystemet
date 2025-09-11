/* eslint-disable import/order */
import { Meta } from '@storybook/react-vite';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { Help } from '../../../../../libs/ds-forms/src/Help/Help';

import * as HelpStories from './Help.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Help',
  component: Help,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Help>;
export default meta;
export const Snapshots = createSingleStory(HelpStories, meta);
