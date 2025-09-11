import { Meta } from '@storybook/react-vite';

import { Link } from '@skatteetaten/ds-buttons';

import * as LinkStories from './Link.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Link',
  component: Link,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Link>;
export default meta;
export const Snapshots = createSingleStory(LinkStories, meta);
