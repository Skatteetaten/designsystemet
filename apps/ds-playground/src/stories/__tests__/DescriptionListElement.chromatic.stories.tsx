import { Meta } from '@storybook/react-vite';

import { DescriptionList } from '@skatteetaten/ds-content';

import * as DescriptionListElementStories from './DescriptionListElement.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/DescriptionListElement',
  component: DescriptionList.Element,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof DescriptionList.Element>;
export default meta;
export const Snapshots = createSingleStory(DescriptionListElementStories, meta);
