import { Meta } from '@storybook/react-vite';

import { Modal } from '@skatteetaten/ds-overlays';

import * as ModalStories from './Modal.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Modal',
  component: Modal,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Modal>;
export default meta;
export const Snapshots = createSingleStory(ModalStories, meta);
