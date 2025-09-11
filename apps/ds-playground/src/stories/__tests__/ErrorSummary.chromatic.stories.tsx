import { Meta } from '@storybook/react-vite';

import { ErrorSummary } from '@skatteetaten/ds-forms';

import * as ErrorSummaryStories from './ErrorSummary.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/ErrorSummary/ErrorSummary',
  component: ErrorSummary,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof ErrorSummary>;
export default meta;
export const Snapshots = createSingleStory(ErrorSummaryStories, meta);
