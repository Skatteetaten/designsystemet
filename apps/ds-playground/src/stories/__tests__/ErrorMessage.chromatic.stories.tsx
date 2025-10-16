import { Meta } from '@storybook/react-vite';

import { ErrorMessage } from '@skatteetaten/ds-forms';

import * as ErrorMessageStories from './ErrorMessage.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/ErrorMessage',
  component: ErrorMessage,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof ErrorMessage>;
export default meta;
export const Snapshots = createSingleStory(ErrorMessageStories, meta);
