import { Meta } from '@storybook/react-vite';

import { ErrorSummary } from '@skatteetaten/ds-forms';

import * as ErrorSummaryErrorStories from './ErrorSummaryError.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/ErrorSummary/Error',
  component: ErrorSummary.Error,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof ErrorSummary.Error>;
export default meta;
export const Snapshots = createSingleStory(ErrorSummaryErrorStories, meta);
