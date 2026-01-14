import { Meta } from '@storybook/react-vite';

import { ErrorSummary } from '@skatteetaten/ds-forms';

import * as ErrorSummaryGroupStories from './ErrorSummaryGroup.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/ErrorSummary/Group',
  component: ErrorSummary.Error,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof ErrorSummary.Error>;
export default meta;
export const Snapshots = createSingleStory(ErrorSummaryGroupStories, meta);

export const Mobile = createSingleStory(ErrorSummaryGroupStories, meta, {
  viewport: '--mobile',
  delay: 100,
});
