import { Meta } from '@storybook/react-vite';

import { LinkGroup } from '@skatteetaten/ds-buttons';

import * as LinkGroupStories from './LinkGroup.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/LinkGroup',
  component: LinkGroup,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof LinkGroup>;
export default meta;
export const Snapshots = createSingleStory(LinkGroupStories, meta);
