import { Meta } from '@storybook/react-vite';

import { RolePicker } from '@skatteetaten/ds-overlays';

import * as RolePickerStories from './RolePicker.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/RolePicker',
  component: RolePicker,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof RolePicker>;
export default meta;
export const Snapshots = createSingleStory(RolePickerStories, meta);
