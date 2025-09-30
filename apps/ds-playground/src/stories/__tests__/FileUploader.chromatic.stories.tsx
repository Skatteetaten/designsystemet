import { Meta } from '@storybook/react-vite';

import { FileUploader } from '@skatteetaten/ds-forms';

import * as FileUploaderStories from './FileUploader.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/FileUploader',
  component: FileUploader,
  tags: ['chromatic', '!autodocs'],
  parameters: {
    pseudoSelector: 'button',
  },
} satisfies Meta<typeof FileUploader>;
export default meta;
export const Snapshots = createSingleStory(FileUploaderStories, meta);
