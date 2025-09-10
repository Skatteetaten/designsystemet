/* eslint-disable import/order */
import { Meta } from '@storybook/react-vite';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { LabelWithHelp } from '../../../../../libs/ds-forms/src/LabelWithHelp/LabelWithHelp';

import * as LabelWithHelpStories from './LabelWithHelp.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/LabelWithHelp',
  component: LabelWithHelp,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof LabelWithHelp>;
export default meta;
export const Snapshots = createSingleStory(LabelWithHelpStories, meta);
