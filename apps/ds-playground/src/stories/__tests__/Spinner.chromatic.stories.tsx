import { Meta } from '@storybook/react-vite';

import { Spinner } from '@skatteetaten/ds-progress';

import * as SpinnerStories from './Spinner.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Spinner',
  component: Spinner,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Spinner>;
export default meta;
export const Snapshots = createSingleStory(SpinnerStories, meta);
